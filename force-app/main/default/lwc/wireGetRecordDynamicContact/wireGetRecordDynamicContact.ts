import { LightningElement, api, wire } from 'lwc';
import { getRecord, RecordRepresentation } from 'lightning/uiRecordApi';

const fields = [
    'Contact.Name',
    'Contact.Title',
    'Contact.Phone',
    'Contact.Email'
];

export default class WireGetRecordDynamicContact extends LightningElement {
    @api recordId: string;

    @wire(getRecord, { recordId: '$recordId', fields })
    contact: WireResult<RecordRepresentation>;

    get name() {
        return this.contact.data.fields.Name.value;
    }

    // @ts-expect-error Overrides a base property; should probably rename it
    get title() {
        return this.contact.data.fields.Title.value;
    }

    get phone() {
        return this.contact.data.fields.Phone.value;
    }

    get email() {
        return this.contact.data.fields.Email.value;
    }
}
