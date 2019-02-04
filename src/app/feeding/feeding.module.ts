import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { FeedingPage } from './feeding.page';

const routes: Routes = [
  {
    path: '',
    component: FeedingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FeedingPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeedingPageModule {}
