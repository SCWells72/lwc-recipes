import { LightningElement, wire } from 'lwc';
import {
    IsConsoleNavigation,
    EnclosingTabId,
    openSubtab
} from 'lightning/platformWorkspaceApi';

export default class WorkspaceAPIOpenSubtab extends LightningElement {
    @wire(IsConsoleNavigation) isConsoleNavigation: boolean;
    @wire(EnclosingTabId) enclosingTabId: string;

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
