import { TestBed } from '@angular/core/testing';

import { NewsItemsService } from './news-items.service';

describe('NewsItemsService', () => {
  let service: NewsItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
