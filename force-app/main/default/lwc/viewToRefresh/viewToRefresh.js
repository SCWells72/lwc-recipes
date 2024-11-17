import { LightningElement, wire } from 'lwc';
import getTotalNumber from '@salesforce/apex/AccountController.getTotalNumber';
import { registerRefreshHandler, unregisterRefreshHandler } from 'lightning/refresh';
import { refreshApex } from '@salesforce/apex';
export default class ViewToRefresh extends LightningElement {
    refreshHandlerID;
    @wire(getTotalNumber)
    numOfAccounts;
    connectedCallback() {
        this.refreshHandlerID = registerRefreshHandler(this, this.refreshHandler);
    }
    disconnectedCallback() {
        unregisterRefreshHandler(this.refreshHandlerID);
    }
    async refreshHandler() {
        await refreshApex(this.numOfAccounts);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld1RvUmVmcmVzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXdUb1JlZnJlc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLGNBQWMsTUFBTSxtREFBbUQsQ0FBQztBQUMvRSxPQUFPLEVBQ0gsc0JBQXNCLEVBQ3RCLHdCQUF3QixFQUMzQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxNQUFNLENBQUMsT0FBTyxPQUFPLGFBQWMsU0FBUSxnQkFBZ0I7SUFDdkQsZ0JBQWdCLENBQVM7SUFFekIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3JCLGFBQWEsQ0FBcUI7SUFFbEMsaUJBQWlCO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLHNCQUFzQixDQUMxQyxJQUFJLEVBQ0osSUFBSSxDQUFDLGNBQWMsQ0FDdEIsQ0FBQztJQUNOLENBQUM7SUFFRCxvQkFBb0I7UUFDaEIsd0JBQXdCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELEtBQUssQ0FBQyxjQUFjO1FBQ2hCLE1BQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0oifQ==