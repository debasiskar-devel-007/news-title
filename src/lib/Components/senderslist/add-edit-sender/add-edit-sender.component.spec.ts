import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSenderComponent } from './add-edit-sender.component';

describe('AddEditSenderComponent', () => {
  let component: AddEditSenderComponent;
  let fixture: ComponentFixture<AddEditSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
