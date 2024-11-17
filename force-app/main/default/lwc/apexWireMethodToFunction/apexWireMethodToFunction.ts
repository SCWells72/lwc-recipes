import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ApexWireMethodToFunction extends LightningElement {
    contacts: Contact[];
    error: FetchResponse;

    @wire(getContactList)
    wiredContacts(result: WireResult<Contact[]>) {
        if (result.data) {
            this.contacts = result.data;
            this.error = undefined;
        } else if (result.error) {
            this.error = result.error;
            this.contacts = undefined;
        }
    }
}
