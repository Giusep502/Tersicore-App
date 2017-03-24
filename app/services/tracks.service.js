"use strict";
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var TracksService = (function () {
    function TracksService(http) {
        this.http = http;
        this.heroesUrl = 'http://casa.izzo.li'; // URL to web api
    }
    TracksService.prototype.getTracks = function () {
        return this.http.get(this.heroesUrl + '/tracks')
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
    TracksService.prototype.getStreamLink = function () {
        return this.heroesUrl + "/stream?uuid=";
    };
    TracksService.prototype.setServer = function (newServer) {
        this.heroesUrl = newServer;
    };
    TracksService.prototype.getServer = function () {
        return this.heroesUrl;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmFja3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUU5QyxtQkFBMkIsU0FBUyxDQUFDLENBQUE7QUFDckMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBSy9CO0lBSUUsdUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBRnRCLGNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxDQUFFLGlCQUFpQjtJQUUzQixDQUFDO0lBRW5DLGlDQUFTLEdBQVQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7YUFDcEMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ04sSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO2dCQUNuQixXQUFXLENBQUMsSUFBSSxDQUFDLE9BQWlCLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDckIsQ0FBQyxDQUFDO2FBQ0YsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUNNLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztJQUM1QyxDQUFDO0lBRUgsaUNBQVMsR0FBVCxVQUFVLFNBQWlCO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVPLG1DQUFXLEdBQW5CLFVBQW9CLEtBQWU7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQW5DSDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBcUNiLG9CQUFDO0FBQUQsQ0FBQyxBQXBDRCxJQW9DQztBQXBDWSxxQkFBYSxnQkFvQ3pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbmltcG9ydCB7IFRyYWNrcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvdHJhY2tzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYWNrc1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgaGVyb2VzVXJsID0gJ2h0dHA6Ly9jYXNhLml6em8ubGknOyAgLy8gVVJMIHRvIHdlYiBhcGlcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gIGdldFRyYWNrcygpe1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaGVyb2VzVXJsICsgJy90cmFja3MnKVxuICAgICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAubWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IGdyb2NlcnlMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goKGdyb2NlcnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvY2VyeUxpc3QucHVzaChncm9jZXJ5IGFzIFRyYWNrcyk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBncm9jZXJ5TGlzdDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgZ2V0U3RyZWFtTGluaygpe1xuICAgICAgICByZXR1cm4gdGhpcy5oZXJvZXNVcmwgKyBcIi9zdHJlYW0/dXVpZD1cIjtcbiAgICB9XG5cbiAgc2V0U2VydmVyKG5ld1NlcnZlcjogc3RyaW5nKXtcbiAgICB0aGlzLmhlcm9lc1VybCA9IG5ld1NlcnZlcjtcbiAgfVxuXG4gIGdldFNlcnZlcigpe1xuICAgIHJldHVybiB0aGlzLmhlcm9lc1VybDtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICB9XG5cbn1cbiJdfQ==