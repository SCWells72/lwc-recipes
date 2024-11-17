import { LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { reduceErrors } from 'c/ldsUtils';
// Import message service features required for subscribing and the message channel
import { subscribe, MessageContext } from 'lightning/messageService';
import RECORD_SELECTED_CHANNEL from '@salesforce/messageChannel/Record_Selected__c';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PICTURE_FIELD from '@salesforce/schema/Contact.Picture__c';
const fields = [
    NAME_FIELD,
    TITLE_FIELD,
    PHONE_FIELD,
    EMAIL_FIELD,
    PICTURE_FIELD
];
// noinspection LocalVariableNamingConventionJS
export default class LmsSubscriberWebComponent extends LightningElement {
    subscription = null;
    recordId;
    Name;
    Title;
    Phone;
    Email;
    Picture__c;
    @wire(getRecord, { recordId: '$recordId', fields })
    wiredRecord({ error, data }) {
        if (error) {
            this.dispatchToast(error);
        }
        else if (data) {
            fields.forEach((item) => (this[item.fieldApiName] = getFieldValue(data, item)));
        }
    }
    // By using the MessageContext @wire adapter, unsubscribe will be called
    // implicitly during the component destruction lifecycle.
    @wire(MessageContext)
    messageContext;
    // Encapsulate logic for LMS subscribe.
    subscribeToMessageChannel() {
        this.subscription = subscribe(this.messageContext, RECORD_SELECTED_CHANNEL, (message) => this.handleMessage(message));
    }
    // Handler for message received by component
    handleMessage(message) {
        this.recordId = message.recordId;
    }
    // Standard lifecycle hooks used to sub/unsub to message channel
    connectedCallback() {
        this.subscribeToMessageChannel();
    }
    // Helper
    dispatchToast(error) {
        this.dispatchEvent(new ShowToastEvent({
            title: 'Error loading contact',
            message: reduceErrors(error).join(', '),
            variant: 'error'
        }));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG1zU3Vic2NyaWJlcldlYkNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxtc1N1YnNjcmliZXJXZWJDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRTFDLG1GQUFtRjtBQUNuRixPQUFPLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBc0IsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RixPQUFPLHVCQUF1QixNQUFNLCtDQUErQyxDQUFDO0FBRXBGLE9BQU8sVUFBVSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3pELE9BQU8sV0FBVyxNQUFNLGtDQUFrQyxDQUFDO0FBQzNELE9BQU8sV0FBVyxNQUFNLGtDQUFrQyxDQUFDO0FBQzNELE9BQU8sV0FBVyxNQUFNLGtDQUFrQyxDQUFDO0FBQzNELE9BQU8sYUFBYSxNQUFNLHVDQUF1QyxDQUFDO0FBRWxFLE1BQU0sTUFBTSxHQUFHO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7Q0FDaEIsQ0FBQztBQUVGLCtDQUErQztBQUMvQyxNQUFNLENBQUMsT0FBTyxPQUFPLHlCQUEwQixTQUFRLGdCQUFnQjtJQUNuRSxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLFFBQVEsQ0FBUztJQUVqQixJQUFJLENBQVM7SUFDYixLQUFLLENBQVM7SUFDZCxLQUFLLENBQVM7SUFDZCxLQUFLLENBQVM7SUFDZCxVQUFVLENBQVM7SUFFbkIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUNuRCxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1FBQ3ZCLElBQUksS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUM7YUFBTSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ2QsTUFBTSxDQUFDLE9BQU8sQ0FDVixDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FDbEUsQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0lBRUQsd0VBQXdFO0lBQ3hFLHlEQUF5RDtJQUN6RCxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDckIsY0FBYyxDQUFxQjtJQUVuQyx1Q0FBdUM7SUFDdkMseUJBQXlCO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUN6QixJQUFJLENBQUMsY0FBYyxFQUNuQix1QkFBdUIsRUFDdkIsQ0FBQyxPQUEyQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUMvRCxDQUFDO0lBQ04sQ0FBQztJQUVELDRDQUE0QztJQUM1QyxhQUFhLENBQUMsT0FBMkI7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxnRUFBZ0U7SUFDaEUsaUJBQWlCO1FBQ2IsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELFNBQVM7SUFDVCxhQUFhLENBQUMsS0FBVTtRQUNwQixJQUFJLENBQUMsYUFBYSxDQUNkLElBQUksY0FBYyxDQUFDO1lBQ2YsS0FBSyxFQUFFLHVCQUF1QjtZQUM5QixPQUFPLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdkMsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUNMLENBQUM7SUFDTixDQUFDO0NBQ0oifQ==