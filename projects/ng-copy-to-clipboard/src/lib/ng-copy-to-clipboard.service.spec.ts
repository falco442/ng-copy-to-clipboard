import { TestBed } from '@angular/core/testing';

import { NgCopyToClipboardService } from './ng-copy-to-clipboard.service';

describe('NgCopyToClipboardService', () => {
  let service: NgCopyToClipboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCopyToClipboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
