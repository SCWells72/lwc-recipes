import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getSingleContact from '@salesforce/apex/ContactController.getSingleContact';

// noinspection JSClassNamingConvention
export default class Lds extends NavigationMixin(LightningElement) {
    @wire(getSingleContact) contact: WireResult<Contact>;

    navigateToContact() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.contact.data.Id,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        });
    }
}
