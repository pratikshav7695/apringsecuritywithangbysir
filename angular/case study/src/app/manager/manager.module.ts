import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerhomeComponent } from './managerhome/managerhome.component';



@NgModule({
  declarations: [ManagerhomeComponent],
  imports: [
    CommonModule
  ],
  exports: [ManagerhomeComponent]
})
export class ManagerModule { }
