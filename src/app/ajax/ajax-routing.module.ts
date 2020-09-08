import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjaxPage } from './ajax.page';

const routes: Routes = [
  {
    path: '',
    component: AjaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjaxPageRoutingModule {}
