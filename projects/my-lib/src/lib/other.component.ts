import { Component, Input } from '@angular/core';
import { getSomething } from './my-lib.component';

@Component({
  selector: 'lib-other',
  template: `
    <div>{{someInput}}</div>
  `,
  styles: []
})
export class OtherComponent {
  someInput = getSomething();
}