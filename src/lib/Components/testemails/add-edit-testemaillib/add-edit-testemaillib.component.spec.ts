import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTestemaillibComponent } from './add-edit-testemaillib.component';

describe('AddEditTestemaillibComponent', () => {
  let component: AddEditTestemaillibComponent;
  let fixture: ComponentFixture<AddEditTestemaillibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTestemaillibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTestemaillibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
