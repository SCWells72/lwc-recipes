import { LightningElement, wire } from 'lwc';
import { IsConsoleNavigation, getFocusedTabInfo, setTabIcon } from 'lightning/platformWorkspaceApi';
const TAB_ICON = 'utility:animal_and_nature';
const TAB_ICON_ALT_TEXT = 'Animal and Nature';
export default class WorkspaceAPISetTabIcon extends LightningElement {
    @wire(IsConsoleNavigation)
    isConsoleNavigation;
    async setTabIcon() {
        // Ensure that we're in a console app
        if (!this.isConsoleNavigation) {
            return;
        }
        // Change current tab icon
        const { tabId } = await getFocusedTabInfo();
        await setTabIcon(tabId, TAB_ICON, {
            iconAlt: TAB_ICON_ALT_TEXT
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlQVBJU2V0VGFiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmtzcGFjZUFQSVNldFRhYkljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLEVBQ0gsbUJBQW1CLEVBQ25CLGlCQUFpQixFQUNqQixVQUFVLEVBQ2IsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4QyxNQUFNLFFBQVEsR0FBRywyQkFBMkIsQ0FBQztBQUM3QyxNQUFNLGlCQUFpQixHQUFHLG1CQUFtQixDQUFDO0FBRTlDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWdCO0lBQ2hFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQUMsbUJBQW1CLENBQVU7SUFFeEQsS0FBSyxDQUFDLFVBQVU7UUFDWixxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzVCLE9BQU87UUFDWCxDQUFDO1FBRUQsMEJBQTBCO1FBQzFCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLGlCQUFpQixFQUFFLENBQUM7UUFDNUMsTUFBTSxVQUFVLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRTtZQUM5QixPQUFPLEVBQUUsaUJBQWlCO1NBQzdCLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSiJ9