import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import { deleteRecord } from 'lightning/uiRecordApi';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import { reduceErrors } from 'c/ldsUtils';
export default class LdsDeleteRecord extends LightningElement {
    accounts;
    error;
    /** Wired Apex result so it can be refreshed programmatically */
    wiredAccountsResult;
    @wire(getAccountList)
    wiredAccounts(result) {
        this.wiredAccountsResult = result;
        if (result.data) {
            this.accounts = result.data;
            this.error = undefined;
        }
        else if (result.error) {
            this.error = result.error;
            this.accounts = undefined;
        }
    }
    async deleteAccount(event) {
        // @ts-expect-error Not sure how "data-recordid" should be interpreted
        const recordId = event.target.dataset.recordid;
        try {
            await deleteRecord(recordId);
            this.dispatchEvent(new ShowToastEvent({
                title: 'Success',
                message: 'Account deleted',
                variant: 'success'
            }));
            await refreshApex(this.wiredAccountsResult);
        }
        catch (error) {
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error deleting record',
                message: reduceErrors(error).join(', '),
                variant: 'error'
            }));
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGRzRGVsZXRlUmVjb3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGRzRGVsZXRlUmVjb3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxjQUFjLE1BQU0sbURBQW1ELENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUUxQyxNQUFNLENBQUMsT0FBTyxPQUFPLGVBQWdCLFNBQVEsZ0JBQWdCO0lBQ3pELFFBQVEsQ0FBWTtJQUNwQixLQUFLLENBQU07SUFFWCxnRUFBZ0U7SUFDaEUsbUJBQW1CLENBQXdCO0lBRTNDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUNyQixhQUFhLENBQUMsTUFBNkI7UUFDdkMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQztRQUNsQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUMzQixDQUFDO2FBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQzlCLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFpQjtRQUNqQyxzRUFBc0U7UUFDdEUsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBRS9DLElBQUksQ0FBQztZQUNELE1BQU0sWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQ2QsSUFBSSxjQUFjLENBQUM7Z0JBQ2YsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLE9BQU8sRUFBRSxTQUFTO2FBQ3JCLENBQUMsQ0FDTCxDQUFDO1lBQ0YsTUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsYUFBYSxDQUNkLElBQUksY0FBYyxDQUFDO2dCQUNmLEtBQUssRUFBRSx1QkFBdUI7Z0JBQzlCLE9BQU8sRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDdkMsT0FBTyxFQUFFLE9BQU87YUFDbkIsQ0FBQyxDQUNMLENBQUM7UUFDTixDQUFDO0lBQ0wsQ0FBQztDQUNKIn0=