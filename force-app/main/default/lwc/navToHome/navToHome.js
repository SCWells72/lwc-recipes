import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavToHome extends NavigationMixin(LightningElement) {
    navigateToHome() {
        // Use the built-in 'Navigate' method
        this[NavigationMixin.Navigate]({
            // Pass in pageReference
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2VG9Ib21lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2VG9Ib21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUN2QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdkQsTUFBTSxDQUFDLE9BQU8sT0FBTyxTQUFVLFNBQVEsZUFBZSxDQUFDLGdCQUFnQixDQUFDO0lBQ3BFLGNBQWM7UUFDVixxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQix3QkFBd0I7WUFDeEIsSUFBSSxFQUFFLHFCQUFxQjtZQUMzQixVQUFVLEVBQUU7Z0JBQ1IsUUFBUSxFQUFFLE1BQU07YUFDbkI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0oifQ==