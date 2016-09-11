
import { ElementFinder } from 'protractor';

import { testComponent } from './test.component';

describe('test: ', () => {
    describe('Events and Lifecycle', () => {
        beforeEach(() => {
            this.instance = new testComponent();
        });

        it('Properties are defined', () => {
            // TODO
        });
    });
});
