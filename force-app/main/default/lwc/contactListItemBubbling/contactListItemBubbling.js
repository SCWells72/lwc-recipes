import { LightningElement, api } from 'lwc';
export default class ContactListItemBubbling extends LightningElement {
    @api
    contact;
    handleSelect(event) {
        // 1. Prevent default behavior of anchor tag click which is to navigate to the href url
        event.preventDefault();
        // 2. Create a custom event that bubbles. Read about event best practices at http://developer.salesforce.com/docs/component-library/documentation/lwc/lwc.events_best_practices
        const selectEvent = new CustomEvent('contactselect', {
            bubbles: true
        });
        // 3. Fire the custom event
        this.dispatchEvent(selectEvent);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdExpc3RJdGVtQnViYmxpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250YWN0TGlzdEl0ZW1CdWJibGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRTVDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sdUJBQXdCLFNBQVEsZ0JBQWdCO0lBQ2pFLENBQUMsR0FBRztJQUFDLE9BQU8sQ0FBVTtJQUV0QixZQUFZLENBQUMsS0FBaUI7UUFDMUIsdUZBQXVGO1FBQ3ZGLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QiwrS0FBK0s7UUFDL0ssTUFBTSxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsZUFBZSxFQUFFO1lBQ2pELE9BQU8sRUFBRSxJQUFJO1NBQ2hCLENBQUMsQ0FBQztRQUNILDJCQUEyQjtRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDSiJ9