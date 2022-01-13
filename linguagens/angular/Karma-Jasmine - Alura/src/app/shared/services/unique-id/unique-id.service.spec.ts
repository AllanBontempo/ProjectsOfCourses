import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} ` +
    'should generate id when called with prefix', () => {
      const id = service.generatedUniqueIdWithPrefix('app');
      expect(id).toContain('app-');
  });
});
