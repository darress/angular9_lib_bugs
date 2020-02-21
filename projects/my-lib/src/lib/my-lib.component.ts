import { Component } from '@angular/core';
import { OtherComponent } from './other.component';

@Component({
  selector: 'lib-my-lib',
  template: `
      <lib-other #other1 [someInput]="other1!.someProp"></lib-other>
      <lib-other #other2 [someInput]="other2?.someProp"></lib-other>
      <lib-other #other3 [someInput]="other3 && other3.someProp"></lib-other>
  `,
  styles: []
})
export class MyLibComponent{}
