import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormImplicitComponent } from './simple-form-implicit.component';

describe('SimpleFormImplicitComponent', () => {
  let component: SimpleFormImplicitComponent;
  let fixture: ComponentFixture<SimpleFormImplicitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFormImplicitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormImplicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
