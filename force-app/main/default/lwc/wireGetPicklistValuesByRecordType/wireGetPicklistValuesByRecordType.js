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
    wiredValues(result) {
        if (result.data) {
            this.treeModel = this.buildTreeModel(result.data.picklistFieldValues);
            this.error = undefined;
        }
        else {
            this.error = result.error;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lyZUdldFBpY2tsaXN0VmFsdWVzQnlSZWNvcmRUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2lyZUdldFBpY2tsaXN0VmFsdWVzQnlSZWNvcmRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDN0MsT0FBTyxFQUFFLDZCQUE2QixFQUF5QyxNQUFNLDJCQUEyQixDQUFDO0FBQ2pILE9BQU8sY0FBYyxNQUFNLDRCQUE0QixDQUFDO0FBR3hELDBDQUEwQztBQUMxQyx1Q0FBdUM7QUFDdkMsTUFBTSxDQUFDLE9BQU8sT0FBTyxpQ0FBa0MsU0FBUSxnQkFBZ0I7SUFDM0UsU0FBUyxDQUFzQjtJQUMvQixLQUFLLENBQU07SUFFWCxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRTtRQUNqQyxhQUFhLEVBQUUsY0FBYztRQUM3QixZQUFZLEVBQUUsb0JBQW9CO0tBQ3JDLENBQUM7SUFDRixXQUFXLENBQUMsTUFBeUQ7UUFDakUsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzNCLENBQUM7YUFBTSxDQUFDO1lBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQy9CLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYyxDQUFDLGNBQW1CO1FBQzlCLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzdDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsS0FBSyxFQUFFLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUUsQ0FBQyxDQUFvQjtvQkFDMUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7aUJBQ2xCLENBQUEsQ0FBQzthQUNOLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztDQUNKIn0=