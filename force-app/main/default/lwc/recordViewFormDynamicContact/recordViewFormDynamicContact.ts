import { LightningElement, api } from 'lwc';

export default class RecordViewFormDynamicContact extends LightningElement {
    // Flexipage provides recordId and objectApiName
    @api recordId: string;
    @api objectApiName: string;
}
