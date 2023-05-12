import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-game-selection',
    templateUrl: './game-selection.component.html',
    styleUrls: ['./game-selection.component.scss']
})
export class GameSelectionComponent implements OnInit {
    breakpoint = 3;

    gameList = [
        {
            name: 'Black Desert Online',
            class: 'black-desert-online',
            link: 'bdo',
        },
        {
            name: 'Path Of Exile',
            class: 'path-of-exile',
            link: 'poe',
        },
        {
            name: 'Monster Hunter Rise',
            class: 'monster-hunter-rise',
            link: 'mhr'
        }
    ]

    constructor() { }

    ngOnInit() {
        this.breakpoint = (window.innerWidth <= 576) ? 2 : 3;
    }

    onResize(event: any) {
        this.breakpoint = (event.target.innerWidth <= 576) ? 2 : 3;
    }
}
