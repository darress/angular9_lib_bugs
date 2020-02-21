import { Component } from '@angular/core';
import { RecursiveModel } from './recursive.model';

@Component({
  selector: 'lib-my-lib',
  template: `
    <lib-recursive-list [list]="list"></lib-recursive-list>
  `,
  styles: []
})
export class MyLibComponent {
  public list: RecursiveModel[];
  constructor() {
    this.list = [
      new RecursiveModel('parent1',
        new RecursiveModel('child11'),
        new RecursiveModel('child12',
          new RecursiveModel('child121')
        ),
        new RecursiveModel('child13')
      ),
      new RecursiveModel('parent2'
      )
    ]
  }
}

