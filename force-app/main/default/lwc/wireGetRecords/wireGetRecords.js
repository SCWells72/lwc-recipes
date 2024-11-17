import { LightningElement, wire } from 'lwc';
import { getRecords } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import getContactList from '@salesforce/apex/ContactController.getContactList';
export default class WireGetRecords extends LightningElement {
    records;
    error;
    @wire(getContactList)
    wiredContacts(result) {
        if (result.data) {
            this.records = [
                {
                    recordIds: [result.data[0].Id, result.data[1].Id],
                    fields: [NAME_FIELD],
                    optionalFields: [EMAIL_FIELD]
                }
            ];
            this.error = undefined;
        }
        else if (result.error) {
            this.error = result.error;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lyZUdldFJlY29yZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3aXJlR2V0UmVjb3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQWtDLE1BQU0sdUJBQXVCLENBQUM7QUFDbkYsT0FBTyxVQUFVLE1BQU0saUNBQWlDLENBQUM7QUFDekQsT0FBTyxXQUFXLE1BQU0sa0NBQWtDLENBQUM7QUFDM0QsT0FBTyxjQUFjLE1BQU0sbURBQW1ELENBQUM7QUFTL0UsTUFBTSxDQUFDLE9BQU8sT0FBTyxjQUFlLFNBQVEsZ0JBQWdCO0lBQ3hELE9BQU8sQ0FBYTtJQUNwQixLQUFLLENBQWdCO0lBRXJCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUNyQixhQUFhLENBQUMsTUFBNkI7UUFDdkMsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsT0FBTyxHQUFlO2dCQUN2QjtvQkFDSSxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDakQsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUNwQixjQUFjLEVBQUUsQ0FBQyxXQUFXLENBQUM7aUJBQ2hDO2FBQ0osQ0FBQztZQUNGLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzNCLENBQUM7YUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDOUIsQ0FBQztJQUNMLENBQUM7SUFFRCxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDZCxPQUFPLEVBQUUsVUFBVTtLQUN0QixDQUFDO0lBQ0YsYUFBYSxDQUE2QztJQUUxRCxJQUFJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxhQUFhO1lBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDbEQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNiLENBQUM7Q0FDSiJ9