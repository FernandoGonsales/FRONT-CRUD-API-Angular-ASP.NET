/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DevelopersService } from './developers.service';

describe('Service: Developers', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevelopersService]
    });
  });

  it('should ...', inject([DevelopersService], (service: DevelopersService) => {
    expect(service).toBeTruthy();
  }));
});
