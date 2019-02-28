import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MovieDetialsPage } from './movie-detials.page';

const routes: Routes = [
  {
    path: '',
    component: MovieDetialsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MovieDetialsPage]
})
export class MovieDetialsPageModule {}
