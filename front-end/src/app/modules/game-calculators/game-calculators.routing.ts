import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameSelectionComponent } from "./components/game-selection/game-selection.component";

const routes: Routes = [
    {
        path: '',
        component: GameSelectionComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GameCalculatorsRoutingModule { }
