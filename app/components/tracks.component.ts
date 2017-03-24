import { Component, Input } from '@angular/core';
import { Tracks } from './tracks';



@Component({
  selector: 'tracks-detail'
})
export class TracksComponent {
  
  @Input()
  track: Tracks;

}
