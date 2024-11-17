import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavToNewRecord extends NavigationMixin(LightningElement) {
    navigateToNewContact() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2VG9OZXdSZWNvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXZUb05ld1JlY29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDdkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXZELE1BQU0sQ0FBQyxPQUFPLE9BQU8sY0FBZSxTQUFRLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN6RSxvQkFBb0I7UUFDaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLFVBQVUsRUFBRTtnQkFDUixhQUFhLEVBQUUsU0FBUztnQkFDeEIsVUFBVSxFQUFFLEtBQUs7YUFDcEI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0oifQ==