import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
// Import message service features required for publishing and the message channel
import { publish, MessageContext } from 'lightning/messageService';
import RECORD_SELECTED_CHANNEL from '@salesforce/messageChannel/Record_Selected__c';
export default class LmsPublisherWebComponent extends LightningElement {
    @wire(getContactList)
    contacts;
    @wire(MessageContext)
    messageContext;
    // Respond to UI event by publishing message
    handleContactSelect(event) {
        // @ts-expect-error Not sure how to get this event type information
        const payload = { recordId: event.target.contact.Id };
        publish(this.messageContext, RECORD_SELECTED_CHANNEL, payload);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG1zUHVibGlzaGVyV2ViQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG1zUHVibGlzaGVyV2ViQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDN0MsT0FBTyxjQUFjLE1BQU0sbURBQW1ELENBQUM7QUFFL0Usa0ZBQWtGO0FBQ2xGLE9BQU8sRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLDBCQUEwQixDQUFDO0FBQ3ZGLE9BQU8sdUJBQXVCLE1BQU0sK0NBQStDLENBQUM7QUFFcEYsTUFBTSxDQUFDLE9BQU8sT0FBTyx3QkFBeUIsU0FBUSxnQkFBZ0I7SUFDbEUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3JCLFFBQVEsQ0FBd0I7SUFFaEMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3JCLGNBQWMsQ0FBcUI7SUFFbkMsNENBQTRDO0lBQzVDLG1CQUFtQixDQUFDLEtBQWtDO1FBQ2xELG1FQUFtRTtRQUNuRSxNQUFNLE9BQU8sR0FBRyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUV0RCxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSx1QkFBdUIsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBQ0oifQ==