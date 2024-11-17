import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import LightningCombobox from 'lightning/combobox';

interface ContactOption {
    value?: string;
    label?: string;
}

export default class ContactSelector extends LightningElement {
    contactOptions: ContactOption[] = [];
    error: any;

    @wire(getContactList)
    wiredContacts(result: WireResult<Contact[]>) {
        if (result.data) {
            this.contactOptions = result.data.map((record) => (<ContactOption>{
                value: record.Id,
                label: record.Name
            }));
            this.error = undefined;
        } else if (result.error) {
            this.error = result.error;
            this.contactOptions = undefined;
        }
    }

    handleRecordSelected(event: CustomEvent<LightningCombobox>) {
        this.dispatchEvent(
            new CustomEvent('select', {
                detail: { recordId: (<LightningCombobox>event.target).value }
            })
        );
    }
}
