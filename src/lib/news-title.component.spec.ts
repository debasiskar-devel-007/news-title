import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTitleComponent } from './news-title.component';

describe('NewsTitleComponent', () => {
  let component: NewsTitleComponent;
  let fixture: ComponentFixture<NewsTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
