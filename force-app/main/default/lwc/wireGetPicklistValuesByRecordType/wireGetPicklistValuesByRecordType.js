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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lyZUdldFBpY2tsaXN0VmFsdWVzQnlSZWNvcmRUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2lyZUdldFBpY2tsaXN0VmFsdWVzQnlSZWNvcmRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDN0MsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUUsT0FBTyxjQUFjLE1BQU0sNEJBQTRCLENBQUM7QUFHeEQsMENBQTBDO0FBQzFDLHVDQUF1QztBQUN2QyxNQUFNLENBQUMsT0FBTyxPQUFPLGlDQUFrQyxTQUFRLGdCQUFnQjtJQUMzRSxTQUFTLENBQXNCO0lBQy9CLEtBQUssQ0FBTTtJQUVYLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFO1FBQ2pDLGFBQWEsRUFBRSxjQUFjO1FBQzdCLFlBQVksRUFBRSxvQkFBb0I7S0FDckMsQ0FBQztJQUNGLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDdkIsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNQLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUMzQixDQUFDO2FBQU0sQ0FBQztZQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQy9CLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYyxDQUFDLGNBQXFCO1FBQ2hDLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzdDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsS0FBSyxFQUFFLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxDQUFvQjtvQkFDMUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7aUJBQ2xCLENBQUEsQ0FBQzthQUNOLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztDQUNKIn0=