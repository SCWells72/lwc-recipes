import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
// noinspection MagicNumberJS,ReuseOfLocalVariableJS
export default class DispatchEventHeadlessAction extends LightningElement {
    @api
    recordId;
    @api
    async invoke() {
        // Fire Toast message
        let event = new ShowToastEvent({
            title: 'I am a headless action!',
            message: 'Hi there! Starting...'
        });
        this.dispatchEvent(event);
        // Wait and fire another another Toast message
        await this.sleep(2000);
        // Fire Toast message
        event = new ShowToastEvent({
            title: 'I am a headless action on record with id ' + this.recordId,
            message: 'All done!'
        });
        this.dispatchEvent(event);
    }
    sleep(ms) {
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2hFdmVudEhlYWRsZXNzQWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlzcGF0Y2hFdmVudEhlYWRsZXNzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRWxFLG9EQUFvRDtBQUNwRCxNQUFNLENBQUMsT0FBTyxPQUFPLDJCQUE0QixTQUFRLGdCQUFnQjtJQUNyRSxDQUFDLEdBQUc7SUFBQyxRQUFRLENBQVM7SUFDdEIsQ0FBQyxHQUFHO0lBQUMsS0FBSyxDQUFDLE1BQU07UUFDYixxQkFBcUI7UUFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxjQUFjLENBQUM7WUFDM0IsS0FBSyxFQUFFLHlCQUF5QjtZQUNoQyxPQUFPLEVBQUUsdUJBQXVCO1NBQ25DLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsOENBQThDO1FBQzlDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixxQkFBcUI7UUFDckIsS0FBSyxHQUFHLElBQUksY0FBYyxDQUFDO1lBQ3ZCLEtBQUssRUFBRSwyQ0FBMkMsR0FBRyxJQUFJLENBQUMsUUFBUTtZQUNsRSxPQUFPLEVBQUUsV0FBVztTQUN2QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxLQUFLLENBQUMsRUFBVTtRQUNaLHVEQUF1RDtRQUN2RCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztDQUNKIn0=