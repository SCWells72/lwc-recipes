import { LightningElement } from 'lwc';

export default class LightDomQuery extends LightningElement {
    handleButtonClick() {
        // Elements that are inside a Light DOM child component are directly accessible by the parent
        // @ts-expect-error Access to private property
        this.template.querySelector('p.lightDomParagraph').innerText =
            'Text changed by parent';
    }
}
