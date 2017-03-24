import { Component , ElementRef, OnInit, ViewChild } from "@angular/core";
import { Tracks } from "../.././components/tracks";
import { TracksService } from "../.././services/tracks.service";
import { TextField } from "ui/text-field";
import { Router } from "@angular/router";
import { TNSPlayer } from 'nativescript-audio';

@Component({
    selector: "list",
    templateUrl: "./pages/list/list.component.html",
    providers: [TracksService],
    styleUrls: ["./pages/list/list-common.css", "./pages/list/liststyle.css"]
})

export class ListComponent implements OnInit {

    trackList: Array<Tracks>;
    database: Array<Tracks> = [];
    grocery="";
    isLoading=false;
    isUpdated=false;
    private _player: TNSPlayer;
    currentlySelected:string = "";
    pending: string = "none";
    currentServer;

    @ViewChild("groceryTextField") groceryTextField: ElementRef;
    
    constructor(private router: Router, private tracksService: TracksService) {}

    ngOnInit() {
        this.trackList = [];
        this.currentServer=this.tracksService.getServer();
        if(!this.isUpdated){
            this.isLoading=true;
            this.tracksService.getTracks().subscribe(
            loadedGroceries => {
                loadedGroceries.forEach((groceryObject) => {
                        this.trackList.unshift(groceryObject);
                        this.database.unshift(groceryObject);
                    })
                this.isLoading=false;
                this.isUpdated=true;
                }
            );
        }          
        else
            this.trackList = this.database.filter(
                item => this.grocery.trim() === "" || (item.title && item.title.indexOf(this.grocery)!=-1)
            );
    } 

    add(){
        this.ngOnInit();
    }

    changeServer(){
        this.tracksService.setServer(this.currentServer);
        this.isUpdated=false;
        this.ngOnInit();
    }

    play(item){
       if(this.currentlySelected==item.resources[0].uuid){
            if (this._player.isAudioPlaying()) {
                        this._player.pause();
                    } else {
                        this._player.play();
                    }              
        } else 
        //if (this.pending=="none") 
        {
                  
            //this.pending=item.resources[0].uuid;
            if(this._player)
                this._player.dispose();
            this._player = new TNSPlayer();
            this._player.playFromUrl({
                audioFile: this.tracksService.getStreamLink() + item.resources[0].uuid, // ~ = app directory
                loop: false,
			    completeCallback: this._trackComplete.bind(this),
			    errorCallback: this._trackError.bind(this),
                //preparedCallback: this._trackPrepared.bind(this)
            });

            this.currentlySelected=item.resources[0].uuid;
            this.router.navigate(["/player"]);
        }
    }

    private _trackComplete(info: any) {
		// Android: mp for MediaPlayer
		console.log('reference back to player:', info.mp);

	}

	private _trackError(info: any) {
		// Android:
		console.log('reference back to player:', info.mp);
		console.log('what happened:', info.what);
		console.log('extra info on the error:', info.extra);

		// iOS:
		console.log('reference back to player:', info.player);
		console.log('the error:', info.error);
	}

    private _trackPrepared(info: any) {
        console.log("Mannaggiaddio");
        this.currentlySelected=this.pending;
		this.pending="none";
	}

}
