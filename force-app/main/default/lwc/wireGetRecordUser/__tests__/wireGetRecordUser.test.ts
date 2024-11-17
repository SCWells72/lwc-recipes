import { createElement } from 'lwc';
import WireGetRecordUser from 'c/wireGetRecordUser';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { LdsTestWireAdapter } from '@salesforce/wire-service-jest-util';

// Mock realistic data
import mockGetRecord from './data/getRecord.json';

describe('c-wire-get-record-user', () => {
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
        it('renders user record details', async () => {
            // Create component
            const element = createElement('c-wire-get-record-user', {
                is: WireGetRecordUser
            });
            document.body.appendChild(element);

            // Emit data from @wire
            (<LdsTestWireAdapter><unknown>getRecord).emit(mockGetRecord);

            // Wait for any asynchronous DOM updates
            await flushPromises();

            const userEls = element.shadowRoot.querySelectorAll('p');
            expect(userEls.length).toBe(3);
            expect((<jest.MockInstance<any, any>><unknown>getFieldValue).mock.calls.length).toBe(2);
        });
    });

    describe('getRecord @wire error', () => {
        it('shows error panel element', async () => {
            // Create component
            const element = createElement('c-wire-get-record-user', {
                is: WireGetRecordUser
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

    it('is accessible when user is returned', async () => {
        // Create component
        const element = createElement('c-wire-get-record-user', {
            is: WireGetRecordUser
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
        const element = createElement('c-wire-get-record-user', {
            is: WireGetRecordUser
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