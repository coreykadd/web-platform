import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './components/game-list/game-list.component';
import { GamesRoutingModule } from './games.routing';
import { MatchTwoComponent } from './components/match-two/match-two.component';
import { MatchTwoCardComponent } from './presentational/match-two-card/match-two-card.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
    declarations: [
        GameListComponent,
        MatchTwoComponent,
        MatchTwoCardComponent
    ],
    imports: [
        CommonModule,
        GamesRoutingModule,
        MaterialModule
    ]
})
export class GamesModule { }
