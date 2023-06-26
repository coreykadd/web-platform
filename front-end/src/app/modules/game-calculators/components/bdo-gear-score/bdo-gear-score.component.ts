import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-bdo-gear-score',
    templateUrl: './bdo-gear-score.component.html',
    styleUrls: ['./bdo-gear-score.component.scss']
})
export class BdoGearScoreComponent implements OnInit {
    gearscoreForm: FormGroup;
    gearscore: number;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.createGearscoreForm();
    }

    createGearscoreForm() {
        this.gearscoreForm = this.formBuilder.group({
            ap: [null, Validators.required],
            aap: [null, Validators.required],
            dp: [null, Validators.required]
        });
    }

    calculateGearscore() {
        const ap = this.gearscoreForm.value.ap;
        const aap = this.gearscoreForm.value.aap;
        const dp = this.gearscoreForm.value.dp;

        this.gearscore = Math.floor((ap + aap) / 2 + dp);

        console.log('g > ', this.gearscore);
    }

}
