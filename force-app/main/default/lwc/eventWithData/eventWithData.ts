import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class EventWithData extends LightningElement {
    selectedContact: Contact;

    @wire(getContactList) contacts: WireResult<Contact[]>;

    handleSelect(event: CustomEvent<string>) {
        const contactId = event.detail;
        this.selectedContact = this.contacts.data.find(
            (contact) => contact.Id === contactId
        );
    }
}
