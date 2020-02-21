import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-other',
  template: `
    <div>{{someInput}}</div>
  `,
  styles: []
})
export class OtherComponent {

  public someProp = true;

  @Input() someInput: boolean;
}