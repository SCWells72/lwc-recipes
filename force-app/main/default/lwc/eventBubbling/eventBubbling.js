import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
export default class EventBubbling extends LightningElement {
    selectedContact;
    @wire(getContactList)
    contacts;
    handleContactSelect(event) {
        // @ts-expect-error Not sure of the type of this event such that it has "contact"
        this.selectedContact = event.target.contact;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRCdWJibGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV2ZW50QnViYmxpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLGNBQWMsTUFBTSxtREFBbUQsQ0FBQztBQUcvRSxNQUFNLENBQUMsT0FBTyxPQUFPLGFBQWMsU0FBUSxnQkFBZ0I7SUFDdkQsZUFBZSxDQUFVO0lBRXpCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUFDLFFBQVEsQ0FBd0I7SUFFdEQsbUJBQW1CLENBQUMsS0FBdUM7UUFDdkQsaUZBQWlGO1FBQ2pGLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztDQUNKIn0=