import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import LightningInput from 'lightning/input';
import LightningCombobox from 'lightning/combobox';

export default class MiscToastNotification extends LightningElement {
    titleText = 'Sample Title';
    messageText = 'Sample Message';
    variant = 'error';
    variantOptions = [
        { label: 'error', value: 'error' },
        { label: 'warning', value: 'warning' },
        { label: 'success', value: 'success' },
        { label: 'info', value: 'info' }
    ];

    titleChange(event: CustomEvent<LightningInput>) {
        this.titleText = (<LightningInput>event.target).value;
    }

    messageChange(event: CustomEvent<LightningInput>) {
        this.messageText = (<LightningInput>event.target).value;
    }

    variantChange(event: CustomEvent<LightningCombobox>) {
        this.variant = (<LightningCombobox>event.target).value;
    }

    showNotification() {
        const evt = new ShowToastEvent({
            title: this.titleText,
            message: this.messageText,
            variant: this.variant
        });
        this.dispatchEvent(evt);
    }
}
