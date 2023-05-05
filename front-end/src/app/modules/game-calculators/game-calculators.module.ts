import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSelectionComponent } from './components/game-selection/game-selection.component';
import { GameCalculatorsRoutingModule } from './game-calculators.routing';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
    declarations: [
        GameSelectionComponent,
    ],
    imports: [
        CommonModule,
        GameCalculatorsRoutingModule,
        MaterialModule,
    ]
})
export class GameCalculatorsModule { }
