import { LightningElement, wire } from 'lwc';
import { disableTabClose, IsConsoleNavigation, getFocusedTabInfo } from 'lightning/platformWorkspaceApi';
export default class WorkspaceAPIDisableTabClose extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleNavigation;
    async disableTabClose(event) {
        // Ensure that we're in a console app
        if (!this.isConsoleNavigation) {
            return;
        }
        // Toggle the ability to close the tab
        const close = event.detail.checked;
        const { tabId } = await getFocusedTabInfo();
        await disableTabClose(tabId, close);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlQVBJRGlzYWJsZVRhYkNsb3NlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya3NwYWNlQVBJRGlzYWJsZVRhYkNsb3NlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDN0MsT0FBTyxFQUNILGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ3BCLE1BQU0sZ0NBQWdDLENBQUM7QUFHeEMsTUFBTSxDQUFDLE9BQU8sT0FBTywyQkFBNEIsU0FBUSxnQkFBZ0I7SUFDckUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFBQyxtQkFBbUIsQ0FBVTtJQUV4RCxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQWtDO1FBQ3BELHFDQUFxQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDNUIsT0FBTztRQUNYLENBQUM7UUFFRCxzQ0FBc0M7UUFDdEMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDbkMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0saUJBQWlCLEVBQUUsQ0FBQztRQUM1QyxNQUFNLGVBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNKIn0=