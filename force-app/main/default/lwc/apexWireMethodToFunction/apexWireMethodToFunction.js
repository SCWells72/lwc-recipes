import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
export default class ApexWireMethodToFunction extends LightningElement {
    contacts;
    error;
    @wire(getContactList)
    wiredContacts(result) {
        if (result.data) {
            this.contacts = result.data;
            this.error = undefined;
        }
        else if (result.error) {
            this.error = result.error;
            this.contacts = undefined;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleFdpcmVNZXRob2RUb0Z1bmN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBleFdpcmVNZXRob2RUb0Z1bmN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDN0MsT0FBTyxjQUFjLE1BQU0sbURBQW1ELENBQUM7QUFFL0UsTUFBTSxDQUFDLE9BQU8sT0FBTyx3QkFBeUIsU0FBUSxnQkFBZ0I7SUFDbEUsUUFBUSxDQUFZO0lBQ3BCLEtBQUssQ0FBZ0I7SUFFckIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3JCLGFBQWEsQ0FBQyxNQUE2QjtRQUN2QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUMzQixDQUFDO2FBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQzlCLENBQUM7SUFDTCxDQUFDO0NBQ0oifQ==