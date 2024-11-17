import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import { reduceErrors } from 'c/ldsUtils';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import LightningInput from 'lightning/input';

export default class LdsCreateRecord extends LightningElement {
    accountId: string;

    name = '';

    handleNameChange(event: CustomEvent<LightningInput>) {
        this.accountId = undefined;
        this.name = (<LightningInput>event.target).value;
    }

    async createAccount() {
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;
        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
        try {
            const account = await createRecord(recordInput);
            this.accountId = account.id;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Account created',
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
