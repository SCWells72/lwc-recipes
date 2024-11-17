import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { IsConsoleNavigation } from 'lightning/platformWorkspaceApi';
export default class WorkspaceApi extends NavigationMixin(LightningElement) {
    @wire(IsConsoleNavigation)
    isConsoleNavigation;
    navigateToWorkspaceAPIExamples() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Workspace_API'
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlQVBJLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya3NwYWNlQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXJFLE1BQU0sQ0FBQyxPQUFPLE9BQU8sWUFBYSxTQUFRLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUN2RSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUMxQixtQkFBbUIsQ0FBVTtJQUU3Qiw4QkFBOEI7UUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQixJQUFJLEVBQUUsdUJBQXVCO1lBQzdCLFVBQVUsRUFBRTtnQkFDUixPQUFPLEVBQUUsZUFBZTthQUMzQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSiJ9