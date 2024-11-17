import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
export default class ContactSelector extends LightningElement {
    contactOptions = [];
    error;
    @wire(getContactList)
    wiredContacts(result) {
        if (result.data) {
            this.contactOptions = result.data.map((record) => ({
                value: record.Id,
                label: record.Name
            }));
            this.error = undefined;
        }
        else if (result.error) {
            this.error = result.error;
            this.contactOptions = undefined;
        }
    }
    handleRecordSelected(event) {
        this.dispatchEvent(new CustomEvent('select', {
            detail: { recordId: event.target.value }
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdFNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdFNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDN0MsT0FBTyxjQUFjLE1BQU0sbURBQW1ELENBQUM7QUFRL0UsTUFBTSxDQUFDLE9BQU8sT0FBTyxlQUFnQixTQUFRLGdCQUFnQjtJQUN6RCxjQUFjLEdBQW9CLEVBQUUsQ0FBQztJQUNyQyxLQUFLLENBQU07SUFFWCxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDckIsYUFBYSxDQUFDLE1BQTZCO1FBQ3ZDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBZ0I7Z0JBQzlELEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDaEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJO2FBQ3BCLENBQUEsQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDM0IsQ0FBQzthQUFNLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9CQUFvQixDQUFDLEtBQXFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLENBQ2QsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQ3RCLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBc0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxLQUFLLEVBQUU7U0FDaEUsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0NBQ0oifQ==