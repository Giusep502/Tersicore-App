import { Component , ElementRef, OnInit, ViewChild } from "@angular/core";
import { Tracks } from "./components/tracks";
import { TracksService } from "./services/tracks.service";
import { TextField } from "ui/text-field";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    providers: [TracksService],
    styleUrls: ["pages/list/list-common.css", "pages/list/liststyle.css"]
})

export class AppComponent implements OnInit {

    trackList: Array<Tracks> = [];
    filteredList: Array<Tracks> = [];
    grocery="";
    isLoading=false;

    @ViewChild("groceryTextField") groceryTextField: ElementRef;
    
    constructor(private tracksService: TracksService) {}

    ngOnInit() {
        this.isLoading=true;
        this.tracksService.getTracks().subscribe(
        loadedGroceries => {
            loadedGroceries.forEach((groceryObject) => {
                this.trackList.unshift(groceryObject);
                })
            this.isLoading=false;
            this.filteredList=this.trackList;
            }
        );
    }

    condition(item, index, array){
        if(this.grocery.trim() === "" || item.title.indexOf(this.grocery)!=-1)
            return item;
    }

    filterList(){
        this.filteredList = this.trackList.filter(this.condition);
    }

}
