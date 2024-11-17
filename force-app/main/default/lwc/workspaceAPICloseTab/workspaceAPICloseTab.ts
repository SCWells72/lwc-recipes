import { LightningElement, wire } from 'lwc';
import {
    closeTab,
    IsConsoleNavigation,
    getFocusedTabInfo
} from 'lightning/platformWorkspaceApi';

export default class WorkspaceAPICloseTab extends LightningElement {
    @wire(IsConsoleNavigation) isConsoleNavigation: boolean;

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
