import { LightningElement, wire } from 'lwc';
import { IsConsoleNavigation, EnclosingTabId, openSubtab } from 'lightning/platformWorkspaceApi';
export default class WorkspaceAPIOpenSubtab extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleNavigation;
    @wire(EnclosingTabId)
    enclosingTabId;
    findEnclosingTabAndOpenSubtab() {
        // Ensure that we're in a console app and that we have a tab open
        if (!this.isConsoleNavigation || !this.enclosingTabId) {
            return;
        }
        // Open sub tab
        // noinspection JSIgnoredPromiseFromCall
        openSubtab(this.enclosingTabId, {
            pageReference: {
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Account',
                    actionName: 'list'
                }
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlQVBJT3BlblN1YnRhYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmtzcGFjZUFQSU9wZW5TdWJ0YWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLEVBQ0gsbUJBQW1CLEVBQ25CLGNBQWMsRUFDZCxVQUFVLEVBQ2IsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4QyxNQUFNLENBQUMsT0FBTyxPQUFPLHNCQUF1QixTQUFRLGdCQUFnQjtJQUNoRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUFDLG1CQUFtQixDQUFVO0lBQ3hELENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUFDLGNBQWMsQ0FBUztJQUU3Qyw2QkFBNkI7UUFDekIsaUVBQWlFO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDcEQsT0FBTztRQUNYLENBQUM7UUFFRCxlQUFlO1FBQ2Ysd0NBQXdDO1FBQ3hDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzVCLGFBQWEsRUFBRTtnQkFDWCxJQUFJLEVBQUUsc0JBQXNCO2dCQUM1QixVQUFVLEVBQUU7b0JBQ1IsYUFBYSxFQUFFLFNBQVM7b0JBQ3hCLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjthQUNKO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKIn0=