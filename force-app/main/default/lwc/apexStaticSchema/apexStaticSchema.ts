import { LightningElement, wire } from 'lwc';
import getSingleContact from '@salesforce/apex/ContactController.getSingleContact';

export default class ApexStaticSchema extends LightningElement {
    @wire(getSingleContact) contact: WireResult<Contact>;

    get name() {
        return this.contact.data
            ? this.contact.data.Name
            : '';
    }
    get title() {
        return this.contact.data
            ? this.contact.data.Title
            : '';
    }
    get email() {
        return this.contact.data
            ? this.contact.data.Email
            : '';
    }
}
