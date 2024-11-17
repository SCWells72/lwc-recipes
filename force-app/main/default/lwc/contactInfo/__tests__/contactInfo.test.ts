// noinspection LocalVariableNamingConventionJS

import { createElement } from 'lwc';
import ContactInfo from 'c/contactInfo';
import { getRecord } from 'lightning/uiRecordApi';

import mockGetRecord from './data/getRecord.json';
import { LdsTestWireAdapter } from '@salesforce/wire-service-jest-util';
import LightningFormattedPhone from 'lightning/formattedPhone';
import LightningFormattedEmail from 'lightning/formattedEmail';

describe('c-contact-info', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    // Helper function to wait until the microtask queue is empty. This is needed for promise
    // timing when calling imperative Apex.
    async function flushPromises() {
        return Promise.resolve();
    }

    it('invokes the getRecord method with the set public property value', async () => {
        const RECORD_ID_INPUT = '0031700000pJRRSAA4';

        // Create component
        const element = createElement<ContactInfo>('c-contact-info', {
            is: ContactInfo
        });
        document.body.appendChild(element);

        // Set public property
        element.recordId = RECORD_ID_INPUT;

        // Wait for any asynchronous DOM updates
        await flushPromises();

        // Select elements for validation
        const { recordId } = (<LdsTestWireAdapter><unknown>getRecord).getLastConfig();
        expect(recordId).toEqual(RECORD_ID_INPUT);
    });

    it('renders contact details when public property is set', async () => {
        const RECORD_ID_INPUT = '0031700000pJRRSAA4';
        // Create component
        const element = createElement<ContactInfo>('c-contact-info', {
            is: ContactInfo
        });
        document.body.appendChild(element);

        // Set public property
        element.recordId = RECORD_ID_INPUT;

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

    it('shows error panel element when error returned', async () => {
        // Create component
        const element = createElement('c-contact-info', {
            is: ContactInfo
        });
        document.body.appendChild(element);

        // Emit error from @wire
        (<LdsTestWireAdapter><unknown>getRecord).error();

        // Wait for any asynchronous DOM updates
        await flushPromises();

        // Validate that the error panel is displayed
        // Check for error panel
        const errorPanelEl = element.shadowRoot.querySelector('c-error-panel');
        expect(errorPanelEl).not.toBeNull();
    });

    it('is accessible when data is returned', async () => {
        // Create component
        const element = createElement('c-contact-info', {
            is: ContactInfo
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
        const element = createElement('c-contact-info', {
            is: ContactInfo
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
