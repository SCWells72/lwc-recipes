import { LightningElement, api } from 'lwc';
export default class ContactListItem extends LightningElement {
    @api
    contact;
    handleClick(event) {
        // 1. Prevent default behavior of anchor tag click which is to navigate to the href url
        event.preventDefault();
        // 2. Read about event best practices at http://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.events_best_practices
        const selectEvent = new CustomEvent('select', {
            detail: this.contact.Id
        });
        // 3. Fire the custom event
        this.dispatchEvent(selectEvent);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdExpc3RJdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdExpc3RJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFFNUMsTUFBTSxDQUFDLE9BQU8sT0FBTyxlQUFnQixTQUFRLGdCQUFnQjtJQUN6RCxDQUFDLEdBQUc7SUFBQyxPQUFPLENBQVU7SUFFdEIsV0FBVyxDQUFDLEtBQWlCO1FBQ3pCLHVGQUF1RjtRQUN2RixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsMklBQTJJO1FBQzNJLE1BQU0sV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUMxQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1NBQzFCLENBQUMsQ0FBQztRQUNILDJCQUEyQjtRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDSiJ9