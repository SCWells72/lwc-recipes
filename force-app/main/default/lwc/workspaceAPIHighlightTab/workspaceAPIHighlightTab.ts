import { LightningElement, wire } from 'lwc';
import {
    IsConsoleNavigation,
    getFocusedTabInfo,
    setTabHighlighted
} from 'lightning/platformWorkspaceApi';
import LightningInput from 'lightning/input';

export default class WorkspaceAPIHighlightTab extends LightningElement {
    @wire(IsConsoleNavigation) isConsoleNavigation: boolean;

    async highlightTab(event: CustomEvent<LightningInput>) {
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
