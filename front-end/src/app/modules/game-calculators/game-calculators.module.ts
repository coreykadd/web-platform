import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSelectionComponent } from './components/game-selection/game-selection.component';
import { GameCalculatorsRoutingModule } from './game-calculators.routing';
import { MaterialModule } from 'src/app/material.module';
import { BdoComponent } from './components/bdo/bdo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        GameSelectionComponent,
        BdoComponent,
    ],
    imports: [
        CommonModule,
        GameCalculatorsRoutingModule,
        MaterialModule,
        ReactiveFormsModule
    ]
})
export class GameCalculatorsModule { }
