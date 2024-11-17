import { LightningElement, api } from 'lwc';

export default class RecordFormDynamicContact extends LightningElement {
    // Flexipage provides recordId and objectApiName
    @api recordId: string;
    @api objectApiName: string;
    fields = ['AccountId', 'Name', 'Title', 'Phone', 'Email'];
}
