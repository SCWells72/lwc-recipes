import { LightningElement } from 'lwc';
import findContacts from '@salesforce/apex/ContactController.findContacts';
export default class ApexImperativeMethodWithParams extends LightningElement {
    searchKey = '';
    contacts;
    error;
    handleKeyChange(event) {
        this.searchKey = event.target.value;
    }
    async handleSearch() {
        try {
            this.contacts = await findContacts({ searchKey: this.searchKey });
            this.error = undefined;
        }
        catch (error) {
            this.error = error;
            this.contacts = undefined;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleEltcGVyYXRpdmVNZXRob2RXaXRoUGFyYW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBleEltcGVyYXRpdmVNZXRob2RXaXRoUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUN2QyxPQUFPLFlBQVksTUFBTSxpREFBaUQsQ0FBQztBQUczRSxNQUFNLENBQUMsT0FBTyxPQUFPLDhCQUErQixTQUFRLGdCQUFnQjtJQUN4RSxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ2YsUUFBUSxDQUFZO0lBQ3BCLEtBQUssQ0FBTTtJQUVYLGVBQWUsQ0FBQyxLQUFrQztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFvQixLQUFLLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztJQUMxRCxDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVk7UUFDZCxJQUFJLENBQUM7WUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sWUFBWSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzNCLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7UUFDOUIsQ0FBQztJQUNMLENBQUM7Q0FDSiJ9