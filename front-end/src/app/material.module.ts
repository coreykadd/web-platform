import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    exports: [
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatGridListModule,
        MatTabsModule,
        MatCardModule,
        MatInputModule
    ]
})
export class MaterialModule { }
