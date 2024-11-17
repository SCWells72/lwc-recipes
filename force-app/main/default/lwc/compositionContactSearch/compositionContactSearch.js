import { LightningElement } from 'lwc';
import findContacts from '@salesforce/apex/ContactController.findContacts';
/** The delay used when debouncing event handlers before invoking Apex. */
const DELAY = 350;
export default class CompositionContactSearch extends LightningElement {
    contacts;
    error;
    handleKeyChange(event) {
        // Debouncing this method: Do not actually invoke the Apex call as long as this function is
        // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
        // @ts-expect-error Where is "delayTimeout" defined?
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        // @ts-expect-error Where is "delayTimeout" defined?
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeout = setTimeout(async () => {
            try {
                this.contacts = await findContacts({ searchKey });
                this.error = undefined;
            }
            catch (error) {
                this.error = error;
                this.contacts = undefined;
            }
        }, DELAY);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb25Db250YWN0U2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcG9zaXRpb25Db250YWN0U2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUN2QyxPQUFPLFlBQVksTUFBTSxpREFBaUQsQ0FBQztBQUczRSwwRUFBMEU7QUFDMUUsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBRWxCLE1BQU0sQ0FBQyxPQUFPLE9BQU8sd0JBQXlCLFNBQVEsZ0JBQWdCO0lBQ2xFLFFBQVEsQ0FBWTtJQUNwQixLQUFLLENBQU07SUFFWCxlQUFlLENBQUMsS0FBa0M7UUFDOUMsMkZBQTJGO1FBQzNGLG1HQUFtRztRQUNuRyxvREFBb0Q7UUFDcEQsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkMsTUFBTSxTQUFTLEdBQW9CLEtBQUssQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3ZELG9EQUFvRDtRQUNwRCx1REFBdUQ7UUFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDdEMsSUFBSSxDQUFDO2dCQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxZQUFZLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUMzQixDQUFDO1lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztnQkFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7WUFDOUIsQ0FBQztRQUNMLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNkLENBQUM7Q0FDSiJ9