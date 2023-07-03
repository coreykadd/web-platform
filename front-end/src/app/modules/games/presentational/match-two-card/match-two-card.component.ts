import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../../games.model';

@Component({
    selector: 'app-match-two-card',
    templateUrl: './match-two-card.component.html',
    styleUrls: ['./match-two-card.component.scss']
})
export class MatchTwoCardComponent implements OnInit {
    @Input() card: Card;
    @Output() selectedCard = new EventEmitter<Card>();

    isRed = false;

    constructor() { }

    ngOnInit() {
        if (this.card.suit === '♥️' || this.card.suit === '♦️') {
            this.isRed = true;
        }
    }

    handleSelectCard() {
        this.selectedCard.emit(this.card);
    }
}
