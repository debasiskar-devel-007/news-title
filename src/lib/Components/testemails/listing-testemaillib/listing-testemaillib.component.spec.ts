import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingTestemaillibComponent } from './listing-testemaillib.component';

describe('ListingTestemaillibComponent', () => {
  let component: ListingTestemaillibComponent;
  let fixture: ComponentFixture<ListingTestemaillibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingTestemaillibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingTestemaillibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
