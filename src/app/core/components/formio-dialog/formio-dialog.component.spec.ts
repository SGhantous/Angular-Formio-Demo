import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormioDialogComponent } from './formio-dialog.component';

describe('FormioDialogComponent', () => {
  let component: FormioDialogComponent;
  let fixture: ComponentFixture<FormioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormioDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
