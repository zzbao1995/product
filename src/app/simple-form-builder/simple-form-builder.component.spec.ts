import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormBuilderComponent } from './simple-form-builder.component';

describe('SimpleFormBuilderComponent', () => {
  let component: SimpleFormBuilderComponent;
  let fixture: ComponentFixture<SimpleFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
