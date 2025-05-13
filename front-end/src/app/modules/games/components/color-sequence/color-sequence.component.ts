import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-color-sequence',
  templateUrl: './color-sequence.component.html',
  styleUrls: ['./color-sequence.component.scss']
})
export class ColorSequenceComponent implements OnInit {
  sequenceControls = ['red', 'green', 'blue', 'yellow'];

  sequenceColorOrder: string[] = [];
  currentSequenceColor = '';

  selectedColors: string[] = [];

  endgameMessage = '';
  level = 1;
  gameStarted = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleGameStart() {
    this.gameStarted = true;
    this.currentSequenceColor = ''
    this.endgameMessage = '';
    this.selectedColors = [];

    this.shuffleColorSequence();

    const numbers = interval(1000);

    const takeFourNumbers = numbers.pipe(take(this.sequenceColorOrder.length));

    takeFourNumbers.subscribe(x => {
      this.currentSequenceColor = '';

      setTimeout(() => {
        this.currentSequenceColor = this.sequenceColorOrder[x];
      }, 100);
      
    });
  }

  handleColorSelection(color: string) {
    this.selectedColors.push(color);

    if (!this.gameStarted) {
      this.endgameMessage = 'Please click the \'Start\' button to play.';
    } else {
      if (this.sequenceColorOrder[this.selectedColors.length - 1] !== color) {
        this.endgameMessage = 'Incorrect, please try again.'
        this.level = 1;
      } else if (this.sequenceColorOrder.length === this.selectedColors.length) {
        this.endgameMessage = 'Correct, well done!'
        this.level++;
      }
    }
  }


  shuffleColorSequence() {
    this.sequenceColorOrder = [];
    const sequenceLength = 4 + Math.floor(this.level / 3);

    for (let i = 0; i < sequenceLength; i++) {
      const min = 0;
      const max = this.sequenceControls.length - 1;
      const randomNumber =  Math.floor(Math.random() * (max - min + 1)) + min;
      this.sequenceColorOrder.push(this.sequenceControls[randomNumber]);
    }
  }
}
