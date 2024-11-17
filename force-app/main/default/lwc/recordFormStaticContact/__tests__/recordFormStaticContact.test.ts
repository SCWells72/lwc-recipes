// noinspection LocalVariableNamingConventionJS,DuplicatedCode

import { createElement } from 'lwc';
import RecordFormStaticContact from 'c/recordFormStaticContact';
import LightningRecordForm from 'lightning/recordForm';
import { FieldId } from '@salesforce/schema';

describe('c-record-form-static-contact', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders lightning-record-form with given input values', () => {
        const RECORD_FIELDS_INPUT: FieldId[] = [
            {
                fieldApiName: 'AccountId',
                objectApiName: 'Contact'
            },
            {
                fieldApiName: 'Name',
                objectApiName: 'Contact'
            },
            {
                fieldApiName: 'Title',
                objectApiName: 'Contact'
            },
            {
                fieldApiName: 'Phone',
                objectApiName: 'Contact'
            },
            {
                fieldApiName: 'Email',
                objectApiName: 'Contact'
            }
        ];
        const RECORD_ID_INPUT = '0031700000pJRRSAA4';
        const OBJECT_API_NAME_INPUT = 'Contact';

        // Create component
        const element = createElement<RecordFormStaticContact>('c-record-form-static-contact', {
            is: RecordFormStaticContact
        });
        // Set public properties
        element.recordId = RECORD_ID_INPUT;
        element.objectApiName = OBJECT_API_NAME_INPUT;
        document.body.appendChild(element);

        // Validate if correct parameters have been passed to base components
        const formEl = element.shadowRoot.querySelector<LightningRecordForm>(
            'lightning-record-form'
        );
        expect(formEl.fields).toEqual(RECORD_FIELDS_INPUT);
        expect(formEl.recordId).toBe(RECORD_ID_INPUT);
        expect(formEl.objectApiName).toBe(OBJECT_API_NAME_INPUT);
    });

    it('is accessible', async () => {
        const element = createElement('c-record-form-static-contact', {
            is: RecordFormStaticContact
        });
        document.body.appendChild(element);

        // Check accessibility
        await expect(element).toBeAccessible();
    });
});