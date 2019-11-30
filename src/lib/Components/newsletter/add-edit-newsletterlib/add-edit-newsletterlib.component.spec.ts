import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNewsletterlibComponent } from './add-edit-newsletterlib.component';

describe('AddEditNewsletterlibComponent', () => {
  let component: AddEditNewsletterlibComponent;
  let fixture: ComponentFixture<AddEditNewsletterlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditNewsletterlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditNewsletterlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
