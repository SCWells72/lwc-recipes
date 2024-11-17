import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord, getRecordCreateDefaults, generateRecordInputForCreate } from 'lightning/uiRecordApi';
import { reduceErrors } from 'c/ldsUtils';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import AREANUMBER_FIELD from '@salesforce/schema/Account.AreaNumber__c';
export default class LdsGenerateRecordInputForCreate extends LightningElement {
    areaNumber;
    areaNumberField = AREANUMBER_FIELD.fieldApiName;
    areaNumberCreateable;
    error;
    nameField = NAME_FIELD.fieldApiName;
    recordInput;
    @wire(getRecordCreateDefaults, { objectApiName: ACCOUNT_OBJECT })
    loadAccountCreateDefaults({ data, error }) {
        if (data) {
            // Creates a record input with default field values
            this.recordInput = generateRecordInputForCreate(data.record, data.objectInfos[ACCOUNT_OBJECT.objectApiName] // Filters it to only createable fields
            );
            const fields = this.recordInput.fields;
            this.areaNumberCreateable = AREANUMBER_FIELD.fieldApiName in fields;
            this.areaNumber = fields[AREANUMBER_FIELD.fieldApiName];
            this.error = undefined;
        }
        else if (error) {
            this.recordInput = undefined;
            this.error = error;
        }
    }
    handleFieldChange(event) {
        // @ts-expect-error Not sure how "data-field-name" should be interpreted
        this.recordInput.fields[event.target.dataset.fieldName] =
            event.target.value;
    }
    async createAccount() {
        try {
            const account = await createRecord(this.recordInput);
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success',
                message: 'Account created, with id: ' + account.id,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGRzR2VuZXJhdGVSZWNvcmRJbnB1dEZvckNyZWF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxkc0dlbmVyYXRlUmVjb3JkSW5wdXRGb3JDcmVhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUNILFlBQVksRUFDWix1QkFBdUIsRUFDdkIsNEJBQTRCLEVBRS9CLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUMxQyxPQUFPLGNBQWMsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RCxPQUFPLFVBQVUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6RCxPQUFPLGdCQUFnQixNQUFNLDBDQUEwQyxDQUFDO0FBR3hFLE1BQU0sQ0FBQyxPQUFPLE9BQU8sK0JBQWdDLFNBQVEsZ0JBQWdCO0lBQ3pFLFVBQVUsQ0FBUztJQUNuQixlQUFlLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO0lBQ2hELG9CQUFvQixDQUFVO0lBQzlCLEtBQUssQ0FBTTtJQUNYLFNBQVMsR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO0lBQ3BDLFdBQVcsQ0FBNEI7SUFFdkMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLENBQUM7SUFDakUseUJBQXlCLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO1FBQ3JDLElBQUksSUFBSSxFQUFFLENBQUM7WUFDUCxtREFBbUQ7WUFDbkQsSUFBSSxDQUFDLFdBQVcsR0FBRyw0QkFBNEIsQ0FDM0MsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQyx1Q0FBdUM7YUFDekYsQ0FBQztZQUNGLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDO1lBQ3BFLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzNCLENBQUM7YUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQztJQUNMLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFrQztRQUNoRCx3RUFBd0U7UUFDeEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2xDLEtBQUssQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0lBQzdDLENBQUM7SUFFRCxLQUFLLENBQUMsYUFBYTtRQUNmLElBQUksQ0FBQztZQUNELE1BQU0sT0FBTyxHQUFHLE1BQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsYUFBYSxDQUNkLElBQUksY0FBYyxDQUFDO2dCQUNmLEtBQUssRUFBRSxTQUFTO2dCQUNoQixPQUFPLEVBQUUsNEJBQTRCLEdBQUcsT0FBTyxDQUFDLEVBQUU7Z0JBQ2xELE9BQU8sRUFBRSxTQUFTO2FBQ3JCLENBQUMsQ0FDTCxDQUFDO1FBQ04sQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsYUFBYSxDQUNkLElBQUksY0FBYyxDQUFDO2dCQUNmLEtBQUssRUFBRSx1QkFBdUI7Z0JBQzlCLE9BQU8sRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDdkMsT0FBTyxFQUFFLE9BQU87YUFDbkIsQ0FBQyxDQUNMLENBQUM7UUFDTixDQUFDO0lBQ0wsQ0FBQztDQUNKIn0=