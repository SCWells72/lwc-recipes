import { LightningElement, wire } from 'lwc';
import { closeTab, IsConsoleNavigation, getFocusedTabInfo } from 'lightning/platformWorkspaceApi';
export default class WorkspaceAPICloseTab extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleNavigation;
    async closeTab() {
        // Ensure that we're in a console app
        if (!this.isConsoleNavigation) {
            return;
        }
        // Close current tab
        const { tabId } = await getFocusedTabInfo();
        await closeTab(tabId);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlQVBJQ2xvc2VUYWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3b3Jrc3BhY2VBUElDbG9zZVRhYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzdDLE9BQU8sRUFDSCxRQUFRLEVBQ1IsbUJBQW1CLEVBQ25CLGlCQUFpQixFQUNwQixNQUFNLGdDQUFnQyxDQUFDO0FBRXhDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sb0JBQXFCLFNBQVEsZ0JBQWdCO0lBQzlELENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQUMsbUJBQW1CLENBQVU7SUFFeEQsS0FBSyxDQUFDLFFBQVE7UUFDVixxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzVCLE9BQU87UUFDWCxDQUFDO1FBRUQsb0JBQW9CO1FBQ3BCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLGlCQUFpQixFQUFFLENBQUM7UUFDNUMsTUFBTSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNKIn0=