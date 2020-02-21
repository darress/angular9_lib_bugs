import { Component, Input } from '@angular/core';
import { RecursiveModel } from './recursive.model';

@Component({
  selector: 'lib-recursive-list',
  template: `
    <lib-recursive-item *ngFor="let item of list" [model]="item"></lib-recursive-item>
  `,
  styles: []
})
export class RecursiveListComponent {
    @Input() list: RecursiveModel[];
}
