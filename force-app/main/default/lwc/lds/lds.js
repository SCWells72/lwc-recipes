import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getSingleContact from '@salesforce/apex/ContactController.getSingleContact';
// noinspection JSClassNamingConvention
export default class Lds extends NavigationMixin(LightningElement) {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sZ0JBQWdCLE1BQU0scURBQXFELENBQUM7QUFFbkYsdUNBQXVDO0FBQ3ZDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sR0FBSSxTQUFRLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5RCxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUFDLE9BQU8sQ0FBc0I7SUFFckQsaUJBQWlCO1FBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLFVBQVUsRUFBRTtnQkFDUixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDOUIsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLFVBQVUsRUFBRSxNQUFNO2FBQ3JCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKIn0=