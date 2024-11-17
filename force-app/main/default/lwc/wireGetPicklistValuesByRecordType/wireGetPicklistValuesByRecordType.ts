import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType, GetPicklistValuesByRecordTypeResponse } from 'lightning/uiObjectInfoApi';
import ACCOUNT_RECORD from '@salesforce/schema/Account';
import { LightningTreeItem } from 'lightning/tree';

// TODO: Add more concrete data types here
// noinspection JSClassNamingConvention
export default class WireGetPicklistValuesByRecordType extends LightningElement {
    treeModel: LightningTreeItem[];
    error: any;

    @wire(getPicklistValuesByRecordType, {
        objectApiName: ACCOUNT_RECORD,
        recordTypeId: '012000000000000AAA'
    })
    wiredValues(result: WireResult<GetPicklistValuesByRecordTypeResponse>) {
        if (result.data) {
            this.treeModel = this.buildTreeModel(result.data.picklistFieldValues);
            this.error = undefined;
        } else {
            this.error = result.error;
            this.treeModel = undefined;
        }
    }

    buildTreeModel(picklistValues: any) {
        const treeNodes = [];
        Object.keys(picklistValues).forEach((picklist) => {
            treeNodes.push({
                label: picklist,
                items: picklistValues[picklist].values.map((item: any) => (<LightningTreeItem>{
                    label: item.label,
                    name: item.value
                }))
            });
        });
        return treeNodes;
    }
}
