import { LightningElement, wire } from 'lwc';
import checkApexTypes from '@salesforce/apex/ApexTypesController.checkApexTypes';
export default class ApexWireMethodWithComplexParams extends LightningElement {
    listItemValue = 0;
    numberValue = 50;
    stringValue = 'Some string';
    // NOTE: IC generates the actual type so we can use it directly
    parameterObject = {
        someString: this.stringValue,
        someInteger: this.numberValue,
        someList: []
    };
    @wire(checkApexTypes, { wrapper: '$parameterObject' })
    apexResponse;
    handleStringChange(event) {
        this.parameterObject = {
            ...this.parameterObject,
            someString: (this.stringValue = event.target.value)
        };
    }
    handleNumberChange(event) {
        this.parameterObject = {
            ...this.parameterObject,
            someInteger: (this.numberValue = parseInt(event.target.value, 10))
        };
    }
    handleListItemChange(event) {
        const someList = [];
        for (let i = 0; i < event.target.value; i++) {
            someList.push(this.stringValue);
        }
        this.parameterObject = {
            ...this.parameterObject,
            someList
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleFdpcmVNZXRob2RXaXRoQ29tcGxleFBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwZXhXaXJlTWV0aG9kV2l0aENvbXBsZXhQYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLGNBQWMsTUFBTSxxREFBcUQsQ0FBQztBQUdqRixNQUFNLENBQUMsT0FBTyxPQUFPLCtCQUFnQyxTQUFRLGdCQUFnQjtJQUN6RSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDakIsV0FBVyxHQUFHLGFBQWEsQ0FBQztJQUU1QiwrREFBK0Q7SUFDL0QsZUFBZSxHQUFrQjtRQUM3QixVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVc7UUFDNUIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1FBQzdCLFFBQVEsRUFBRSxFQUFFO0tBQ2YsQ0FBQztJQUVGLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0lBQ3RELFlBQVksQ0FBcUI7SUFFakMsa0JBQWtCLENBQUMsS0FBa0M7UUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBa0I7WUFDbEMsR0FBRyxJQUFJLENBQUMsZUFBZTtZQUN2QixVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFvQixLQUFLLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztTQUN4RSxDQUFDO0lBQ04sQ0FBQztJQUVELGtCQUFrQixDQUFDLEtBQWtDO1FBQ2pELElBQUksQ0FBQyxlQUFlLEdBQWtCO1lBQ2xDLEdBQUcsSUFBSSxDQUFDLGVBQWU7WUFDdkIsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQWtCLEtBQUssQ0FBQyxNQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZGLENBQUM7SUFDTixDQUFDO0lBRUQsb0JBQW9CLENBQUMsS0FBa0M7UUFDbkQsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBb0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1RCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBa0I7WUFDbEMsR0FBRyxJQUFJLENBQUMsZUFBZTtZQUN2QixRQUFRO1NBQ1gsQ0FBQztJQUNOLENBQUM7Q0FDSiJ9