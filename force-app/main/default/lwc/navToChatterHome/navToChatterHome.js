import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavToChatterHome extends NavigationMixin(LightningElement) {
    navigateToChatter() {
        // Use the built-in 'Navigate' method
        this[NavigationMixin.Navigate]({
            // Pass in pageReference
            type: 'standard__namedPage',
            attributes: {
                pageName: 'chatter'
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2VG9DaGF0dGVySG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdlRvQ2hhdHRlckhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RCxNQUFNLENBQUMsT0FBTyxPQUFPLGdCQUFpQixTQUFRLGVBQWUsQ0FDekQsZ0JBQWdCLENBQ25CO0lBQ0csaUJBQWlCO1FBQ2IscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0Isd0JBQXdCO1lBQ3hCLElBQUksRUFBRSxxQkFBcUI7WUFDM0IsVUFBVSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxTQUFTO2FBQ3RCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKIn0=