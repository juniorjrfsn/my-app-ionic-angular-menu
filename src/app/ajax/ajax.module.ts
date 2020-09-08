import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjaxPageRoutingModule } from './ajax-routing.module';

import { AjaxPage } from './ajax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjaxPageRoutingModule
  ],
  declarations: [AjaxPage]
})
export class AjaxPageModule {}
