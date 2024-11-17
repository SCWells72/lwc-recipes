import { createElement } from 'lwc';
import ApexStaticSchema from 'c/apexStaticSchema';
import getSingleContact from '@salesforce/apex/ContactController.getSingleContact';

// Realistic data with a single record
import mockGetSingleContact from './data/getSingleContact.json';
import { ApexTestWireAdapter } from '@salesforce/wire-service-jest-util';
import LightningFormattedEmail from 'lightning/formattedEmail';

// Mock Apex wire adapter
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

describe('c-apex-static-schema', () => {
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

    describe('getSingleContact @wire', () => {
        it('renders single record when data returned', async () => {
            // Create component
            const element = createElement('c-apex-static-schema', {
                is: ApexStaticSchema
            });
            document.body.appendChild(element);

            // Emit data from @wire
            (<ApexTestWireAdapter><unknown>getSingleContact).emit(mockGetSingleContact);

            // Wait for any asynchronous DOM updates
            await flushPromises();

            // Select elements for validation
            const detailEls = element.shadowRoot.querySelectorAll('p');
            expect(detailEls[0].textContent).toBe(mockGetSingleContact.Name);
            expect(detailEls[1].textContent).toBe(mockGetSingleContact.Title);

            const emailEl = element.shadowRoot.querySelector<LightningFormattedEmail>(
                'lightning-formatted-email'
            );
            expect(emailEl.value).toBe(mockGetSingleContact.Email);
        });

        it('shows error panel element when error returned', async () => {
            // Create component
            const element = createElement('c-apex-static-schema', {
                is: ApexStaticSchema
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

    it('is accessible when data is returned', async () => {
        // Create component
        const element = createElement('c-apex-static-schema', {
            is: ApexStaticSchema
        });
        document.body.appendChild(element);

        // Emit data from @wire
        (<ApexTestWireAdapter><unknown>getSingleContact).emit(mockGetSingleContact);

        // Wait for any asynchronous DOM updates
        await flushPromises();

        // Check accessibility
        // noinspection JSUnresolvedReference
        await expect(element).toBeAccessible();
    });

    it('is accessible when error is returned', async () => {
        // Create component
        const element = createElement('c-apex-static-schema', {
            is: ApexStaticSchema
        });
        document.body.appendChild(element);

        // Emit error from @wire
        (<ApexTestWireAdapter><unknown>getSingleContact).error();

        // Wait for any asynchronous DOM updates
        await flushPromises();

        // Check accessibility
        // noinspection JSUnresolvedReference
        await expect(element).toBeAccessible();
    });
});
