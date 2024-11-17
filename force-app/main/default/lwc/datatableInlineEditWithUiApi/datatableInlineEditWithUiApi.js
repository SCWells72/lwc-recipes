import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContactList';
import { refreshApex } from '@salesforce/apex';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
const COLS = [
    {
        label: 'First Name',
        fieldName: FIRSTNAME_FIELD.fieldApiName,
        editable: true
    },
    {
        label: 'Last Name',
        fieldName: LASTNAME_FIELD.fieldApiName,
        editable: true
    },
    { label: 'Title', fieldName: TITLE_FIELD.fieldApiName, editable: true },
    {
        label: 'Phone',
        fieldName: PHONE_FIELD.fieldApiName,
        type: 'phone',
        editable: true
    },
    {
        label: 'Email',
        fieldName: EMAIL_FIELD.fieldApiName,
        type: 'email',
        editable: true
    }
];
export default class DatatableInlineEditWithUiApi extends LightningElement {
    columns = COLS;
    draftValues = [];
    // Using Apex to fetch records while waiting for a replacement to getListUi() which is deprecated
    @wire(getContacts)
    contacts;
    async handleSave(event) {
        // Convert datatable draft values into record objects
        const records = event.detail.draftValues.slice().map((draftValue) => {
            const fields = Object.assign({}, draftValue);
            return { fields };
        });
        // Clear all datatable draft values
        this.draftValues = [];
        try {
            // Update all records in parallel thanks to the UI API
            const recordUpdatePromises = records.map((record) => updateRecord(record));
            await Promise.all(recordUpdatePromises);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXRhYmxlSW5saW5lRWRpdFdpdGhVaUFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGF0YWJsZUlubGluZUVkaXRXaXRoVWlBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLFdBQVcsTUFBTSxtREFBbUQsQ0FBQztBQUM1RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUE2QixZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxlQUFlLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxjQUFjLE1BQU0scUNBQXFDLENBQUM7QUFDakUsT0FBTyxXQUFXLE1BQU0sa0NBQWtDLENBQUM7QUFDM0QsT0FBTyxXQUFXLE1BQU0sa0NBQWtDLENBQUM7QUFDM0QsT0FBTyxXQUFXLE1BQU0sa0NBQWtDLENBQUM7QUFHM0QsTUFBTSxJQUFJLEdBQUc7SUFDVDtRQUNJLEtBQUssRUFBRSxZQUFZO1FBQ25CLFNBQVMsRUFBRSxlQUFlLENBQUMsWUFBWTtRQUN2QyxRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNEO1FBQ0ksS0FBSyxFQUFFLFdBQVc7UUFDbEIsU0FBUyxFQUFFLGNBQWMsQ0FBQyxZQUFZO1FBQ3RDLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDdkU7UUFDSSxLQUFLLEVBQUUsT0FBTztRQUNkLFNBQVMsRUFBRSxXQUFXLENBQUMsWUFBWTtRQUNuQyxJQUFJLEVBQUUsT0FBTztRQUNiLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0Q7UUFDSSxLQUFLLEVBQUUsT0FBTztRQUNkLFNBQVMsRUFBRSxXQUFXLENBQUMsWUFBWTtRQUNuQyxJQUFJLEVBQUUsT0FBTztRQUNiLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0NBQ0osQ0FBQztBQUNGLE1BQU0sQ0FBQyxPQUFPLE9BQU8sNEJBQTZCLFNBQVEsZ0JBQWdCO0lBQ3RFLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDZixXQUFXLEdBQUcsRUFBRSxDQUFDO0lBRWpCLGlHQUFpRztJQUNqRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDbEIsUUFBUSxDQUF3QjtJQUVoQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQXNDO1FBQ25ELHFEQUFxRDtRQUNyRCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFlLEVBQUUsRUFBRTtZQUNyRSxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDO1lBQ0Qsc0RBQXNEO1lBQ3RELE1BQU0sb0JBQW9CLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQWlDLEVBQUUsRUFBRSxDQUMzRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQ3ZCLENBQUM7WUFDRixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUV4Qyw4QkFBOEI7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FDZCxJQUFJLGNBQWMsQ0FBQztnQkFDZixLQUFLLEVBQUUsU0FBUztnQkFDaEIsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsT0FBTyxFQUFFLFNBQVM7YUFDckIsQ0FBQyxDQUNMLENBQUM7WUFFRixzQ0FBc0M7WUFDdEMsTUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FDZCxJQUFJLGNBQWMsQ0FBQztnQkFDZixLQUFLLEVBQUUsNENBQTRDO2dCQUNuRCxPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO2dCQUMzQixPQUFPLEVBQUUsT0FBTzthQUNuQixDQUFDLENBQ0wsQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0NBQ0oifQ==