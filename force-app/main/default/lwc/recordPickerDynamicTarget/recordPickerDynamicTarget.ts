import { LightningElement } from 'lwc';
import LightningRecordPicker from 'lightning/recordPicker';
import LightningCombobox from 'lightning/combobox';
import { LightningSelectOption } from 'lightning/select';

// As of today, `lightning-record-picker` only supports a single target.
// This sample component shows how you can turn `lightning-record-picker` into
// a multi-target record picker, where the user can select the target object
// before searching.
export default class RecordPickerDynamicTarget extends LightningElement {
    targetObjects: LightningSelectOption[] = [
        {
            label: 'Account',
            value: 'Account'
        },
        {
            label: 'Contact',
            value: 'Contact'
        }
    ];
    selectedTarget = 'Account';
    currentSelectedRecordId = null;

    displayInfos = {
        Account: {
            additionalFields: ['Type']
        },
        Contact: {
            additionalFields: ['Phone']
        }
    };

    matchingInfos = {
        Account: {
            additionalFields: [{ fieldPath: 'Type' }]
        },
        Contact: {
            additionalFields: [{ fieldPath: 'Phone' }]
        }
    };

    get displayInfo() {
        return this.displayInfos[this.selectedTarget];
    }

    get matchingInfo() {
        return this.matchingInfos[this.selectedTarget];
    }

    get showTargetSelector() {
        return this.currentSelectedRecordId === null;
    }

    handleTargetSelection(event: CustomEvent<LightningCombobox>) {
        // Prevent lightning-combobox `change` event from bubbling
        event.stopPropagation();

        this.selectedTarget = (<LightningCombobox>event.target).value;
        (<LightningRecordPicker>this.refs.recordPicker).clearSelection();
    }

    handleRecordSelect(event: CustomEvent<LightningRecordPicker>) {
        this.currentSelectedRecordId = event.detail.recordId;
    }
}
