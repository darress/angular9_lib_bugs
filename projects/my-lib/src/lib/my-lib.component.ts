import { Component } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
      <div id="content of testBool">{{testBool}}</div>
      <div *ngIf="testBool">TEST 1</div>
      <div *ngIf="testBool === true">TEST 2</div>
      <div *ngIf="testBool !== false">TEST 3</div>
      <div *ngIf="!!testBool">TEST 4</div>
      <div *ngIf="$any(testBool)">TEST 5</div>
      <div *ngIf="!testBool">TEST NEG</div>
  `,
  styles: []
})
export class MyLibComponent{

  public testBool = true;

  constructor() { }
}
