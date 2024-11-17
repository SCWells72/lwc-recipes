import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
export default class EventWithData extends LightningElement {
    selectedContact;
    @wire(getContactList)
    contacts;
    handleSelect(event) {
        const contactId = event.detail;
        this.selectedContact = this.contacts.data.find((contact) => contact.Id === contactId);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRXaXRoRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2ZW50V2l0aERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLGNBQWMsTUFBTSxtREFBbUQsQ0FBQztBQUUvRSxNQUFNLENBQUMsT0FBTyxPQUFPLGFBQWMsU0FBUSxnQkFBZ0I7SUFDdkQsZUFBZSxDQUFVO0lBRXpCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUFDLFFBQVEsQ0FBd0I7SUFFdEQsWUFBWSxDQUFDLEtBQTBCO1FBQ25DLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQzFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLFNBQVMsQ0FDeEMsQ0FBQztJQUNOLENBQUM7Q0FDSiJ9