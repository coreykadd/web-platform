import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameListComponent } from './components/game-list/game-list.component';
import { MatchTwoComponent } from "./components/match-two/match-two.component";

const routes: Routes = [
    {
        path: '',
        component: GameListComponent,
    },
    {
        path: 'match-two',
        component: MatchTwoComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GamesRoutingModule { }
