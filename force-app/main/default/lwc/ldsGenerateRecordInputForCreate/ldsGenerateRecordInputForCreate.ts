import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {
    createRecord,
    generateRecordInputForCreate,
    getRecordCreateDefaults,
    RecordDefaults,
    RecordInputRepresentation
} from 'lightning/uiRecordApi';
import { reduceErrors } from 'c/ldsUtils';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import AREANUMBER_FIELD from '@salesforce/schema/Account.AreaNumber__c';
import LightningInput from 'lightning/input';

export default class LdsGenerateRecordInputForCreate extends LightningElement {
    areaNumber: number;
    areaNumberField = AREANUMBER_FIELD.fieldApiName;
    areaNumberCreateable: boolean;
    error: any;
    nameField = NAME_FIELD.fieldApiName;
    recordInput: RecordInputRepresentation;

    @wire(getRecordCreateDefaults, { objectApiName: ACCOUNT_OBJECT })
    loadAccountCreateDefaults(result: WireResult<RecordDefaults>) {
        if (result.data) {
            // Creates a record input with default field values
            this.recordInput = generateRecordInputForCreate(
                result.data.record,
                result.data.objectInfos[ACCOUNT_OBJECT.objectApiName] // Filters it to only createable fields
            );
            const fields = this.recordInput.fields;
            this.areaNumberCreateable = AREANUMBER_FIELD.fieldApiName in fields;
            this.areaNumber = fields[AREANUMBER_FIELD.fieldApiName];
            this.error = undefined;
        } else if (result.error) {
            this.recordInput = undefined;
            this.error = result.error;
        }
    }

    handleFieldChange(event: CustomEvent<LightningInput>) {
        // @ts-expect-error Not sure how "data-field-name" should be interpreted
        this.recordInput.fields[event.target.dataset.fieldName] =
            (<LightningInput>event.target).value;
    }

    async createAccount() {
        try {
            const account = await createRecord(this.recordInput);
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Account created, with id: ' + account.id,
                    variant: 'success'
                })
            );
        } catch (error) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: reduceErrors(error).join(', '),
                    variant: 'error'
                })
            );
        }
    }
}
