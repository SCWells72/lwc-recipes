// noinspection DuplicatedCode

import { createElement } from 'lwc';
import RecordPickerHello from 'c/recordPickerHello';
import { graphql } from 'lightning/uiGraphQLApi';

// Mock realistic data
import mockGraphQL from './data/graphqlContactResult.json';
import mockGraphQLEmptyResults from './data/graphqlContactEmptyResult.json';
import { LdsTestWireAdapter } from '@salesforce/wire-service-jest-util';
import LightningRecordPicker from 'lightning/recordPicker';

describe('recordPickerHello', () => {
    let element: RecordPickerHello;
    beforeEach(() => {
        // Create component
        element = createElement<RecordPickerHello>('c-record-picker-hello', {
            is: RecordPickerHello
        });
        // @ts-expect-error Not sure what type of element mapping is happening here
        element.objectApiName = 'Contact';
        // @ts-expect-error Not sure what type of element mapping is happening here
        element.label = 'Contact';
        document.body.appendChild(element);
    });

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

    it('renders a lightning-record-picker component', () => {
        const recordPickerElement = element.shadowRoot.querySelector(
            'lightning-record-picker'
        );
        expect(recordPickerElement).toBeTruthy();
    });

    it('is accessible', async () => {
        expect(element).toBeAccessible();
    });

    it('hides the Contact tile when no records are selected', async () => {
        const selectedRecordDetails = element.shadowRoot.querySelector(
            '.selectedRecordDetails'
        );
        expect(selectedRecordDetails).toBeFalsy();
    });

    it('displays the selected record in a Contact tile', async () => {
        // set selected record
        const recordPickerElement = element.shadowRoot.querySelector<LightningRecordPicker>(
            'lightning-record-picker'
        );
        recordPickerElement.value = '003Z70000016iOUIAY';
        recordPickerElement.dispatchEvent(
            new CustomEvent('change', {
                detail: { recordId: '003Z70000016iOUIAY' }
            })
        );
        // Emit data from @wire and wait for any asynchronous DOM updates
        (<LdsTestWireAdapter><unknown>graphql).emit(mockGraphQL);
        await flushPromises();

        const selectedRecordDetails = element.shadowRoot.querySelector(
            '.selectedRecordDetails'
        );

        expect(selectedRecordDetails).toBeTruthy();
    });

    it('hides the Contact tile when clearing the selected record', async () => {
        // set selected record
        const recordPickerElement = element.shadowRoot.querySelector<LightningRecordPicker>(
            'lightning-record-picker'
        );
        recordPickerElement.value = '003Z70000016iOUIAY';
        recordPickerElement.dispatchEvent(
            new CustomEvent('change', {
                detail: { recordId: '003Z70000016iOUIAY' }
            })
        );
        // Emit data from @wire
        (<LdsTestWireAdapter><unknown>graphql).emit(mockGraphQL);

        // clear the selected record
        recordPickerElement.value = null;
        recordPickerElement.dispatchEvent(
            new CustomEvent('change', {
                detail: { recordId: null }
            })
        );
        // Emit data from @wire and wait for any asynchronous DOM updates
        (<LdsTestWireAdapter><unknown>graphql).emit(mockGraphQLEmptyResults);
        await flushPromises();

        const selectedRecordDetails = element.shadowRoot.querySelector(
            '.selectedRecordDetails'
        );

        expect(selectedRecordDetails).toBeFalsy();
    });

    describe('graphql @wire error', () => {
        it('shows error panel element', async () => {
            // Emit error from @wire and wait for any asynchronous DOM updates
            // @ts-expect-error What is this signature? It doesn't exist on the test wire adapters to my knowledge
            graphql.emitErrors(['an error']);
            await flushPromises();

            // Check for error panel
            const errorPanelEl =
                element.shadowRoot.querySelector('c-error-panel');
            expect(errorPanelEl).not.toBeNull();
        });
    });
});
