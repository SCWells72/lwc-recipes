import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getSingleContact from '@salesforce/apex/ContactController.getSingleContact';
export default class NavToRecord extends NavigationMixin(LightningElement) {
    @wire(getSingleContact)
    contact;
    navigateToContact() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.contact.data.Id,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        });
    }
    navigateToEdit() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.contact.data.Id,
                objectApiName: 'Contact',
                actionName: 'edit'
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2VG9SZWNvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXZUb1JlY29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLGdCQUFnQixNQUFNLHFEQUFxRCxDQUFDO0FBRW5GLE1BQU0sQ0FBQyxPQUFPLE9BQU8sV0FBWSxTQUFRLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN0RSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUFDLE9BQU8sQ0FBc0I7SUFFckQsaUJBQWlCO1FBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLFVBQVUsRUFBRTtnQkFDUixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDOUIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLFVBQVUsRUFBRSxNQUFNO2FBQ3JCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGNBQWM7UUFDVixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLElBQUksRUFBRSxzQkFBc0I7WUFDNUIsVUFBVSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM5QixhQUFhLEVBQUUsU0FBUztnQkFDeEIsVUFBVSxFQUFFLE1BQU07YUFDckI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0oifQ==