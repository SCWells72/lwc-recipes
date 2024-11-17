// noinspection DuplicatedCode

import { createElement } from 'lwc';
import WireGetRecordStaticContact from 'c/wireGetRecordStaticContact';
import { getRecord } from 'lightning/uiRecordApi';
import { LdsTestWireAdapter } from '@salesforce/wire-service-jest-util';
import LightningFormattedPhone from 'lightning/formattedPhone';
import LightningFormattedEmail from 'lightning/formattedEmail';

// Mock realistic data
import mockGetRecord from './data/getRecord.json';

describe('c-wire-get-record-static-contact', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    // Helper function to wait until the microtask queue is empty. This is needed for promise
    // timing.
    async function flushPromises() {
        return Promise.resolve();
    }

    describe('getRecord @wire data', () => {
        it('renders contact details', async () => {
            // Create component
            const element = createElement('c-wire-get-record-dynamic-contact', {
                is: WireGetRecordStaticContact
            });
            document.body.appendChild(element);

            // Emit data from @wire
            (<LdsTestWireAdapter><unknown>getRecord).emit(mockGetRecord);

            // Wait for any asynchronous DOM updates
            await flushPromises();

            // Select elements for validation
            const nameEl = element.shadowRoot.querySelector('p');
            expect(nameEl.textContent).toBe(mockGetRecord.fields.Name.value);

            const phoneEl = element.shadowRoot.querySelector<LightningFormattedPhone>(
                'lightning-formatted-phone'
            );
            expect(phoneEl.value).toBe(mockGetRecord.fields.Phone.value);

            const emailEl = element.shadowRoot.querySelector<LightningFormattedEmail>(
                'lightning-formatted-email'
            );
            expect(emailEl.value).toBe(mockGetRecord.fields.Email.value);
        });
    });

    describe('getRecord @wire error', () => {
        it('shows error panel element', async () => {
            // Create component
            const element = createElement('c-wire-get-record-static-contact', {
                is: WireGetRecordStaticContact
            });
            document.body.appendChild(element);

            // Emit error from @wire
            (<LdsTestWireAdapter><unknown>getRecord).error();

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
        const element = createElement('c-wire-get-record-dynamic-contact', {
            is: WireGetRecordStaticContact
        });
        document.body.appendChild(element);

        // Emit data from @wire
        (<LdsTestWireAdapter><unknown>getRecord).emit(mockGetRecord);

        // Wait for any asynchronous DOM updates
        await flushPromises();

        // Check accessibility
        await expect(element).toBeAccessible();
    });

    it('is accessible when error is returned', async () => {
        // Create component
        const element = createElement('c-wire-get-record-dynamic-contact', {
            is: WireGetRecordStaticContact
        });
        document.body.appendChild(element);

        // Emit error from @wire
        (<LdsTestWireAdapter><unknown>getRecord).error();

        // Wait for any asynchronous DOM updates
        await flushPromises();

        // Check accessibility
        await expect(element).toBeAccessible();
    });
});
