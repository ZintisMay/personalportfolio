import { TestBed, inject } from '@angular/core/testing';

import { ContentDeliveryService } from './content-delivery.service';

describe('ContentDeliveryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentDeliveryService]
    });
  });

  it('should be created', inject([ContentDeliveryService], (service: ContentDeliveryService) => {
    expect(service).toBeTruthy();
  }));
});
