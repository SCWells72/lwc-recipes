import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';
import LightningConfirm from 'lightning/confirm';
import LightningPrompt from 'lightning/prompt';
// noinspection JSMethodCanBeStatic
export default class MiscNotificationModules extends LightningElement {
    confirmStatus;
    promptValue;
    async handleAlertClick() {
        await LightningAlert.open({
            message: 'This is an alert message',
            theme: 'info',
            label: 'Alert!'
        });
    }
    async handleConfirmClick() {
        const result = await LightningConfirm.open({
            message: 'this is the prompt message',
            variant: 'headerless',
            label: 'this is the aria-label value'
        });
        if (result) {
            this.confirmStatus = 'Ok was clicked';
        }
        else {
            this.confirmStatus = 'Cancel was clicked';
        }
    }
    async handlePromptClick() {
        // Returned value is input text if OK clicked or null if cancel was clicked
        this.promptValue = await LightningPrompt.open({
            message: 'Please enter a value',
            label: 'Please Respond',
            defaultValue: 'initial value',
            theme: 'shade'
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY05vdGlmaWNhdGlvbk1vZHVsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtaXNjTm90aWZpY2F0aW9uTW9kdWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDdkMsT0FBTyxjQUFjLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxnQkFBZ0IsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLGVBQWUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxtQ0FBbUM7QUFDbkMsTUFBTSxDQUFDLE9BQU8sT0FBTyx1QkFBd0IsU0FBUSxnQkFBZ0I7SUFDakUsYUFBYSxDQUFTO0lBQ3RCLFdBQVcsQ0FBUztJQUVwQixLQUFLLENBQUMsZ0JBQWdCO1FBQ2xCLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQztZQUN0QixPQUFPLEVBQUUsMEJBQTBCO1lBQ25DLEtBQUssRUFBRSxNQUFNO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDbEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0I7UUFDcEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7WUFDdkMsT0FBTyxFQUFFLDRCQUE0QjtZQUNyQyxPQUFPLEVBQUUsWUFBWTtZQUNyQixLQUFLLEVBQUUsOEJBQThCO1NBQ3hDLENBQUMsQ0FBQztRQUVILElBQUksTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDO1FBQzFDLENBQUM7YUFBTSxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQztRQUM5QyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxpQkFBaUI7UUFDbkIsMkVBQTJFO1FBQzNFLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQzFDLE9BQU8sRUFBRSxzQkFBc0I7WUFDL0IsS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixZQUFZLEVBQUUsZUFBZTtZQUM3QixLQUFLLEVBQUUsT0FBTztTQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0oifQ==