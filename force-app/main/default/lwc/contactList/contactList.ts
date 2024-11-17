import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export default class ContactList extends LightningElement {
    @wire(getContactList) contacts: WireResult<Contact[]>;

    handleSelect(event: MouseEvent) {
        // 1. Prevent default behavior of anchor tag click which is to navigate to the href url
        event.preventDefault();
        // 2. Create a custom event that bubbles. Read about event best practices at http://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.events_best_practices
        const selectEvent = new CustomEvent('contactselect', {
            detail: { contactId: (<HTMLAnchorElement>event.currentTarget).dataset.contactId }
        });
        // 3. Fire the custom event
        this.dispatchEvent(selectEvent);
    }
}
