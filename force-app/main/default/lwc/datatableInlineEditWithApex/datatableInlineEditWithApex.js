import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContactList';
import updateContacts from '@salesforce/apex/ContactController.updateContacts';
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
const COLS = [
    { label: 'First Name', fieldName: 'FirstName', editable: true },
    { label: 'Last Name', fieldName: 'LastName', editable: true },
    { label: 'Title', fieldName: 'Title', editable: true },
    { label: 'Phone', fieldName: 'Phone', type: 'phone', editable: true },
    { label: 'Email', fieldName: 'Email', type: 'email', editable: true }
];
export default class DatatableInlineEditWithApex extends LightningElement {
    columns = COLS;
    draftValues = [];
    @wire(getContacts)
    contacts;
    async handleSave(event) {
        const updatedFields = event.detail.draftValues;
        // Clear all datatable draft values
        this.draftValues = [];
        try {
            // Pass edited fields to the updateContacts Apex controller
            await updateContacts({ contactsForUpdate: updatedFields });
            // Report success with a toast
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success',
                message: 'Contacts updated',
                variant: 'success'
            }));
            // Display fresh data in the datatable
            await refreshApex(this.contacts);
        }
        catch (error) {
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error while updating or refreshing records',
                message: error.body.message,
                variant: 'error'
            }));
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXRhYmxlSW5saW5lRWRpdFdpdGhBcGV4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YXRhYmxlSW5saW5lRWRpdFdpdGhBcGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDN0MsT0FBTyxXQUFXLE1BQU0sbURBQW1ELENBQUM7QUFDNUUsT0FBTyxjQUFjLE1BQU0sbURBQW1ELENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUdsRSxNQUFNLElBQUksR0FBc0I7SUFDNUIsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUMvRCxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzdELEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDdEQsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3JFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtDQUN4RSxDQUFDO0FBRUYsTUFBTSxDQUFDLE9BQU8sT0FBTywyQkFBNEIsU0FBUSxnQkFBZ0I7SUFDckUsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNmLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFFakIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ2xCLFFBQVEsQ0FBd0I7SUFFaEMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFzQztRQUNuRCxNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUUvQyxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDO1lBQ0QsMkRBQTJEO1lBQzNELE1BQU0sY0FBYyxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUUzRCw4QkFBOEI7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FDZCxJQUFJLGNBQWMsQ0FBQztnQkFDZixLQUFLLEVBQUUsU0FBUztnQkFDaEIsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsT0FBTyxFQUFFLFNBQVM7YUFDckIsQ0FBQyxDQUNMLENBQUM7WUFFRixzQ0FBc0M7WUFDdEMsTUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FDZCxJQUFJLGNBQWMsQ0FBQztnQkFDZixLQUFLLEVBQUUsNENBQTRDO2dCQUNuRCxPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO2dCQUMzQixPQUFPLEVBQUUsT0FBTzthQUNuQixDQUFDLENBQ0wsQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0NBQ0oifQ==