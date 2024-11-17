import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import LightningCombobox, { LightningComboboxOption } from 'lightning/combobox';

export default class ContactSelector extends LightningElement {
    contactOptions: LightningComboboxOption[] = [];
    error: any;

    @wire(getContactList)
    wiredContacts(result: WireResult<Contact[]>) {
        if (result.data) {
            this.contactOptions = result.data.map((record) => (<LightningComboboxOption>{
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
