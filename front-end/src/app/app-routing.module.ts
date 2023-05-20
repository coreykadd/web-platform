import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'games',
        loadChildren: () => import('./modules/game-calculators/game-calculators.module').then((module) => module.GameCalculatorsModule),
    },
    {
        path: 'about-me',
        loadChildren: () => import('./modules/about-me/about-me.module').then(module => module.AboutMeModule),
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
