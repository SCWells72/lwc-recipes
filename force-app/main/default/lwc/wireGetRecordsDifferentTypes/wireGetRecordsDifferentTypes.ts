import { LightningElement, wire } from 'lwc';
import { getRecords, RecordCollectionRepresentation } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

export default class WireGetRecordsDifferentTypes extends LightningElement {
    records = [];
    error: any;

    @wire(getAccountList)
    wiredAccounts(result: WireResult<Account[]>) {
        if (result.data) {
            const accountRecord = [
                {
                    recordIds: [result.data[0].Id],
                    fields: [ACCOUNT_NAME_FIELD]
                }
            ];
            this.records = this.records
                ? this.records.concat(accountRecord)
                : accountRecord;
            this.error = undefined;
        } else if (result.error) {
            this.error = result.error;
        }
    }

    @wire(getContactList)
    wiredContacts(result: WireResult<Contact[]>) {
        if (result.data) {
            const contactRecord = [
                {
                    recordIds: [result.data[0].Id],
                    fields: [NAME_FIELD],
                    optionalFields: [EMAIL_FIELD]
                }
            ];
            this.records = this.records
                ? this.records.concat(contactRecord)
                : contactRecord;
            this.error = undefined;
        } else if (result.error) {
            this.error = result.error;
            this.records = undefined;
        }
    }

    @wire(getRecords, {
        records: '$records'
    })
    recordResults: WireResult<RecordCollectionRepresentation>;

    get recordStr() {
        return this.recordResults
            ? JSON.stringify(this.recordResults.data, null, 2)
            : '';
    }
}