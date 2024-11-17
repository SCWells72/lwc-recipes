import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import LightningLayoutItem from 'lightning/layoutItem';

export default class EventBubbling extends LightningElement {
    selectedContact: Contact;

    @wire(getContactList) contacts: WireResult<Contact[]>;

    handleContactSelect(event: CustomEvent<LightningLayoutItem>) {
        // @ts-expect-error Not sure of the type of this event such that it has "contact"
        this.selectedContact = event.target.contact;
    }
}
