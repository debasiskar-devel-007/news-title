import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSenderComponent } from './listing-sender.component';

describe('ListingSenderComponent', () => {
  let component: ListingSenderComponent;
  let fixture: ComponentFixture<ListingSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingSenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
