import { LightningElement, wire } from 'lwc';
import { IsConsoleNavigation, getFocusedTabInfo, refreshTab } from 'lightning/platformWorkspaceApi';
export default class WorkspaceAPIRefreshTab extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleNavigation;
    async refreshTab() {
        // Ensure that we're in a console app
        if (!this.isConsoleNavigation) {
            return;
        }
        // Refresh current tab
        const { tabId } = await getFocusedTabInfo();
        await refreshTab(tabId, {
            includeAllSubtabs: true
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlQVBJUmVmcmVzaFRhYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmtzcGFjZUFQSVJlZnJlc2hUYWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLEVBQ0gsbUJBQW1CLEVBQ25CLGlCQUFpQixFQUNqQixVQUFVLEVBQ2IsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4QyxNQUFNLENBQUMsT0FBTyxPQUFPLHNCQUF1QixTQUFRLGdCQUFnQjtJQUNoRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUFDLG1CQUFtQixDQUFVO0lBRXhELEtBQUssQ0FBQyxVQUFVO1FBQ1oscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUM1QixPQUFPO1FBQ1gsQ0FBQztRQUVELHNCQUFzQjtRQUN0QixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxpQkFBaUIsRUFBRSxDQUFDO1FBQzVDLE1BQU0sVUFBVSxDQUFDLEtBQUssRUFBRTtZQUNwQixpQkFBaUIsRUFBRSxJQUFJO1NBQzFCLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSiJ9