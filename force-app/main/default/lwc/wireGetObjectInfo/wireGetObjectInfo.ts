import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import LightningInput from 'lightning/input';
import { ObjectInfoRepresentation } from 'lightning/uiRecordApi';

export default class WireGetObjectInfo extends LightningElement {
    objectApiName: string;

    @wire(getObjectInfo, { objectApiName: '$objectApiName' })
    objectInfo: WireResult<ObjectInfoRepresentation>;

    handleBtnClick() {
        this.objectApiName =
            (this.template.querySelector<LightningInput>('lightning-input')).value;
    }

    get objectInfoStr() {
        return this.objectInfo
            ? JSON.stringify(this.objectInfo.data, null, 2)
            : '';
    }
}
