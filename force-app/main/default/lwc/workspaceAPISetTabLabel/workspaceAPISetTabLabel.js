import { LightningElement, wire } from 'lwc';
import { IsConsoleNavigation, getFocusedTabInfo, setTabLabel } from 'lightning/platformWorkspaceApi';
const TAB_LABEL = 'Awesome Label';
export default class WorkspaceAPISetTabLabel extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleNavigation;
    async setTabLabel() {
        // Ensure that we're in a console app
        if (!this.isConsoleNavigation) {
            return;
        }
        // Change current tab label
        const { tabId } = await getFocusedTabInfo();
        await setTabLabel(tabId, TAB_LABEL);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlQVBJU2V0VGFiTGFiZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3b3Jrc3BhY2VBUElTZXRUYWJMYWJlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQzdDLE9BQU8sRUFDSCxtQkFBbUIsRUFDbkIsaUJBQWlCLEVBQ2pCLFdBQVcsRUFDZCxNQUFNLGdDQUFnQyxDQUFDO0FBRXhDLE1BQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQztBQUVsQyxNQUFNLENBQUMsT0FBTyxPQUFPLHVCQUF3QixTQUFRLGdCQUFnQjtJQUNqRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztJQUFDLG1CQUFtQixDQUFVO0lBRXhELEtBQUssQ0FBQyxXQUFXO1FBQ2IscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUM1QixPQUFPO1FBQ1gsQ0FBQztRQUVELDJCQUEyQjtRQUMzQixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxpQkFBaUIsRUFBRSxDQUFDO1FBQzVDLE1BQU0sV0FBVyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0oifQ==