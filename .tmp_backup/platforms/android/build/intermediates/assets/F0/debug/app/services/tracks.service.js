"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var TracksService = (function () {
    function TracksService(http) {
        this.http = http;
        this.heroesUrl = 'http://casa.izzo.tk/tracks'; // URL to web api
    }
    TracksService.prototype.getTracks = function () {
        return this.http.get('http://casa.izzo.tk/tracks')
            .map(function (response) { return response.json(); })
            .map(function (data) {
            var groceryList = [];
            data.forEach(function (grocery) {
                groceryList.push(grocery);
            });
            return groceryList;
        })
            .catch(this.handleError);
    };
    TracksService.prototype.handleError = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    TracksService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TracksService);
    return TracksService;
}());
exports.TracksService = TracksService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmFja3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUU5QyxtQkFBMkIsU0FBUyxDQUFDLENBQUE7QUFDckMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBSy9CO0lBSUUsdUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRnRCLGNBQVMsR0FBRyw0QkFBNEIsQ0FBQyxDQUFFLGlCQUFpQjtJQUVsQyxDQUFDO0lBRW5DLGlDQUFTLEdBQVQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUM7YUFDdEMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ04sSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO2dCQUNuQixXQUFXLENBQUMsSUFBSSxDQUFDLE9BQWlCLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDckIsQ0FBQyxDQUFDO2FBQ0YsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU8sbUNBQVcsR0FBbkIsVUFBb0IsS0FBZTtRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBdkJIO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUF5QmIsb0JBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDO0FBeEJZLHFCQUFhLGdCQXdCekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHsgVHJhY2tzIH0gZnJvbSAnLi4vY29tcG9uZW50cy90cmFja3MnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhY2tzU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBoZXJvZXNVcmwgPSAnaHR0cDovL2Nhc2EuaXp6by50ay90cmFja3MnOyAgLy8gVVJMIHRvIHdlYiBhcGlcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gIGdldFRyYWNrcygpe1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vY2FzYS5penpvLnRrL3RyYWNrcycpXG4gICAgICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgIC5tYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICBsZXQgZ3JvY2VyeUxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZ3JvY2VyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBncm9jZXJ5TGlzdC5wdXNoKGdyb2NlcnkgYXMgVHJhY2tzKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGdyb2NlcnlMaXN0O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgfVxuXG59XG4iXX0=