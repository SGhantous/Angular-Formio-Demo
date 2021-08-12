import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormioButtonComponent } from './formio-button.component';

describe('FormioButtonComponent', () => {
  let component: FormioButtonComponent;
  let fixture: ComponentFixture<FormioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
