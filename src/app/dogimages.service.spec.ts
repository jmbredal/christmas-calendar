import { TestBed, inject } from '@angular/core/testing';

import { DogimagesService } from './dogimages.service';

describe('DogimagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DogimagesService]
    });
  });

  it('should be created', inject([DogimagesService], (service: DogimagesService) => {
    expect(service).toBeTruthy();
  }));
});
