import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import { deleteRecord } from 'lightning/uiRecordApi';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import { reduceErrors } from 'c/ldsUtils';

export default class LdsDeleteRecord extends LightningElement {
    accounts: Account[];
    error: any;

    /** Wired Apex result so it can be refreshed programmatically */
    wiredAccountsResult: WireResult<Account[]>;

    @wire(getAccountList)
    wiredAccounts(result: WireResult<Account[]>) {
        this.wiredAccountsResult = result;
        if (result.data) {
            this.accounts = result.data;
            this.error = undefined;
        } else if (result.error) {
            this.error = result.error;
            this.accounts = undefined;
        }
    }

    async deleteAccount(event: MouseEvent) {
        // @ts-expect-error Not sure how "data-recordid" should be interpreted
        const recordId = event.target.dataset.recordid;

        try {
            await deleteRecord(recordId);
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Account deleted',
                    variant: 'success'
                })
            );
            await refreshApex(this.wiredAccountsResult);
        } catch (error) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error deleting record',
                    message: reduceErrors(error).join(', '),
                    variant: 'error'
                })
            );
        }
    }
}
