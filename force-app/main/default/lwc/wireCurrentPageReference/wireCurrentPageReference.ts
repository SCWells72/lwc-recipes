import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { PageReference } from 'lightning/uiAppsApi';

export default class WireCurrentPageReference extends LightningElement {
    @wire(CurrentPageReference) pageRef: PageReference;

    get currentPageReference() {
        return this.pageRef ? JSON.stringify(this.pageRef, null, 2) : '';
    }
}
