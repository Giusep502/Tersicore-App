"use strict";
var core_1 = require("@angular/core");
var tracks_service_1 = require("./services/tracks.service");
var AppComponent = (function () {
    function AppComponent(tracksService) {
        this.tracksService = tracksService;
        this.trackList = [];
        this.filteredList = [];
        this.grocery = "";
        this.isLoading = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.tracksService.getTracks().subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.trackList.unshift(groceryObject);
            });
            _this.isLoading = false;
            _this.filteredList = _this.trackList;
        });
    };
    AppComponent.prototype.condition = function (item, index, array) {
        if (this.grocery.trim() === "" || item.title.indexOf(this.grocery) != -1)
            return item;
    };
    AppComponent.prototype.filterList = function () {
        this.filteredList = this.trackList.filter(this.condition);
    };
    __decorate([
        core_1.ViewChild("groceryTextField"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "groceryTextField", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
            providers: [tracks_service_1.TracksService],
            styleUrls: ["pages/list/list-common.css", "pages/list/liststyle.css"]
        }), 
        __metadata('design:paramtypes', [tracks_service_1.TracksService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUEwRCxlQUFlLENBQUMsQ0FBQTtBQUUxRSwrQkFBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQVUxRDtJQVNJLHNCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVBoRCxjQUFTLEdBQWtCLEVBQUUsQ0FBQztRQUM5QixpQkFBWSxHQUFrQixFQUFFLENBQUM7UUFDakMsWUFBTyxHQUFDLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBQyxLQUFLLENBQUM7SUFJbUMsQ0FBQztJQUVwRCwrQkFBUSxHQUFSO1FBQUEsaUJBV0M7UUFWRyxJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FDeEMsVUFBQSxlQUFlO1lBQ1gsZUFBZSxDQUFDLE9BQU8sQ0FBQyxVQUFDLGFBQWE7Z0JBQ2xDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFBO1lBQ04sS0FBSSxDQUFDLFNBQVMsR0FBQyxLQUFLLENBQUM7WUFDckIsS0FBSSxDQUFDLFlBQVksR0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUs7UUFDeEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVELGlDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBeEJEO1FBQUMsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQzs7MERBQUE7SUFkbEM7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1lBQzFCLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLDBCQUEwQixDQUFDO1NBQ3hFLENBQUM7O29CQUFBO0lBbUNGLG1CQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQWpDWSxvQkFBWSxlQWlDeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCAsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYWNrcyB9IGZyb20gXCIuL2NvbXBvbmVudHMvdHJhY2tzXCI7XG5pbXBvcnQgeyBUcmFja3NTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvdHJhY2tzLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW1RyYWNrc1NlcnZpY2VdLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbGlzdC9saXN0LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9saXN0L2xpc3RzdHlsZS5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgdHJhY2tMaXN0OiBBcnJheTxUcmFja3M+ID0gW107XG4gICAgZmlsdGVyZWRMaXN0OiBBcnJheTxUcmFja3M+ID0gW107XG4gICAgZ3JvY2VyeT1cIlwiO1xuICAgIGlzTG9hZGluZz1mYWxzZTtcblxuICAgIEBWaWV3Q2hpbGQoXCJncm9jZXJ5VGV4dEZpZWxkXCIpIGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0cmFja3NTZXJ2aWNlOiBUcmFja3NTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nPXRydWU7XG4gICAgICAgIHRoaXMudHJhY2tzU2VydmljZS5nZXRUcmFja3MoKS5zdWJzY3JpYmUoXG4gICAgICAgIGxvYWRlZEdyb2NlcmllcyA9PiB7XG4gICAgICAgICAgICBsb2FkZWRHcm9jZXJpZXMuZm9yRWFjaCgoZ3JvY2VyeU9iamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudHJhY2tMaXN0LnVuc2hpZnQoZ3JvY2VyeU9iamVjdCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nPWZhbHNlO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZExpc3Q9dGhpcy50cmFja0xpc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uZGl0aW9uKGl0ZW0sIGluZGV4LCBhcnJheSl7XG4gICAgICAgIGlmKHRoaXMuZ3JvY2VyeS50cmltKCkgPT09IFwiXCIgfHwgaXRlbS50aXRsZS5pbmRleE9mKHRoaXMuZ3JvY2VyeSkhPS0xKVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgZmlsdGVyTGlzdCgpe1xuICAgICAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IHRoaXMudHJhY2tMaXN0LmZpbHRlcih0aGlzLmNvbmRpdGlvbik7XG4gICAgfVxuXG59XG4iXX0=