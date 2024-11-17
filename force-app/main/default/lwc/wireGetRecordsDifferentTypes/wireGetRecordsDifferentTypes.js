import { LightningElement, wire } from 'lwc';
import { getRecords } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
export default class WireGetRecordsDifferentTypes extends LightningElement {
    records = [];
    error;
    @wire(getAccountList)
    wiredAccounts({ error, data }) {
        if (data) {
            const accountRecord = [
                {
                    recordIds: [data[0].Id],
                    fields: [ACCOUNT_NAME_FIELD]
                }
            ];
            this.records = this.records
                ? this.records.concat(accountRecord)
                : accountRecord;
            this.error = undefined;
        }
        else if (error) {
            this.error = error;
        }
    }
    @wire(getContactList)
    wiredContacts({ error, data }) {
        if (data) {
            const contactRecord = [
                {
                    recordIds: [data[0].Id],
                    fields: [NAME_FIELD],
                    optionalFields: [EMAIL_FIELD]
                }
            ];
            this.records = this.records
                ? this.records.concat(contactRecord)
                : contactRecord;
            this.error = undefined;
        }
        else if (error) {
            this.error = error;
            this.records = undefined;
        }
    }
    @wire(getRecords, {
        records: '$records'
    })
    recordResults;
    get recordStr() {
        return this.recordResults
            ? JSON.stringify(this.recordResults.data, null, 2)
            : '';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lyZUdldFJlY29yZHNEaWZmZXJlbnRUeXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndpcmVHZXRSZWNvcmRzRGlmZmVyZW50VHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFrQyxNQUFNLHVCQUF1QixDQUFDO0FBQ25GLE9BQU8sVUFBVSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pELE9BQU8sV0FBVyxNQUFNLGtDQUFrQyxDQUFDO0FBQzNELE9BQU8sa0JBQWtCLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxjQUFjLE1BQU0sbURBQW1ELENBQUM7QUFDL0UsT0FBTyxjQUFjLE1BQU0sbURBQW1ELENBQUM7QUFFL0UsTUFBTSxDQUFDLE9BQU8sT0FBTyw0QkFBNkIsU0FBUSxnQkFBZ0I7SUFDdEUsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNiLEtBQUssQ0FBTTtJQUVYLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUNyQixhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1FBQ3pCLElBQUksSUFBSSxFQUFFLENBQUM7WUFDUCxNQUFNLGFBQWEsR0FBRztnQkFDbEI7b0JBQ0ksU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDdkIsTUFBTSxFQUFFLENBQUMsa0JBQWtCLENBQUM7aUJBQy9CO2FBQ0osQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87Z0JBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBQ3BDLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDM0IsQ0FBQzthQUFNLElBQUksS0FBSyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDO0lBQ0wsQ0FBQztJQUVELENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUNyQixhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1FBQ3pCLElBQUksSUFBSSxFQUFFLENBQUM7WUFDUCxNQUFNLGFBQWEsR0FBRztnQkFDbEI7b0JBQ0ksU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDdkIsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNwQixjQUFjLEVBQUUsQ0FBQyxXQUFXLENBQUM7aUJBQ2hDO2FBQ0osQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87Z0JBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBQ3BDLENBQUMsQ0FBQyxhQUFhLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDM0IsQ0FBQzthQUFNLElBQUksS0FBSyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUM3QixDQUFDO0lBQ0wsQ0FBQztJQUVELENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUNkLE9BQU8sRUFBRSxVQUFVO0tBQ3RCLENBQUM7SUFDRixhQUFhLENBQTZDO0lBRTFELElBQUksU0FBUztRQUNULE9BQU8sSUFBSSxDQUFDLGFBQWE7WUFDckIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2IsQ0FBQztDQUNKIn0=