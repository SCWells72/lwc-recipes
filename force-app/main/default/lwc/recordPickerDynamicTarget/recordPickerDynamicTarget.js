import { LightningElement } from 'lwc';
// As of today, `lightning-record-picker` only supports a single target.
// This sample component shows how you can turn `lightning-record-picker` into
// a multi-target record picker, where the user can select the target object
// before searching.
export default class RecordPickerDynamicTarget extends LightningElement {
    targetObjects = [
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
    handleTargetSelection(event) {
        // Prevent lightning-combobox `change` event from bubbling
        event.stopPropagation();
        this.selectedTarget = event.target.value;
        this.refs.recordPicker.clearSelection();
    }
    handleRecordSelect(event) {
        this.currentSelectedRecordId = event.detail.recordId;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb3JkUGlja2VyRHluYW1pY1RhcmdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlY29yZFBpY2tlckR5bmFtaWNUYXJnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBSXZDLHdFQUF3RTtBQUN4RSw4RUFBOEU7QUFDOUUsNEVBQTRFO0FBQzVFLG9CQUFvQjtBQUNwQixNQUFNLENBQUMsT0FBTyxPQUFPLHlCQUEwQixTQUFRLGdCQUFnQjtJQUNuRSxhQUFhLEdBQThCO1FBQ3ZDO1lBQ0ksS0FBSyxFQUFFLFNBQVM7WUFDaEIsS0FBSyxFQUFFLFNBQVM7U0FDbkI7UUFDRDtZQUNJLEtBQUssRUFBRSxTQUFTO1lBQ2hCLEtBQUssRUFBRSxTQUFTO1NBQ25CO0tBQ0osQ0FBQztJQUNGLGNBQWMsR0FBRyxTQUFTLENBQUM7SUFDM0IsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0lBRS9CLFlBQVksR0FBRztRQUNYLE9BQU8sRUFBRTtZQUNMLGdCQUFnQixFQUFFLENBQUMsTUFBTSxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLENBQUM7U0FDOUI7S0FDSixDQUFDO0lBRUYsYUFBYSxHQUFHO1FBQ1osT0FBTyxFQUFFO1lBQ0wsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQztTQUM1QztRQUNELE9BQU8sRUFBRTtZQUNMLGdCQUFnQixFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUM7U0FDN0M7S0FDSixDQUFDO0lBRUYsSUFBSSxXQUFXO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsSUFBSSxrQkFBa0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLEtBQUssSUFBSSxDQUFDO0lBQ2pELENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxLQUFxQztRQUN2RCwwREFBMEQ7UUFDMUQsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxjQUFjLEdBQXVCLEtBQUssQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3JFLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUF5QztRQUN4RCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDekQsQ0FBQztDQUNKIn0=