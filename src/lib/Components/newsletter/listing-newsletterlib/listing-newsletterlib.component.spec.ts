import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingNewsletterlibComponent } from './listing-newsletterlib.component';

describe('ListingNewsletterlibComponent', () => {
  let component: ListingNewsletterlibComponent;
  let fixture: ComponentFixture<ListingNewsletterlibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingNewsletterlibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingNewsletterlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
