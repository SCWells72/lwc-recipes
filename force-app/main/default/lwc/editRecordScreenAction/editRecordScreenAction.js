import { LightningElement, api, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CloseActionScreenEvent } from 'lightning/actions';
import { getRecord, updateRecord } from 'lightning/uiRecordApi';
import ID_FIELD from '@salesforce/schema/Contact.Id';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
export default class EditRecordScreenAction extends LightningElement {
    @api
    recordId;
    @api
    objectApiName;
    @wire(getRecord, {
        recordId: '$recordId',
        fields: [FIRSTNAME_FIELD, LASTNAME_FIELD]
    })
    contact;
    get firstname() {
        return this.contact.data
            ? this.contact.data.fields.FirstName.value
            : null;
    }
    get lastname() {
        return this.contact.data
            ? this.contact.data.fields.LastName.value
            : null;
    }
    async handleSave() {
        const fields = {};
        fields[ID_FIELD.fieldApiName] = this.recordId;
        fields[FIRSTNAME_FIELD.fieldApiName] = (this.template.querySelector("[data-field='FirstName']")).value;
        fields[LASTNAME_FIELD.fieldApiName] = (this.template.querySelector("[data-field='LastName']")).value;
        const recordInput = { fields };
        try {
            await updateRecord(recordInput);
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success',
                message: 'Contact updated',
                variant: 'success'
            }));
            this.dispatchEvent(new CloseActionScreenEvent());
        }
        catch (error) {
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error updating record, try again...',
                message: error.body.message,
                variant: 'error'
            }));
        }
    }
    handleCancel() {
        this.dispatchEvent(new CloseActionScreenEvent());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdFJlY29yZFNjcmVlbkFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVkaXRSZWNvcmRTY3JlZW5BY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQXdCLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RGLE9BQU8sUUFBUSxNQUFNLCtCQUErQixDQUFDO0FBQ3JELE9BQU8sZUFBZSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25FLE9BQU8sY0FBYyxNQUFNLHFDQUFxQyxDQUFDO0FBR2pFLE1BQU0sQ0FBQyxPQUFPLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWdCO0lBQ2hFLENBQUMsR0FBRztJQUFDLFFBQVEsQ0FBUztJQUN0QixDQUFDLEdBQUc7SUFBQyxhQUFhLENBQVM7SUFFM0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2IsUUFBUSxFQUFFLFdBQVc7UUFDckIsTUFBTSxFQUFFLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQztLQUM1QyxDQUFDO0lBQ0YsT0FBTyxDQUFtQztJQUUxQyxJQUFJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtZQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1lBQzFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDZixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7WUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSztZQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVO1FBQ1osTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM5QyxNQUFNLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQy9ELDBCQUEwQixDQUM3QixDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ1QsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUM5RCx5QkFBeUIsQ0FDNUIsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNULE1BQU0sV0FBVyxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFFL0IsSUFBSSxDQUFDO1lBQ0QsTUFBTSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FDZCxJQUFJLGNBQWMsQ0FBQztnQkFDZixLQUFLLEVBQUUsU0FBUztnQkFDaEIsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsT0FBTyxFQUFFLFNBQVM7YUFDckIsQ0FBQyxDQUNMLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FDZCxJQUFJLGNBQWMsQ0FBQztnQkFDZixLQUFLLEVBQUUscUNBQXFDO2dCQUM1QyxPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPO2dCQUMzQixPQUFPLEVBQUUsT0FBTzthQUNuQixDQUFDLENBQ0wsQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWTtRQUNSLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxzQkFBc0IsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNKIn0=