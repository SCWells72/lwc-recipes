import { LightningElement } from 'lwc';
import LightningInput from 'lightning/input';

export default class MiscDomQuery extends LightningElement {
    selection: string;

    handleCheckboxChange() {
        // Query the DOM
        const checked = Array.from(
            this.template.querySelectorAll<LightningInput>('lightning-input')
        )
            // Filter to only checked items
            .filter((element) => element.checked)
            // Map to their labels
            .map((element) => element.label);
        this.selection = checked.join(', ');
    }
}
