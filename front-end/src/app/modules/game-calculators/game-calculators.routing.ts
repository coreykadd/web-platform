import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BdoComponent } from "./components/bdo/bdo.component";
import { GameSelectionComponent } from "./components/game-selection/game-selection.component";

const routes: Routes = [
    {
        path: '',
        component: GameSelectionComponent,
    },
    {
        path: 'bdo',
        component: BdoComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GameCalculatorsRoutingModule { }
