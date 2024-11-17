import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavToHelloTab extends NavigationMixin(LightningElement) {
    navigateToHelloTab() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Hello'
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2VG9IZWxsb1RhYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdlRvSGVsbG9UYWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RCxNQUFNLENBQUMsT0FBTyxPQUFPLGFBQWMsU0FBUSxlQUFlLENBQUMsZ0JBQWdCLENBQUM7SUFDeEUsa0JBQWtCO1FBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixJQUFJLEVBQUUsdUJBQXVCO1lBQzdCLFVBQVUsRUFBRTtnQkFDUixPQUFPLEVBQUUsT0FBTzthQUNuQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSiJ9