import { ListComponent } from "./pages/list/list.component";
import { Player } from "./pages/player/player";

export const routes = [
  { path: "", component: ListComponent },
  { path: "player", component: Player}
];

export const navigatableComponents = [
  ListComponent, Player
];