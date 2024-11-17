// noinspection DuplicatedCode

import { createElement } from 'lwc';
import { graphql } from 'lightning/uiGraphQLApi';
import RecordPickerMultiValue from 'c/recordPickerMultiValue';
import { LdsTestWireAdapter } from '@salesforce/wire-service-jest-util';
import LightningRecordPicker from 'lightning/recordPicker';
import LightningPillContainer from 'lightning/pillContainer';

// Mock realistic data
import mockGraphQL from './data/graphqlContactResult.json';

// Helper function to wait until the microtask queue is empty. This is needed for promise
// timing when calling imperative Apex.
async function flushPromises() {
    return Promise.resolve();
}

describe('recordPickerMultiValue', () => {
    let element: RecordPickerMultiValue;
    beforeEach(() => {
        // Create component
        element = createElement<RecordPickerMultiValue>('c-record-picker-multi-value', {
            is: RecordPickerMultiValue
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

    it('is accessible', async () => {
        expect(element).toBeAccessible();
    });

    it('should display the selected record in the pill container', async () => {
        // Set selected record
        const recordPickerElement = element.shadowRoot.querySelector<LightningRecordPicker>(
            'lightning-record-picker'
        );
        recordPickerElement.value = '005xx000001X83aAAC';
        recordPickerElement.dispatchEvent(
            new CustomEvent('change', {
                detail: { recordId: '005xx000001X83aAAC' }
            })
        );
        await flushPromises();

        // Emit data from @wire
        (<LdsTestWireAdapter><unknown>graphql).emit(mockGraphQL);
        await flushPromises();

        const pillContainer = element.shadowRoot.querySelector<LightningPillContainer>(
            'lightning-pill-container'
        );

        expect(pillContainer.items).toEqual([
            {
                name: '005xx000016QpSqAAK',
                label: 'Amy Taylor',
                iconName: 'standard:contact',
                type: 'icon'
            }
        ]);
    });

    it('should clear the input when a selection is made', async () => {
        const recordPickerElement = element.shadowRoot.querySelector<LightningRecordPicker>(
            'lightning-record-picker'
        );

        // Spy on recordPickerElement.clearSelection()
        const clearSelection = jest.spyOn(
            recordPickerElement,
            'clearSelection'
        );

        // Simulate a record selection in the record picker
        recordPickerElement.value = '005xx000001X83aAAC';
        recordPickerElement.dispatchEvent(
            new CustomEvent('change', {
                detail: { recordId: '005xx000001X83aAAC' }
            })
        );
        await flushPromises();

        // Emit data from @wire
        (<LdsTestWireAdapter><unknown>graphql).emit(mockGraphQL);
        await flushPromises();

        expect(clearSelection).toHaveBeenCalled();
    });

    it('should filter out a record from the suggestions when it has already been selected', async () => {
        // Set selected record
        const recordPickerElement = element.shadowRoot.querySelector<LightningRecordPicker>(
            'lightning-record-picker'
        );
        recordPickerElement.value = '005xx000016QpSqAAK';
        recordPickerElement.dispatchEvent(
            new CustomEvent('change', {
                detail: { recordId: '005xx000016QpSqAAK' }
            })
        );
        await flushPromises();

        // Emit data from @wire
        (<LdsTestWireAdapter><unknown>graphql).emit(mockGraphQL);
        await flushPromises();

        expect(recordPickerElement.filter.criteria).toEqual(
            expect.arrayContaining([
                {
                    fieldPath: 'Id',
                    operator: 'nin',
                    value: ['005xx000016QpSqAAK']
                }
            ])
        );
    });

    it('should remove the corresponding pill when selected record is removed', async () => {
        // Set selected record
        const recordPickerElement = element.shadowRoot.querySelector<LightningRecordPicker>(
            'lightning-record-picker'
        );
        recordPickerElement.value = '005xx000001X83aAAC';
        recordPickerElement.dispatchEvent(
            new CustomEvent('change', {
                detail: { recordId: '005xx000001X83aAAC' }
            })
        );
        // Emit data from @wire
        (<LdsTestWireAdapter><unknown>graphql).emit(mockGraphQL);
        await flushPromises();

        // Simulate a selection removal
        const pillContainer = element.shadowRoot.querySelector<LightningPillContainer>(
            'lightning-pill-container'
        );
        pillContainer.dispatchEvent(
            new CustomEvent('itemremove', {
                detail: {
                    item: {
                        name: '005xx000016QpSqAAK',
                        label: 'Amy Taylor',
                        iconName: 'standard:contact'
                    }
                }
            })
        );
        await flushPromises();

        // The pill item has been removed
        expect(pillContainer.items).toEqual([]);
    });

    it('should remove a record from filter when it has been removed from selection', async () => {
        // Set selected record
        const recordPickerElement = element.shadowRoot.querySelector<LightningRecordPicker>(
            'lightning-record-picker'
        );
        recordPickerElement.value = '005xx000001X83aAAC';
        recordPickerElement.dispatchEvent(
            new CustomEvent('change', {
                detail: { recordId: '005xx000001X83aAAC' }
            })
        );
        await flushPromises();

        // Emit data from @wire
        (<LdsTestWireAdapter><unknown>graphql).emit(mockGraphQL);
        await flushPromises();

        // Simulate a selection removal
        const pillContainer = element.shadowRoot.querySelector<LightningPillContainer>(
            'lightning-pill-container'
        );
        pillContainer.dispatchEvent(
            new CustomEvent('itemremove', {
                detail: {
                    item: {
                        name: '005xx000016QpSqAAK',
                        label: 'Amy Taylor',
                        iconName: 'standard:contact'
                    }
                }
            })
        );
        await flushPromises();

        // no more filter with the selected record id
        expect(recordPickerElement.filter.criteria).toEqual(
            expect.arrayContaining([
                { fieldPath: 'Id', operator: 'nin', value: [] }
            ])
        );
    });
});
