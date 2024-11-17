import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getSingleAccount from '@salesforce/apex/AccountController.getSingleAccount';
export default class NavToRelatedList extends NavigationMixin(LightningElement) {
    @wire(getSingleAccount)
    account;
    navigateToRelatedList() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: this.account.data.Id,
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2VG9SZWxhdGVkTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdlRvUmVsYXRlZExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxnQkFBZ0IsTUFBTSxxREFBcUQsQ0FBQztBQUVuRixNQUFNLENBQUMsT0FBTyxPQUFPLGdCQUFpQixTQUFRLGVBQWUsQ0FDekQsZ0JBQWdCLENBQ25CO0lBQ0csQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFBQyxPQUFPLENBQXNCO0lBRXJELHFCQUFxQjtRQUNqQixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLElBQUksRUFBRSxrQ0FBa0M7WUFDeEMsVUFBVSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM5QixhQUFhLEVBQUUsU0FBUztnQkFDeEIsbUJBQW1CLEVBQUUsVUFBVTtnQkFDL0IsVUFBVSxFQUFFLE1BQU07YUFDckI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0oifQ==