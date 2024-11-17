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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXRhYmxlSW5saW5lRWRpdFdpdGhVaUFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGF0YWJsZUlubGluZUVkaXRXaXRoVWlBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLFdBQVcsTUFBTSxtREFBbUQsQ0FBQztBQUM1RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUE2QixZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxlQUFlLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxjQUFjLE1BQU0scUNBQXFDLENBQUM7QUFDakUsT0FBTyxXQUFXLE1BQU0sa0NBQWtDLENBQUM7QUFDM0QsT0FBTyxXQUFXLE1BQU0sa0NBQWtDLENBQUM7QUFDM0QsT0FBTyxXQUFXLE1BQU0sa0NBQWtDLENBQUM7QUFHM0QsTUFBTSxJQUFJLEdBQXNCO0lBQzVCO1FBQ0ksS0FBSyxFQUFFLFlBQVk7UUFDbkIsU0FBUyxFQUFFLGVBQWUsQ0FBQyxZQUFZO1FBQ3ZDLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0Q7UUFDSSxLQUFLLEVBQUUsV0FBVztRQUNsQixTQUFTLEVBQUUsY0FBYyxDQUFDLFlBQVk7UUFDdEMsUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN2RTtRQUNJLEtBQUssRUFBRSxPQUFPO1FBQ2QsU0FBUyxFQUFFLFdBQVcsQ0FBQyxZQUFZO1FBQ25DLElBQUksRUFBRSxPQUFPO1FBQ2IsUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRDtRQUNJLEtBQUssRUFBRSxPQUFPO1FBQ2QsU0FBUyxFQUFFLFdBQVcsQ0FBQyxZQUFZO1FBQ25DLElBQUksRUFBRSxPQUFPO1FBQ2IsUUFBUSxFQUFFLElBQUk7S0FDakI7Q0FDSixDQUFDO0FBQ0YsTUFBTSxDQUFDLE9BQU8sT0FBTyw0QkFBNkIsU0FBUSxnQkFBZ0I7SUFDdEUsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNmLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFFakIsaUdBQWlHO0lBQ2pHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNsQixRQUFRLENBQXdCO0lBRWhDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBc0M7UUFDbkQscURBQXFEO1FBQ3JELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQWUsRUFBRSxFQUFFO1lBQ3JFLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztRQUVILG1DQUFtQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUM7WUFDRCxzREFBc0Q7WUFDdEQsTUFBTSxvQkFBb0IsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBaUMsRUFBRSxFQUFFLENBQzNFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FDdkIsQ0FBQztZQUNGLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBRXhDLDhCQUE4QjtZQUM5QixJQUFJLENBQUMsYUFBYSxDQUNkLElBQUksY0FBYyxDQUFDO2dCQUNmLEtBQUssRUFBRSxTQUFTO2dCQUNoQixPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixPQUFPLEVBQUUsU0FBUzthQUNyQixDQUFDLENBQ0wsQ0FBQztZQUVGLHNDQUFzQztZQUN0QyxNQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsYUFBYSxDQUNkLElBQUksY0FBYyxDQUFDO2dCQUNmLEtBQUssRUFBRSw0Q0FBNEM7Z0JBQ25ELE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87Z0JBQzNCLE9BQU8sRUFBRSxPQUFPO2FBQ25CLENBQUMsQ0FDTCxDQUFDO1FBQ04sQ0FBQztJQUNMLENBQUM7Q0FDSiJ9