import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import { reduceErrors } from 'c/ldsUtils';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
export default class LdsCreateRecord extends LightningElement {
    accountId;
    name = '';
    handleNameChange(event) {
        this.accountId = undefined;
        this.name = event.target.value;
    }
    async createAccount() {
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;
        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
        try {
            const account = await createRecord(recordInput);
            this.accountId = account.id;
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success',
                message: 'Account created',
                variant: 'success'
            }));
        }
        catch (error) {
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error creating record',
                message: reduceErrors(error).join(', '),
                variant: 'error'
            }));
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGRzQ3JlYXRlUmVjb3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGRzQ3JlYXRlUmVjb3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUN2QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDMUMsT0FBTyxjQUFjLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxVQUFVLE1BQU0saUNBQWlDLENBQUM7QUFHekQsTUFBTSxDQUFDLE9BQU8sT0FBTyxlQUFnQixTQUFRLGdCQUFnQjtJQUN6RCxTQUFTLENBQVM7SUFFbEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUVWLGdCQUFnQixDQUFDLEtBQWtDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQW9CLEtBQUssQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3JELENBQUM7SUFFRCxLQUFLLENBQUMsYUFBYTtRQUNmLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDNUMsTUFBTSxXQUFXLEdBQUcsRUFBRSxPQUFPLEVBQUUsY0FBYyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUN0RSxJQUFJLENBQUM7WUFDRCxNQUFNLE9BQU8sR0FBRyxNQUFNLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FDZCxJQUFJLGNBQWMsQ0FBQztnQkFDZixLQUFLLEVBQUUsU0FBUztnQkFDaEIsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsT0FBTyxFQUFFLFNBQVM7YUFDckIsQ0FBQyxDQUNMLENBQUM7UUFDTixDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxhQUFhLENBQ2QsSUFBSSxjQUFjLENBQUM7Z0JBQ2YsS0FBSyxFQUFFLHVCQUF1QjtnQkFDOUIsT0FBTyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUN2QyxPQUFPLEVBQUUsT0FBTzthQUNuQixDQUFDLENBQ0wsQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0NBQ0oifQ==