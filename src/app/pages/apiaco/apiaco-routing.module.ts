import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiacoPage } from './apiaco.page';

const routes: Routes = [
  {
    path: '',
    component: ApiacoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiacoPageRoutingModule {}
