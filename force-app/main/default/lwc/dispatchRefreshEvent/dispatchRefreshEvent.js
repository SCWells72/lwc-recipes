import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { RefreshEvent } from 'lightning/refresh';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
export default class DispatchRefreshEvent extends LightningElement {
    // Exposing fields to make them available in the template
    nameField = NAME_FIELD;
    phoneField = PHONE_FIELD;
    typeField = TYPE_FIELD;
    handleSuccess(event) {
        // Show Account Created Successfully message
        const evt = new ShowToastEvent({
            title: 'Account created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(evt);
        // Dispatch the refresh event
        this.dispatchEvent(new RefreshEvent());
        // Reset the fields to create a new record
        const inputFields = this.template.querySelectorAll('lightning-input-field');
        inputFields?.forEach((field) => field.reset());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2hSZWZyZXNoRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNwYXRjaFJlZnJlc2hFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDdkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLFVBQVUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6RCxPQUFPLFdBQVcsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRCxPQUFPLFVBQVUsTUFBTSxpQ0FBaUMsQ0FBQztBQUl6RCxNQUFNLENBQUMsT0FBTyxPQUFPLG9CQUFxQixTQUFRLGdCQUFnQjtJQUM5RCx5REFBeUQ7SUFDekQsU0FBUyxHQUFHLFVBQVUsQ0FBQztJQUN2QixVQUFVLEdBQUcsV0FBVyxDQUFDO0lBQ3pCLFNBQVMsR0FBRyxVQUFVLENBQUM7SUFFdkIsYUFBYSxDQUFDLEtBQTJDO1FBQ3JELDRDQUE0QztRQUM1QyxNQUFNLEdBQUcsR0FBRyxJQUFJLGNBQWMsQ0FBQztZQUMzQixLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCLE9BQU8sRUFBRSxhQUFhLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3hDLE9BQU8sRUFBRSxTQUFTO1NBQ3JCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFeEIsNkJBQTZCO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBRXZDLDBDQUEwQztRQUMxQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUM5Qyx1QkFBdUIsQ0FDMUIsQ0FBQztRQUNGLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDSiJ9