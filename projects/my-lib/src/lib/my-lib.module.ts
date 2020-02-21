import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { CommonModule } from '@angular/common';
import { RecursiveListComponent } from './recursive-list.component';
import { RecursiveItemComponent } from './recursive-item.component';

@NgModule({
  declarations: [
    MyLibComponent,
    RecursiveListComponent,
    RecursiveItemComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
