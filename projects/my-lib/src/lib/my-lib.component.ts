import { Component } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
      <lib-other></lib-other>
  `,
  styles: []
})
export class MyLibComponent{}

export function getSomething() {
  return `something`;
}