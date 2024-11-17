// noinspection LocalVariableNamingConventionJS

import { createElement } from 'lwc';
import Lds from 'c/lds';
import { getNavigateCalledWith } from 'lightning/navigation';
import getSingleContact from '@salesforce/apex/ContactController.getSingleContact';
import { ApexTestWireAdapter } from '@salesforce/wire-service-jest-util';
import LightningButton from 'lightning/button';

// Realistic data with a single record
import mockGetSingleContact from './data/getSingleContact.json';

// Mock getSingleContact Apex wire adapter
jest.mock(
    '@salesforce/apex/ContactController.getSingleContact',
    () => {
        const {
            createApexTestWireAdapter
            // eslint-disable-next-line @typescript-eslint/no-require-imports
        } = require('@salesforce/sfdx-lwc-jest');
        return {
            default: createApexTestWireAdapter(jest.fn())
        };
    },
    { virtual: true }
);
describe('c-lds', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        // Prevent data saved on mocks from leaking between tests
        jest.clearAllMocks();
    });

    // Helper function to wait until the microtask queue is empty. This is needed for promise
    // timing when calling imperative Apex.
    async function flushPromises() {
        return Promise.resolve();
    }

    describe('getSingleContact @wire data', () => {
        it('render UI with record', async () => {
            // Create component
            const element = createElement('c-lds', {
                is: Lds
            });
            document.body.appendChild(element);

            // Emit data from @wire
            (<ApexTestWireAdapter><unknown>getSingleContact).emit(mockGetSingleContact);

            // Wait for any asynchronous DOM updates
            await flushPromises();

            // Select elements for validation
            const buttonEl =
                element.shadowRoot.querySelector('lightning-button');
            expect(buttonEl).not.toBeNull();
        });

        it('navigates to contact page when Take me there! button clicked', async () => {
            const INPUT_OBJECT = 'Contact';
            const INPUT_TYPE = 'standard__recordPage';

            // Create component
            const element = createElement('c-lds', {
                is: Lds
            });
            document.body.appendChild(element);

            // Emit data from @wire
            (<ApexTestWireAdapter><unknown>getSingleContact).emit(mockGetSingleContact);

            // Wait for any asynchronous DOM updates
            await flushPromises();

            // Click button
            const buttonEl =
                element.shadowRoot.querySelector<LightningButton>('lightning-button');
            buttonEl.click();

            // Verify the component under test called the correct navigate event
            // type and sent the expected recordId defined above
            const { pageReference } = getNavigateCalledWith();
            expect(pageReference.type).toBe(INPUT_TYPE);
            expect(pageReference.attributes.objectApiName).toBe(INPUT_OBJECT);
            expect(pageReference.attributes.recordId).toBe(
                mockGetSingleContact.Id
            );
        });
    });

    describe('getSingleContact @wire error', () => {
        it('shows error panel element', async () => {
            // Create component
            const element = createElement('c-lds', {
                is: Lds
            });
            document.body.appendChild(element);

            // Emit error from @wire
            (<ApexTestWireAdapter><unknown>getSingleContact).error();

            // Wait for any asynchronous DOM updates
            await flushPromises();

            // Check for error panel
            const errorPanelEl =
                element.shadowRoot.querySelector('c-error-panel');
            expect(errorPanelEl).not.toBeNull();
        });
    });

    it('is accessible', async () => {
        const element = createElement('c-lds', {
            is: Lds
        });
        document.body.appendChild(element);

        // Check accessibility
        await expect(element).toBeAccessible();
    });
});
