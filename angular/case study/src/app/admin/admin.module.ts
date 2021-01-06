import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminhomeComponent } from './adminhome/adminhome.component';



@NgModule({
  declarations: [AdminhomeComponent],
  imports: [
    CommonModule
  ],
  exports: [AdminhomeComponent]
})
export class AdminModule { }
