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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY1RvYXN0Tm90aWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWlzY1RvYXN0Tm90aWZpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUN2QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFJbEUsTUFBTSxDQUFDLE9BQU8sT0FBTyxxQkFBc0IsU0FBUSxnQkFBZ0I7SUFDL0QsU0FBUyxHQUFHLGNBQWMsQ0FBQztJQUMzQixXQUFXLEdBQUcsZ0JBQWdCLENBQUM7SUFDL0IsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUNsQixjQUFjLEdBQThCO1FBQ3hDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO1FBQ2xDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1FBQ3RDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1FBQ3RDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0tBQ25DLENBQUM7SUFFRixXQUFXLENBQUMsS0FBa0M7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBb0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7SUFDMUQsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFrQztRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFvQixLQUFLLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztJQUM1RCxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQXFDO1FBQy9DLElBQUksQ0FBQyxPQUFPLEdBQXVCLEtBQUssQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0lBQzNELENBQUM7SUFFRCxnQkFBZ0I7UUFDWixNQUFNLEdBQUcsR0FBRyxJQUFJLGNBQWMsQ0FBQztZQUMzQixLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN4QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDSiJ9