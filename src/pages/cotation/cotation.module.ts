import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CotationPage } from './cotation';

@NgModule({
  declarations: [
    CotationPage,
  ],
  imports: [
    IonicPageModule.forChild(CotationPage),
  ],
})
export class CotationPageModule {}
