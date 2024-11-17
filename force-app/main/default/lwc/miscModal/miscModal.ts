import { LightningElement } from 'lwc';
import MyModal from 'c/myModal';
import LightningInput from 'lightning/input';

export default class MiscModal extends LightningElement {
    content = 'The modal content';
    header = 'The modal header';
    // NOTE: Had to add this missing field
    result: any;

    handleHeaderChange(event: CustomEvent<LightningInput>) {
        this.header = (<LightningInput>event.target).value;
    }

    handleContentChange(event: CustomEvent<LightningInput>) {
        this.content = (<LightningInput>event.target).value;
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
