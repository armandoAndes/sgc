import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoletinComponent } from '../boletin.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BoletinComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [BoletinComponent]
})
export class BoletinModule { }
