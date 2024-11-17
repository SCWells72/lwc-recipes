import { LightningElement, wire } from 'lwc';
import { focusTab, IsConsoleNavigation, getFocusedTabInfo, getAllTabInfo } from 'lightning/platformWorkspaceApi';
export default class WorkspaceAPIFocusTab extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleNavigation;
    async focusNextTab() {
        // Ensure that we're in a console app
        if (!this.isConsoleNavigation) {
            return;
        }
        // Get current tab and figure out which tab is next
        const { tabId } = await getFocusedTabInfo();
        const allTabs = await getAllTabInfo();
        const selectedTabIndex = allTabs.findIndex((possibleNextTab) => possibleNextTab.tabId === tabId);
        const nextTabId = allTabs[selectedTabIndex + 1].tabId;
        // Focus on next tab
        await focusTab(nextTabId);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlQVBJRm9jdXNUYWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3b3Jrc3BhY2VBUElGb2N1c1RhYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzdDLE9BQU8sRUFDSCxRQUFRLEVBQ1IsbUJBQW1CLEVBQ25CLGlCQUFpQixFQUNqQixhQUFhLEVBQ2hCLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEMsTUFBTSxDQUFDLE9BQU8sT0FBTyxvQkFBcUIsU0FBUSxnQkFBZ0I7SUFDOUQsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFBQyxtQkFBbUIsQ0FBVTtJQUV4RCxLQUFLLENBQUMsWUFBWTtRQUNkLHFDQUFxQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDNUIsT0FBTztRQUNYLENBQUM7UUFFRCxtREFBbUQ7UUFDbkQsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0saUJBQWlCLEVBQUUsQ0FBQztRQUM1QyxNQUFNLE9BQU8sR0FBRyxNQUFNLGFBQWEsRUFBRSxDQUFDO1FBQ3RDLE1BQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FDdEMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUN2RCxDQUFDO1FBQ0YsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUV0RCxvQkFBb0I7UUFDcEIsTUFBTSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKIn0=