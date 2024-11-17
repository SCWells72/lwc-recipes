import { LightningElement, wire } from 'lwc';
import findContacts from '@salesforce/apex/ContactController.findContacts';
import LightningInput from 'lightning/input';

/** The delay used when debouncing event handlers before invoking Apex. */
const DELAY = 300;

export default class ApexWireMethodWithParams extends LightningElement {
    searchKey = '';

    @wire(findContacts, { searchKey: '$searchKey' })
    contacts: WireResult<Contact[]>;

    handleKeyChange(event: CustomEvent<LightningInput>) {
        // Debouncing this method: Do not update the reactive property as long as this function is
        // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
        // @ts-expect-error Where is delayTimeout defined?
        window.clearTimeout(this.delayTimeout);
        const searchKey = (<LightningInput>event.target).value;
        // @ts-expect-error Where is delayTimeout defined?
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
    }
}
