import { LightningElement, wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
export default class WireGetPicklistValues extends LightningElement {
    @wire(getPicklistValues, {
        recordTypeId: '012000000000000AAA',
        fieldApiName: TYPE_FIELD
    })
    picklistValues;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lyZUdldFBpY2tsaXN0VmFsdWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2lyZUdldFBpY2tsaXN0VmFsdWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFrQixNQUFNLDJCQUEyQixDQUFDO0FBQzlFLE9BQU8sVUFBVSxNQUFNLGlDQUFpQyxDQUFDO0FBRXpELE1BQU0sQ0FBQyxPQUFPLE9BQU8scUJBQXNCLFNBQVEsZ0JBQWdCO0lBQy9ELENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBQ3JCLFlBQVksRUFBRSxvQkFBb0I7UUFDbEMsWUFBWSxFQUFFLFVBQVU7S0FDM0IsQ0FBQztJQUNGLGNBQWMsQ0FBNkI7Q0FDOUMifQ==