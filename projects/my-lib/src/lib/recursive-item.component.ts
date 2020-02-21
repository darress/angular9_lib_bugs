import { Component, Input } from '@angular/core';
import { RecursiveModel } from './recursive.model';

@Component({
  selector: 'lib-recursive-item',
  template: `
    <div style="padding-left: 10px;">
        <div>{{model.name}}</div>
        <lib-recursive-list [list]="model.children"></lib-recursive-list>
    </div>
  `,
  styles: []
})
export class RecursiveItemComponent {
    @Input() model: RecursiveModel;
}

