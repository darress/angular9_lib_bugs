import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { CommonModule } from '@angular/common';
import { OtherComponent } from './other.component';

@NgModule({
  declarations: [
    MyLibComponent,
    OtherComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
