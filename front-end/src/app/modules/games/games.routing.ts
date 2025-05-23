import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameListComponent } from './components/game-list/game-list.component';
import { MatchTwoComponent } from "./components/match-two/match-two.component";
import { ColorSequenceComponent } from "./components/color-sequence/color-sequence.component";
import { PlatformerComponent } from "./components/platformer/platformer.component";

const routes: Routes = [
    {
        path: '',
        component: GameListComponent,
    },
    {
        path: 'match-two',
        component: MatchTwoComponent,
    },
    {
        path: 'color-sequence',
        component: ColorSequenceComponent
    },
    {
        path: 'platformer',
        component: PlatformerComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GamesRoutingModule { }
