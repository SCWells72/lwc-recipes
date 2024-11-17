import { LightningElement, api, wire } from 'lwc';
import updateContact from '@salesforce/apex/ContactController.updateContact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord, getFieldValue, notifyRecordUpdateAvailable } from 'lightning/uiRecordApi';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
const fields = [FIRSTNAME_FIELD, LASTNAME_FIELD];
export default class LdsNotifyRecordUpdateAvailable extends LightningElement {
    @api
    recordId;
    @wire(getRecord, { recordId: '$recordId', fields })
    contact;
    get firstName() {
        return getFieldValue(this.contact.data, FIRSTNAME_FIELD);
    }
    get lastName() {
        return getFieldValue(this.contact.data, LASTNAME_FIELD);
    }
    async handleContactUpdate() {
        try {
            // Here we are using an imperative apex call for a simple update only to show the usage of notifyRecordUpdateAvailable
            // It is preferred to use updateRecord from the UI API for a simple update.
            await updateContact({
                recordId: this.recordId,
                // @ts-expect-error Not sure how to interpret this
                firstName: this.refs.firstName.value,
                // @ts-expect-error Not sure how to interpret this
                lastName: this.refs.lastName.value
            });
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success',
                message: 'Contact updated',
                variant: 'success'
            }));
            await notifyRecordUpdateAvailable([{ recordId: this.recordId }]);
        }
        catch (error) {
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error updating record',
                message: error.body.message,
                variant: 'error'
            }));
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGRzTm90aWZ5UmVjb3JkVXBkYXRlQXZhaWxhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGRzTm90aWZ5UmVjb3JkVXBkYXRlQXZhaWxhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ2xELE9BQU8sYUFBYSxNQUFNLGtEQUFrRCxDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQ0gsU0FBUyxFQUNULGFBQWEsRUFDYiwyQkFBMkIsRUFDOUIsTUFBTSx1QkFBdUIsQ0FBQztBQUUvQixPQUFPLGVBQWUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNuRSxPQUFPLGNBQWMsTUFBTSxxQ0FBcUMsQ0FBQztBQUVqRSxNQUFNLE1BQU0sR0FBRyxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUVqRCxNQUFNLENBQUMsT0FBTyxPQUFPLDhCQUErQixTQUFRLGdCQUFnQjtJQUN4RSxDQUFDLEdBQUc7SUFBQyxRQUFRLENBQVM7SUFFdEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUNuRCxPQUFPLENBQW1DO0lBRTFDLElBQUksU0FBUztRQUNULE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDUixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsS0FBSyxDQUFDLG1CQUFtQjtRQUNyQixJQUFJLENBQUM7WUFDRCxzSEFBc0g7WUFDdEgsMkVBQTJFO1lBQzNFLE1BQU0sYUFBYSxDQUFDO2dCQUNoQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLGtEQUFrRDtnQkFDbEQsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7Z0JBQ3BDLGtEQUFrRDtnQkFDbEQsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUs7YUFDckMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FDZCxJQUFJLGNBQWMsQ0FBQztnQkFDZixLQUFLLEVBQUUsU0FBUztnQkFDaEIsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsT0FBTyxFQUFFLFNBQVM7YUFDckIsQ0FBQyxDQUNMLENBQUM7WUFDRixNQUFNLDJCQUEyQixDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRSxDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxhQUFhLENBQ2QsSUFBSSxjQUFjLENBQUM7Z0JBQ2YsS0FBSyxFQUFFLHVCQUF1QjtnQkFDOUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTztnQkFDM0IsT0FBTyxFQUFFLE9BQU87YUFDbkIsQ0FBQyxDQUNMLENBQUM7UUFDTixDQUFDO0lBQ0wsQ0FBQztDQUNKIn0=