"use strict";
var core_1 = require("@angular/core");
var tracks_service_1 = require("../.././services/tracks.service");
var router_1 = require("@angular/router");
var nativescript_audio_1 = require('nativescript-audio');
var ListComponent = (function () {
    function ListComponent(router, tracksService) {
        this.router = router;
        this.tracksService = tracksService;
        this.database = [];
        this.grocery = "";
        this.isLoading = false;
        this.isUpdated = false;
        this.currentlySelected = "";
        this.pending = "none";
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.trackList = [];
        this.currentServer = this.tracksService.getServer();
        if (!this.isUpdated) {
            this.isLoading = true;
            this.tracksService.getTracks().subscribe(function (loadedGroceries) {
                loadedGroceries.forEach(function (groceryObject) {
                    _this.trackList.unshift(groceryObject);
                    _this.database.unshift(groceryObject);
                });
                _this.isLoading = false;
                _this.isUpdated = true;
            });
        }
        else
            this.trackList = this.database.filter(function (item) { return _this.grocery.trim() === "" || (item.title && item.title.indexOf(_this.grocery) != -1); });
    };
    ListComponent.prototype.add = function () {
        this.ngOnInit();
    };
    ListComponent.prototype.changeServer = function () {
        this.tracksService.setServer(this.currentServer);
        this.isUpdated = false;
        this.ngOnInit();
    };
    ListComponent.prototype.play = function (item) {
        if (this.currentlySelected == item.resources[0].uuid) {
            if (this._player.isAudioPlaying()) {
                this._player.pause();
            }
            else {
                this._player.play();
            }
        }
        else 
        //if (this.pending=="none") 
        {
            //this.pending=item.resources[0].uuid;
            if (this._player)
                this._player.dispose();
            this._player = new nativescript_audio_1.TNSPlayer();
            this._player.playFromUrl({
                audioFile: this.tracksService.getStreamLink() + item.resources[0].uuid,
                loop: false,
                completeCallback: this._trackComplete.bind(this),
                errorCallback: this._trackError.bind(this),
            });
            this.currentlySelected = item.resources[0].uuid;
            this.router.navigate(["/player"]);
        }
    };
    ListComponent.prototype._trackComplete = function (info) {
        // Android: mp for MediaPlayer
        console.log('reference back to player:', info.mp);
    };
    ListComponent.prototype._trackError = function (info) {
        // Android:
        console.log('reference back to player:', info.mp);
        console.log('what happened:', info.what);
        console.log('extra info on the error:', info.extra);
        // iOS:
        console.log('reference back to player:', info.player);
        console.log('the error:', info.error);
    };
    ListComponent.prototype._trackPrepared = function (info) {
        console.log("Mannaggiaddio");
        this.currentlySelected = this.pending;
        this.pending = "none";
    };
    __decorate([
        core_1.ViewChild("groceryTextField"), 
        __metadata('design:type', core_1.ElementRef)
    ], ListComponent.prototype, "groceryTextField", void 0);
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "./pages/list/list.component.html",
            providers: [tracks_service_1.TracksService],
            styleUrls: ["./pages/list/list-common.css", "./pages/list/liststyle.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, tracks_service_1.TracksService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBELGVBQWUsQ0FBQyxDQUFBO0FBRTFFLCtCQUE4QixpQ0FBaUMsQ0FBQyxDQUFBO0FBRWhFLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLG1DQUEwQixvQkFBb0IsQ0FBQyxDQUFBO0FBUy9DO0lBY0ksdUJBQW9CLE1BQWMsRUFBVSxhQUE0QjtRQUFwRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFYeEUsYUFBUSxHQUFrQixFQUFFLENBQUM7UUFDN0IsWUFBTyxHQUFDLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBQyxLQUFLLENBQUM7UUFDaEIsY0FBUyxHQUFDLEtBQUssQ0FBQztRQUVoQixzQkFBaUIsR0FBVSxFQUFFLENBQUM7UUFDOUIsWUFBTyxHQUFXLE1BQU0sQ0FBQztJQUtrRCxDQUFDO0lBRTVFLGdDQUFRLEdBQVI7UUFBQSxpQkFvQkM7UUFuQkcsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xELEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQ3hDLFVBQUEsZUFBZTtnQkFDWCxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsYUFBYTtvQkFDOUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3RDLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDLENBQUMsQ0FBQTtnQkFDTixLQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBQztnQkFDckIsS0FBSSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUM7WUFDcEIsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDO1FBQ0QsSUFBSTtZQUNBLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ2pDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFsRixDQUFrRixDQUM3RixDQUFDO0lBQ1YsQ0FBQztJQUVELDJCQUFHLEdBQUg7UUFDSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBQyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCw0QkFBSSxHQUFKLFVBQUssSUFBSTtRQUNOLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsSUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDOUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEIsQ0FBQztRQUNiLENBQUM7UUFBQyxJQUFJO1FBQ04sNEJBQTRCO1FBQzVCLENBQUM7WUFFRyxzQ0FBc0M7WUFDdEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSw4QkFBUyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7Z0JBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtnQkFDdEUsSUFBSSxFQUFFLEtBQUs7Z0JBQ3BCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDaEQsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUVwQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsaUJBQWlCLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7SUFDTCxDQUFDO0lBRU8sc0NBQWMsR0FBdEIsVUFBdUIsSUFBUztRQUNsQyw4QkFBOEI7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFbkQsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQW9CLElBQVM7UUFDNUIsV0FBVztRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBELE9BQU87UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVVLHNDQUFjLEdBQXRCLFVBQXVCLElBQVM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBckZFO1FBQUMsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQzs7MkRBQUE7SUFuQmxDO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztZQUMxQixTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSw0QkFBNEIsQ0FBQztTQUM1RSxDQUFDOztxQkFBQTtJQXFHRixvQkFBQztBQUFELENBQUMsQUFuR0QsSUFtR0M7QUFuR1kscUJBQWEsZ0JBbUd6QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50ICwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVHJhY2tzIH0gZnJvbSBcIi4uLy4uLy4vY29tcG9uZW50cy90cmFja3NcIjtcbmltcG9ydCB7IFRyYWNrc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi9zZXJ2aWNlcy90cmFja3Muc2VydmljZVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFROU1BsYXllciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hdWRpbyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2xpc3QvbGlzdC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW1RyYWNrc1NlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcIi4vcGFnZXMvbGlzdC9saXN0c3R5bGUuY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB0cmFja0xpc3Q6IEFycmF5PFRyYWNrcz47XG4gICAgZGF0YWJhc2U6IEFycmF5PFRyYWNrcz4gPSBbXTtcbiAgICBncm9jZXJ5PVwiXCI7XG4gICAgaXNMb2FkaW5nPWZhbHNlO1xuICAgIGlzVXBkYXRlZD1mYWxzZTtcbiAgICBwcml2YXRlIF9wbGF5ZXI6IFROU1BsYXllcjtcbiAgICBjdXJyZW50bHlTZWxlY3RlZDpzdHJpbmcgPSBcIlwiO1xuICAgIHBlbmRpbmc6IHN0cmluZyA9IFwibm9uZVwiO1xuICAgIGN1cnJlbnRTZXJ2ZXI7XG5cbiAgICBAVmlld0NoaWxkKFwiZ3JvY2VyeVRleHRGaWVsZFwiKSBncm9jZXJ5VGV4dEZpZWxkOiBFbGVtZW50UmVmO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdHJhY2tzU2VydmljZTogVHJhY2tzU2VydmljZSkge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnRyYWNrTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRTZXJ2ZXI9dGhpcy50cmFja3NTZXJ2aWNlLmdldFNlcnZlcigpO1xuICAgICAgICBpZighdGhpcy5pc1VwZGF0ZWQpe1xuICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmc9dHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudHJhY2tzU2VydmljZS5nZXRUcmFja3MoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBsb2FkZWRHcm9jZXJpZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRlZEdyb2Nlcmllcy5mb3JFYWNoKChncm9jZXJ5T2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYWNrTGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhYmFzZS51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nPWZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNVcGRhdGVkPXRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSAgICAgICAgICBcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy50cmFja0xpc3QgPSB0aGlzLmRhdGFiYXNlLmZpbHRlcihcbiAgICAgICAgICAgICAgICBpdGVtID0+IHRoaXMuZ3JvY2VyeS50cmltKCkgPT09IFwiXCIgfHwgKGl0ZW0udGl0bGUgJiYgaXRlbS50aXRsZS5pbmRleE9mKHRoaXMuZ3JvY2VyeSkhPS0xKVxuICAgICAgICAgICAgKTtcbiAgICB9IFxuXG4gICAgYWRkKCl7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTZXJ2ZXIoKXtcbiAgICAgICAgdGhpcy50cmFja3NTZXJ2aWNlLnNldFNlcnZlcih0aGlzLmN1cnJlbnRTZXJ2ZXIpO1xuICAgICAgICB0aGlzLmlzVXBkYXRlZD1mYWxzZTtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cblxuICAgIHBsYXkoaXRlbSl7XG4gICAgICAgaWYodGhpcy5jdXJyZW50bHlTZWxlY3RlZD09aXRlbS5yZXNvdXJjZXNbMF0udXVpZCl7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGxheWVyLmlzQXVkaW9QbGF5aW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3BsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBcbiAgICAgICAgLy9pZiAodGhpcy5wZW5kaW5nPT1cIm5vbmVcIikgXG4gICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy90aGlzLnBlbmRpbmc9aXRlbS5yZXNvdXJjZXNbMF0udXVpZDtcbiAgICAgICAgICAgIGlmKHRoaXMuX3BsYXllcilcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGF5ZXIuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyID0gbmV3IFROU1BsYXllcigpO1xuICAgICAgICAgICAgdGhpcy5fcGxheWVyLnBsYXlGcm9tVXJsKHtcbiAgICAgICAgICAgICAgICBhdWRpb0ZpbGU6IHRoaXMudHJhY2tzU2VydmljZS5nZXRTdHJlYW1MaW5rKCkgKyBpdGVtLnJlc291cmNlc1swXS51dWlkLCAvLyB+ID0gYXBwIGRpcmVjdG9yeVxuICAgICAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuXHRcdFx0ICAgIGNvbXBsZXRlQ2FsbGJhY2s6IHRoaXMuX3RyYWNrQ29tcGxldGUuYmluZCh0aGlzKSxcblx0XHRcdCAgICBlcnJvckNhbGxiYWNrOiB0aGlzLl90cmFja0Vycm9yLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgLy9wcmVwYXJlZENhbGxiYWNrOiB0aGlzLl90cmFja1ByZXBhcmVkLmJpbmQodGhpcylcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRseVNlbGVjdGVkPWl0ZW0ucmVzb3VyY2VzWzBdLnV1aWQ7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcGxheWVyXCJdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3RyYWNrQ29tcGxldGUoaW5mbzogYW55KSB7XG5cdFx0Ly8gQW5kcm9pZDogbXAgZm9yIE1lZGlhUGxheWVyXG5cdFx0Y29uc29sZS5sb2coJ3JlZmVyZW5jZSBiYWNrIHRvIHBsYXllcjonLCBpbmZvLm1wKTtcblxuXHR9XG5cblx0cHJpdmF0ZSBfdHJhY2tFcnJvcihpbmZvOiBhbnkpIHtcblx0XHQvLyBBbmRyb2lkOlxuXHRcdGNvbnNvbGUubG9nKCdyZWZlcmVuY2UgYmFjayB0byBwbGF5ZXI6JywgaW5mby5tcCk7XG5cdFx0Y29uc29sZS5sb2coJ3doYXQgaGFwcGVuZWQ6JywgaW5mby53aGF0KTtcblx0XHRjb25zb2xlLmxvZygnZXh0cmEgaW5mbyBvbiB0aGUgZXJyb3I6JywgaW5mby5leHRyYSk7XG5cblx0XHQvLyBpT1M6XG5cdFx0Y29uc29sZS5sb2coJ3JlZmVyZW5jZSBiYWNrIHRvIHBsYXllcjonLCBpbmZvLnBsYXllcik7XG5cdFx0Y29uc29sZS5sb2coJ3RoZSBlcnJvcjonLCBpbmZvLmVycm9yKTtcblx0fVxuXG4gICAgcHJpdmF0ZSBfdHJhY2tQcmVwYXJlZChpbmZvOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNYW5uYWdnaWFkZGlvXCIpO1xuICAgICAgICB0aGlzLmN1cnJlbnRseVNlbGVjdGVkPXRoaXMucGVuZGluZztcblx0XHR0aGlzLnBlbmRpbmc9XCJub25lXCI7XG5cdH1cblxufVxuIl19