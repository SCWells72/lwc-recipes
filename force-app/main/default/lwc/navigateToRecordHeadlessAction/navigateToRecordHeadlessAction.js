import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToRecordHeadlessAction extends NavigationMixin(LightningElement) {
    @api
    invoke() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'home'
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGVUb1JlY29yZEhlYWRsZXNzQWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGVUb1JlY29yZEhlYWRsZXNzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXZELE1BQU0sQ0FBQyxPQUFPLE9BQU8sOEJBQStCLFNBQVEsZUFBZSxDQUN2RSxnQkFBZ0IsQ0FDbkI7SUFDRyxDQUFDLEdBQUc7SUFBQyxNQUFNO1FBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLFVBQVUsRUFBRTtnQkFDUixhQUFhLEVBQUUsU0FBUztnQkFDeEIsVUFBVSxFQUFFLE1BQU07YUFDckI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0oifQ==