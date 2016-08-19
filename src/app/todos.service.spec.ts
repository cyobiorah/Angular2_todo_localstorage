/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { TodosService } from './todos.service';

describe('Service: Todos', () => {
  beforeEach(() => {
    addProviders([TodosService]);
  });

  it('should ...',
    inject([TodosService],
      (service: TodosService) => {
        expect(service).toBeTruthy();
      }));
});
