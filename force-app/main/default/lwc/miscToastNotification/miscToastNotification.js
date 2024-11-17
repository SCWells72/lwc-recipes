import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
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
    titleChange(event) {
        this.titleText = event.target.value;
    }
    messageChange(event) {
        this.messageText = event.target.value;
    }
    variantChange(event) {
        this.variant = event.target.value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY1RvYXN0Tm90aWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWlzY1RvYXN0Tm90aWZpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUN2QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFJbEUsTUFBTSxDQUFDLE9BQU8sT0FBTyxxQkFBc0IsU0FBUSxnQkFBZ0I7SUFDL0QsU0FBUyxHQUFHLGNBQWMsQ0FBQztJQUMzQixXQUFXLEdBQUcsZ0JBQWdCLENBQUM7SUFDL0IsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUNsQixjQUFjLEdBQUc7UUFDYixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTtRQUNsQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtRQUN0QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtRQUN0QyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtLQUNuQyxDQUFDO0lBRUYsV0FBVyxDQUFDLEtBQWtDO1FBQzFDLElBQUksQ0FBQyxTQUFTLEdBQW9CLEtBQUssQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0lBQzFELENBQUM7SUFFRCxhQUFhLENBQUMsS0FBa0M7UUFDNUMsSUFBSSxDQUFDLFdBQVcsR0FBb0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7SUFDNUQsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFxQztRQUMvQyxJQUFJLENBQUMsT0FBTyxHQUF1QixLQUFLLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztJQUMzRCxDQUFDO0lBRUQsZ0JBQWdCO1FBQ1osTUFBTSxHQUFHLEdBQUcsSUFBSSxjQUFjLENBQUM7WUFDM0IsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVztZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0oifQ==