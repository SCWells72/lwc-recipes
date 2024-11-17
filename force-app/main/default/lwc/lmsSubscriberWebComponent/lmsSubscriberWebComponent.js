import { LightningElement, wire } from 'lwc';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { reduceErrors } from 'c/ldsUtils';
// Import message service features required for subscribing and the message channel
import { MessageContext, subscribe } from 'lightning/messageService';
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
    wiredRecord(result) {
        if (result.error) {
            this.dispatchToast(result.error);
        }
        else if (result.data) {
            fields.forEach((item) => (this[item.fieldApiName] = getFieldValue(result.data, item)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG1zU3Vic2NyaWJlcldlYkNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxtc1N1YnNjcmliZXJXZWJDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBd0IsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUUxQyxtRkFBbUY7QUFDbkYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekYsT0FBTyx1QkFBdUIsTUFBTSwrQ0FBK0MsQ0FBQztBQUVwRixPQUFPLFVBQVUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6RCxPQUFPLFdBQVcsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRCxPQUFPLFdBQVcsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRCxPQUFPLFdBQVcsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRCxPQUFPLGFBQWEsTUFBTSx1Q0FBdUMsQ0FBQztBQUVsRSxNQUFNLE1BQU0sR0FBRztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0NBQ2hCLENBQUM7QUFFRiwrQ0FBK0M7QUFDL0MsTUFBTSxDQUFDLE9BQU8sT0FBTyx5QkFBMEIsU0FBUSxnQkFBZ0I7SUFDbkUsWUFBWSxHQUFHLElBQUksQ0FBQztJQUNwQixRQUFRLENBQVM7SUFFakIsSUFBSSxDQUFTO0lBQ2IsS0FBSyxDQUFTO0lBQ2QsS0FBSyxDQUFTO0lBQ2QsS0FBSyxDQUFTO0lBQ2QsVUFBVSxDQUFTO0lBRW5CLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDbkQsV0FBVyxDQUFDLE1BQXdDO1FBQ2hELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsQ0FBQzthQUFNLElBQUksTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQ1YsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUN6RSxDQUFDO1FBQ04sQ0FBQztJQUNMLENBQUM7SUFFRCx3RUFBd0U7SUFDeEUseURBQXlEO0lBQ3pELENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUNyQixjQUFjLENBQXFCO0lBRW5DLHVDQUF1QztJQUN2Qyx5QkFBeUI7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQ3pCLElBQUksQ0FBQyxjQUFjLEVBQ25CLHVCQUF1QixFQUN2QixDQUFDLE9BQTJCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQy9ELENBQUM7SUFDTixDQUFDO0lBRUQsNENBQTRDO0lBQzVDLGFBQWEsQ0FBQyxPQUEyQjtRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVELGdFQUFnRTtJQUNoRSxpQkFBaUI7UUFDYixJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsU0FBUztJQUNULGFBQWEsQ0FBQyxLQUFVO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQ2QsSUFBSSxjQUFjLENBQUM7WUFDZixLQUFLLEVBQUUsdUJBQXVCO1lBQzlCLE9BQU8sRUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN2QyxPQUFPLEVBQUUsT0FBTztTQUNuQixDQUFDLENBQ0wsQ0FBQztJQUNOLENBQUM7Q0FDSiJ9