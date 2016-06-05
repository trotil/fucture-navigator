import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FuctureNavComponent } from './fucture-nav.component';

describe('Component: FuctureNav', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [FuctureNavComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([FuctureNavComponent],
      (component: FuctureNavComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(FuctureNavComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(FuctureNavComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-fucture-nav></app-fucture-nav>
  `,
  directives: [FuctureNavComponent]
})
class FuctureNavComponentTestController {
}

