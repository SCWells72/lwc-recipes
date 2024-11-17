import { LightningElement } from 'lwc';

// noinspection JSUnusedGlobalSymbols
export default class LightDomQueryChild extends LightningElement {
    static renderMode = 'light';

    handleButtonClick() {
        // Within Light DOM components, use this.querySelector instead of this.template.querySelector to access elements
        (this.querySelector<HTMLParagraphElement>('p.lightDomParagraph')).innerText =
            'Text changed by child';
    }
}
