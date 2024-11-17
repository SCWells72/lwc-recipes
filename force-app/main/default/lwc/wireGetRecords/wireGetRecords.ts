import { LightningElement, wire } from 'lwc';
import { getRecords, RecordCollectionRepresentation } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import { FieldId } from '@salesforce/schema';

export interface MyRecord {
    recordIds: string[];
    fields: FieldId[];
    optionalFields: FieldId[];
}

export default class WireGetRecords extends LightningElement {
    records: MyRecord[];
    error: FetchResponse;

    @wire(getContactList)
    wiredContacts(result: WireResult<Contact[]>) {
        if (result.data) {
            this.records = <MyRecord[]>[
                {
                    recordIds: [result.data[0].Id, result.data[1].Id],
                    fields: [NAME_FIELD],
                    optionalFields: [EMAIL_FIELD]
                }
            ];
            this.error = undefined;
        } else if (result.error) {
            this.error = result.error;
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
