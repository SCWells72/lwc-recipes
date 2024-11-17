import { LightningElement } from 'lwc';
import findContacts from '@salesforce/apex/ContactController.findContacts';
import LightningInput from 'lightning/input';

export default class ApexImperativeMethodWithParams extends LightningElement {
    searchKey = '';
    contacts: Contact[];
    error: any;

    handleKeyChange(event: CustomEvent<LightningInput>) {
        this.searchKey = (<LightningInput>event.target).value;
    }

    async handleSearch() {
        try {
            this.contacts = await findContacts({ searchKey: this.searchKey });
            this.error = undefined;
        } catch (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }
}
