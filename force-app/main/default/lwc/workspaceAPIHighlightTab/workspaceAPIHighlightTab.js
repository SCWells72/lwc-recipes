import { LightningElement, wire } from 'lwc';
import { IsConsoleNavigation, getFocusedTabInfo, setTabHighlighted } from 'lightning/platformWorkspaceApi';
export default class WorkspaceAPIHighlightTab extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleNavigation;
    async highlightTab(event) {
        // Ensure that we're in a console app
        if (!this.isConsoleNavigation) {
            return;
        }
        // Toggle highlight for current tab
        const highlighted = event.detail.checked;
        const { tabId } = await getFocusedTabInfo();
        await setTabHighlighted(tabId, highlighted, {
            pulse: true,
            state: 'success'
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlQVBJSGlnaGxpZ2h0VGFiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid29ya3NwYWNlQVBJSGlnaGxpZ2h0VGFiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDN0MsT0FBTyxFQUNILG1CQUFtQixFQUNuQixpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ3BCLE1BQU0sZ0NBQWdDLENBQUM7QUFHeEMsTUFBTSxDQUFDLE9BQU8sT0FBTyx3QkFBeUIsU0FBUSxnQkFBZ0I7SUFDbEUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFBQyxtQkFBbUIsQ0FBVTtJQUV4RCxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQWtDO1FBQ2pELHFDQUFxQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDNUIsT0FBTztRQUNYLENBQUM7UUFFRCxtQ0FBbUM7UUFDbkMsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDekMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0saUJBQWlCLEVBQUUsQ0FBQztRQUM1QyxNQUFNLGlCQUFpQixDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUU7WUFDeEMsS0FBSyxFQUFFLElBQUk7WUFDWCxLQUFLLEVBQUUsU0FBUztTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0oifQ==