import { LightningElement, wire } from 'lwc';
import { IsConsoleNavigation, openTab } from 'lightning/platformWorkspaceApi';
export default class WorkspaceAPIOpenTab extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleNavigation;
    async openTab() {
        // Ensure that we're in a console app
        if (!this.isConsoleNavigation) {
            return;
        }
        // Open contact list a new tab
        await openTab({
            pageReference: {
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Contact',
                    actionName: 'list'
                }
            },
            focus: true,
            label: 'Contacts List'
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlQVBJT3BlblRhYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmtzcGFjZUFQSU9wZW5UYWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFOUUsTUFBTSxDQUFDLE9BQU8sT0FBTyxtQkFBb0IsU0FBUSxnQkFBZ0I7SUFDN0QsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFBQyxtQkFBbUIsQ0FBVTtJQUV4RCxLQUFLLENBQUMsT0FBTztRQUNULHFDQUFxQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDNUIsT0FBTztRQUNYLENBQUM7UUFFRCw4QkFBOEI7UUFDOUIsTUFBTSxPQUFPLENBQUM7WUFDVixhQUFhLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsVUFBVSxFQUFFO29CQUNSLGFBQWEsRUFBRSxTQUFTO29CQUN4QixVQUFVLEVBQUUsTUFBTTtpQkFDckI7YUFDSjtZQUNELEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLGVBQWU7U0FDekIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKIn0=