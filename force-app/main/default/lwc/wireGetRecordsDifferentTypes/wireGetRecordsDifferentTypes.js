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
    wiredAccounts(result) {
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
        }
        else if (result.error) {
            this.error = result.error;
        }
    }
    @wire(getContactList)
    wiredContacts(result) {
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
        }
        else if (result.error) {
            this.error = result.error;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lyZUdldFJlY29yZHNEaWZmZXJlbnRUeXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndpcmVHZXRSZWNvcmRzRGlmZmVyZW50VHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFrQyxNQUFNLHVCQUF1QixDQUFDO0FBQ25GLE9BQU8sVUFBVSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pELE9BQU8sV0FBVyxNQUFNLGtDQUFrQyxDQUFDO0FBQzNELE9BQU8sa0JBQWtCLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxjQUFjLE1BQU0sbURBQW1ELENBQUM7QUFDL0UsT0FBTyxjQUFjLE1BQU0sbURBQW1ELENBQUM7QUFFL0UsTUFBTSxDQUFDLE9BQU8sT0FBTyw0QkFBNkIsU0FBUSxnQkFBZ0I7SUFDdEUsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNiLEtBQUssQ0FBTTtJQUVYLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUNyQixhQUFhLENBQUMsTUFBNkI7UUFDdkMsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZCxNQUFNLGFBQWEsR0FBRztnQkFDbEI7b0JBQ0ksU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQzlCLE1BQU0sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUMvQjthQUNKLENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPO2dCQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO2dCQUNwQyxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzNCLENBQUM7YUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDOUIsQ0FBQztJQUNMLENBQUM7SUFFRCxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDckIsYUFBYSxDQUFDLE1BQTZCO1FBQ3ZDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsTUFBTSxhQUFhLEdBQUc7Z0JBQ2xCO29CQUNJLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUM5QixNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0JBQ3BCLGNBQWMsRUFBRSxDQUFDLFdBQVcsQ0FBQztpQkFDaEM7YUFDSixDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTztnQkFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztnQkFDcEMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUMzQixDQUFDO2FBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQzdCLENBQUM7SUFDTCxDQUFDO0lBRUQsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1FBQ2QsT0FBTyxFQUFFLFVBQVU7S0FDdEIsQ0FBQztJQUNGLGFBQWEsQ0FBNkM7SUFFMUQsSUFBSSxTQUFTO1FBQ1QsT0FBTyxJQUFJLENBQUMsYUFBYTtZQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDYixDQUFDO0NBQ0oifQ==