import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
export default class ContactList extends LightningElement {
    @wire(getContactList)
    contacts;
    handleSelect(event) {
        // 1. Prevent default behavior of anchor tag click which is to navigate to the href url
        event.preventDefault();
        // 2. Create a custom event that bubbles. Read about event best practices at http://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.events_best_practices
        const selectEvent = new CustomEvent('contactselect', {
            detail: { contactId: event.currentTarget.dataset.contactId }
        });
        // 3. Fire the custom event
        this.dispatchEvent(selectEvent);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdExpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0TGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzdDLE9BQU8sY0FBYyxNQUFNLG1EQUFtRCxDQUFDO0FBRS9FLE1BQU0sQ0FBQyxPQUFPLE9BQU8sV0FBWSxTQUFRLGdCQUFnQjtJQUNyRCxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFBQyxRQUFRLENBQXdCO0lBRXRELFlBQVksQ0FBQyxLQUFpQjtRQUMxQix1RkFBdUY7UUFDdkYsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLCtLQUErSztRQUMvSyxNQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxlQUFlLEVBQUU7WUFDakQsTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFzQixLQUFLLENBQUMsYUFBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7U0FDcEYsQ0FBQyxDQUFDO1FBQ0gsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNKIn0=