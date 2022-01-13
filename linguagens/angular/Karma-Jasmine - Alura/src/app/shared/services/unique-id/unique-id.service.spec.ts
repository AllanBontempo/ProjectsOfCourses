import {TestBed} from '@angular/core/testing';

import {UniqueIdService} from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueIdService);
  });

  it('Service should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} ` +
    'should generate id when called with prefix', () => {

    const id = service.generatedUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} ` +
    'should not generate duplicate IDs when called multiple times', () => {

    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generatedUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} ` +
    'should throw error when called with empty or start with number', () => {
    const values = [null, '', undefined, '1', '0'];
    values.forEach((value) => {
      expect(() => service.generatedUniqueIdWithPrefix(value))
        .withContext(`Value: ${value}`).toThrow();
    });
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedId.name}` +
    'should return the number of generatedIds when called', () => {

    service.generatedUniqueIdWithPrefix('app');
    service.generatedUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedId()).toBe(2);
  });
});
