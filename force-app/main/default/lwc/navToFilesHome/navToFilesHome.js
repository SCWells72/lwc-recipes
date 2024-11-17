import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavToFilesHome extends NavigationMixin(LightningElement) {
    navigateToFilesHome() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2VG9GaWxlc0hvbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuYXZUb0ZpbGVzSG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDdkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE1BQU0sQ0FBQyxPQUFPLE9BQU8sY0FBZSxTQUFRLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN6RSxtQkFBbUI7UUFDZixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLElBQUksRUFBRSxzQkFBc0I7WUFDNUIsVUFBVSxFQUFFO2dCQUNSLGFBQWEsRUFBRSxpQkFBaUI7Z0JBQ2hDLFVBQVUsRUFBRSxNQUFNO2FBQ3JCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKIn0=