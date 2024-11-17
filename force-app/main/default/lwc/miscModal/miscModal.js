import { LightningElement } from 'lwc';
import MyModal from 'c/myModal';
export default class MiscModal extends LightningElement {
    content = 'The modal content';
    header = 'The modal header';
    // NOTE: Had to add this missing field
    result;
    handleHeaderChange(event) {
        this.header = event.target.value;
    }
    handleContentChange(event) {
        this.content = event.target.value;
    }
    // If modal is closed with the standard X button, promise returns undefined
    // If modal is closed with the custom Close button, promise returns the value sent by the close method in myModal.js
    async handleShowModal() {
        this.result = await MyModal.open({
            size: 'small',
            description: 'MiscModal displays the message in a popup',
            header: this.header,
            content: this.content
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY01vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWlzY01vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUN2QyxPQUFPLE9BQU8sTUFBTSxXQUFXLENBQUM7QUFHaEMsTUFBTSxDQUFDLE9BQU8sT0FBTyxTQUFVLFNBQVEsZ0JBQWdCO0lBQ25ELE9BQU8sR0FBRyxtQkFBbUIsQ0FBQztJQUM5QixNQUFNLEdBQUcsa0JBQWtCLENBQUM7SUFDNUIsc0NBQXNDO0lBQ3RDLE1BQU0sQ0FBTTtJQUVaLGtCQUFrQixDQUFDLEtBQWtDO1FBQ2pELElBQUksQ0FBQyxNQUFNLEdBQW9CLEtBQUssQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFrQztRQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFvQixLQUFLLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztJQUN4RCxDQUFDO0lBRUQsMkVBQTJFO0lBQzNFLG9IQUFvSDtJQUNwSCxLQUFLLENBQUMsZUFBZTtRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sT0FBTyxDQUFDLElBQUksQ0FBQztZQUM3QixJQUFJLEVBQUUsT0FBTztZQUNiLFdBQVcsRUFBRSwyQ0FBMkM7WUFDeEQsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN4QixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0oifQ==