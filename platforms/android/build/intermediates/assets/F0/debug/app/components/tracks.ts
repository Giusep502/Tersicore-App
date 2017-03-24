import { Resources } from './resources';

export class Tracks {
  album: string;
  album_artist:string;
  artist: string;
  compilation:boolean;
  date: string;
  disc_number:number;
  resources: Resources[];
  title: string;
  track_number: number;
  uuid: string;
}
