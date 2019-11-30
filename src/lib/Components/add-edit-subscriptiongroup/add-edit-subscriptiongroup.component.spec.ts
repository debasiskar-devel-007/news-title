import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSubscriptiongroupComponent } from './add-edit-subscriptiongroup.component';

describe('AddEditSubscriptiongroupComponent', () => {
  let component: AddEditSubscriptiongroupComponent;
  let fixture: ComponentFixture<AddEditSubscriptiongroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSubscriptiongroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSubscriptiongroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
