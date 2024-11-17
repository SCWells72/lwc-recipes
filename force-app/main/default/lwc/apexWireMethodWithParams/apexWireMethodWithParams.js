import { LightningElement, wire } from 'lwc';
import findContacts from '@salesforce/apex/ContactController.findContacts';
/** The delay used when debouncing event handlers before invoking Apex. */
const DELAY = 300;
export default class ApexWireMethodWithParams extends LightningElement {
    searchKey = '';
    @wire(findContacts, { searchKey: '$searchKey' })
    contacts;
    handleKeyChange(event) {
        // Debouncing this method: Do not update the reactive property as long as this function is
        // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
        // @ts-expect-error Where is delayTimeout defined?
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        // @ts-expect-error Where is delayTimeout defined?
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleFdpcmVNZXRob2RXaXRoUGFyYW1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBleFdpcmVNZXRob2RXaXRoUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDN0MsT0FBTyxZQUFZLE1BQU0saURBQWlELENBQUM7QUFHM0UsMEVBQTBFO0FBQzFFLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUVsQixNQUFNLENBQUMsT0FBTyxPQUFPLHdCQUF5QixTQUFRLGdCQUFnQjtJQUNsRSxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBRWYsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxDQUFDO0lBQ2hELFFBQVEsQ0FBd0I7SUFFaEMsZUFBZSxDQUFDLEtBQWtDO1FBQzlDLDBGQUEwRjtRQUMxRixtR0FBbUc7UUFDbkcsa0RBQWtEO1FBQ2xELE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sU0FBUyxHQUFvQixLQUFLLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztRQUN2RCxrREFBa0Q7UUFDbEQsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNoQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMvQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDZCxDQUFDO0NBQ0oifQ==