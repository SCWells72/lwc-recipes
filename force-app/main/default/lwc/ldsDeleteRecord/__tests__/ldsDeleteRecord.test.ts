import { createElement } from 'lwc';
import LdsDeleteRecord from 'c/ldsDeleteRecord';
import { deleteRecord } from 'lightning/uiRecordApi';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import { ApexTestWireAdapter } from '@salesforce/wire-service-jest-util';
import LightningButtonIcon from 'lightning/buttonIcon';

// Realistic data with a list of contacts
import mockGetAccountList from './data/getAccountList.json';
// An empty list of records to verify the component does something reasonable
// when there is no data to display
import mockGetAccountListNoRecords from './data/getAccountListNoRecords.json';

// Mock getAccountList Apex wire adapter
jest.mock(
    '@salesforce/apex/AccountController.getAccountList',
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
describe('c-lds-delete-record', () => {
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

    describe('getAccountList @wire data', () => {
        it('renders seven records with name and lightning-button-icon', async () => {
            // Create component
            const element = createElement('c-lds-delete-record', {
                is: LdsDeleteRecord
            });
            document.body.appendChild(element);

            // Emit data from @wire
            (<ApexTestWireAdapter><unknown>getAccountList).emit(mockGetAccountList);

            // Wait for any asynchronous DOM updates
            await flushPromises();

            // Select elements for validation
            const nameEl = element.shadowRoot.querySelector(
                'lightning-layout-item'
            );
            expect(nameEl.textContent).toBe(mockGetAccountList[0].Name);

            const buttonEls = element.shadowRoot.querySelectorAll(
                'lightning-button-icon'
            );
            expect(buttonEls.length).toBe(mockGetAccountList.length);
            // @ts-expect-error Not sure how "data-recordid" should be interpreted
            expect(buttonEls[0].dataset.recordid).toBe(
                mockGetAccountList[0].Id
            );
        });

        it('renders no buttons when no record exists', async () => {
            // Create component
            const element = createElement('c-lds-delete-record', {
                is: LdsDeleteRecord
            });
            document.body.appendChild(element);

            // Emit data from @wire
            (<ApexTestWireAdapter><unknown>getAccountList).emit(mockGetAccountListNoRecords);

            // Wait for any asynchronous DOM updates
            await flushPromises();

            // Select elements for validation
            const nameEl = element.shadowRoot.querySelector(
                'lightning-button-icon'
            );
            expect(nameEl).toBeNull();

            const detailEls = element.shadowRoot.querySelectorAll(
                'lightning-button-icon'
            );
            expect(detailEls.length).toBe(mockGetAccountListNoRecords.length);
        });
    });

    describe('getAccountList @wire error', () => {
        it('shows error panel element', async () => {
            // Create component
            const element = createElement('c-apex-wire-method-to-function', {
                is: LdsDeleteRecord
            });
            document.body.appendChild(element);

            // Emit error from @wire
            (<ApexTestWireAdapter><unknown>getAccountList).error();

            // Wait for any asynchronous DOM updates
            await flushPromises();

            // Check for error panel
            const errorPanelEl =
                element.shadowRoot.querySelector('c-error-panel');
            expect(errorPanelEl).not.toBeNull();
        });
    });

    it('deletes the first entry of the account list on button click', async () => {
        // Create component
        const element = createElement('c-lds-delete-record', {
            is: LdsDeleteRecord
        });
        document.body.appendChild(element);

        // Emit data from @wire
        (<ApexTestWireAdapter><unknown>getAccountList).emit(mockGetAccountList);

        // Wait for any asynchronous DOM updates
        await flushPromises();

        // Click button
        const buttonEl = element.shadowRoot.querySelector<LightningButtonIcon>(
            'lightning-button-icon'
        );
        buttonEl.click();

        // Wait for any asynchronous DOM updates
        await flushPromises();

        // Validate if deleteRecord has been called
        expect(deleteRecord).toHaveBeenCalled();
        expect((<jest.MockInstance<any, any>><unknown>deleteRecord).mock.calls[0][0]).toEqual(mockGetAccountList[0].Id);
    });

    it('is accessible when data is returned', async () => {
        // Create component
        const element = createElement('c-lds-delete-record', {
            is: LdsDeleteRecord
        });
        document.body.appendChild(element);

        // Emit data from @wire
        (<ApexTestWireAdapter><unknown>getAccountList).emit(mockGetAccountList);

        // Wait for any asynchronous DOM updates
        await flushPromises();

        // Check accessibility
        await expect(element).toBeAccessible();
    });

    it('is accessible when error is returned', async () => {
        // Create component
        const element = createElement('c-lds-delete-record', {
            is: LdsDeleteRecord
        });
        document.body.appendChild(element);

        // Emit error from @wire
        (<ApexTestWireAdapter><unknown>getAccountList).error();

        // Wait for any asynchronous DOM updates
        await flushPromises();

        // Check accessibility
        await expect(element).toBeAccessible();
    });
});
