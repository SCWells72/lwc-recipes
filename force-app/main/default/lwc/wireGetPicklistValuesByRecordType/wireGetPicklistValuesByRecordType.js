import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_RECORD from '@salesforce/schema/Account';
// TODO: Add more concrete data types here
// noinspection JSClassNamingConvention
export default class WireGetPicklistValuesByRecordType extends LightningElement {
    treeModel;
    error;
    @wire(getPicklistValuesByRecordType, {
        objectApiName: ACCOUNT_RECORD,
        recordTypeId: '012000000000000AAA'
    })
    wiredValues({ error, data }) {
        if (data) {
            this.treeModel = this.buildTreeModel(data.picklistFieldValues);
            this.error = undefined;
        }
        else {
            this.error = error;
            this.treeModel = undefined;
        }
    }
    buildTreeModel(picklistValues) {
        const treeNodes = [];
        Object.keys(picklistValues).forEach((picklist) => {
            treeNodes.push({
                label: picklist,
                items: picklistValues[picklist].values.map((item) => ({
                    label: item.label,
                    name: item.value
                }))
            });
        });
        return treeNodes;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lyZUdldFBpY2tsaXN0VmFsdWVzQnlSZWNvcmRUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2lyZUdldFBpY2tsaXN0VmFsdWVzQnlSZWNvcmRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDN0MsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUUsT0FBTyxjQUFjLE1BQU0sNEJBQTRCLENBQUM7QUFFeEQsMENBQTBDO0FBQzFDLHVDQUF1QztBQUN2QyxNQUFNLENBQUMsT0FBTyxPQUFPLGlDQUFrQyxTQUFRLGdCQUFnQjtJQUMzRSxTQUFTLENBQVE7SUFDakIsS0FBSyxDQUFNO0lBRVgsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEVBQUU7UUFDakMsYUFBYSxFQUFFLGNBQWM7UUFDN0IsWUFBWSxFQUFFLG9CQUFvQjtLQUNyQyxDQUFDO0lBQ0YsV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtRQUN2QixJQUFJLElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzNCLENBQUM7YUFBTSxDQUFDO1lBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjLENBQUMsY0FBcUI7UUFDaEMsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDN0MsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDWCxLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ3ZELEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO2lCQUNuQixDQUFDLENBQUM7YUFDTixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7Q0FDSiJ9