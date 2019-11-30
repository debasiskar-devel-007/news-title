import { TestBed } from '@angular/core/testing';

import { NewsTitleService } from './news-title.service';

describe('NewsTitleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsTitleService = TestBed.get(NewsTitleService);
    expect(service).toBeTruthy();
  });
});
