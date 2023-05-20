import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { AboutMeRoutingModule } from './about-me.routing';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
    declarations: [
        AboutMeComponent
    ],
    imports: [
        CommonModule,
        AboutMeRoutingModule,
        MaterialModule,
    ]
})
export class AboutMeModule { }
