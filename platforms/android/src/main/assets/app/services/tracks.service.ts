import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Tracks } from '../components/tracks';

@Injectable()
export class TracksService {

  private heroesUrl = 'http://casa.izzo.li';  // URL to web api

  constructor(private http: Http) { }

  getTracks(){
    return this.http.get(this.heroesUrl + '/tracks')
               .map(response => response.json())
               .map(data => {
                  let groceryList = [];
                  data.forEach((grocery) => {
                    groceryList.push(grocery as Tracks);
                  });
                  return groceryList;
                })
               .catch(this.handleError);
  }

  getStreamLink(){
        return this.heroesUrl + "/stream?uuid=";
    }

  setServer(newServer: string){
    this.heroesUrl = newServer;
  }

  getServer(){
    return this.heroesUrl;
  }

  private handleError(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

}
