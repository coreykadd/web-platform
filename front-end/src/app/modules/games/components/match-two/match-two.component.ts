import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from '../../games.model';

@Component({
    selector: 'app-match-two',
    templateUrl: './match-two.component.html',
    styleUrls: ['./match-two.component.scss']
})
export class MatchTwoComponent implements OnInit {
    cards: Card[] = [];

    cardsSelected: Card[] = [];

    constructor(private snackBar: MatSnackBar) { }

    ngOnInit() {
    }

    handleGenerateCards() {
        this.cards = [
            { suit: '♠', rank: 'A', isSelected: false },
            { suit: '♣️', rank: 'K', isSelected: false },
            { suit: '♠', rank: 'K', isSelected: false },
            { suit: '♥️', rank: '2', isSelected: false },
            { suit: '♠', rank: '3', isSelected: false },
            { suit: '♣️', rank: '2', isSelected: false },
            { suit: '♣️', rank: 'Q', isSelected: false },
            { suit: '♦️', rank: '3', isSelected: false },
            { suit: '♥️', rank: 'Q', isSelected: false },
            { suit: '♦️', rank: 'A', isSelected: false },
        ];
    }

    handleSelectedCard(card: Card) {
        if (this.cardsSelected.length < 2 && !card.isSelected) {
            card.isSelected = true;
            this.cardsSelected.push(card);
        }

        if (this.cardsSelected.length === 2) {
            this.checkIfSelectedCardsMatch();
        }
    }

    checkIfSelectedCardsMatch() {
        if (this.cardsSelected[0].rank === this.cardsSelected[1].rank) {
            this.cardsSelected = [];

            this.snackBar.open('Correct!', 'Close', {
                duration: 2000
            });
        } else {
            setTimeout(() => {
                this.snackBar.open('Wrong, try again', 'Close', {
                    duration: 2000
                });

                this.cardsSelected.forEach(card => card.isSelected = false);
                this.cardsSelected = [];
            }, 1000);
        }
    }

    handleShuffleCards() {
        for (let i = 0; i < this.cards.length; i++) {
            this.cards[i].isSelected = false;
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

}
