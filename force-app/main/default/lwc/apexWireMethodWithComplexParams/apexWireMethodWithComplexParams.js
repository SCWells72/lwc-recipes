import { LightningElement, wire } from 'lwc';
import checkApexTypes from '@salesforce/apex/ApexTypesController.checkApexTypes';
export default class ApexWireMethodWithComplexParams extends LightningElement {
    listItemValue = 0;
    numberValue = 50;
    stringValue = 'Some string';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleFdpcmVNZXRob2RXaXRoQ29tcGxleFBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwZXhXaXJlTWV0aG9kV2l0aENvbXBsZXhQYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM3QyxPQUFPLGNBQWMsTUFBTSxxREFBcUQsQ0FBQztBQUdqRixNQUFNLENBQUMsT0FBTyxPQUFPLCtCQUFnQyxTQUFRLGdCQUFnQjtJQUN6RSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDakIsV0FBVyxHQUFHLGFBQWEsQ0FBQztJQUU1QixlQUFlLEdBQUc7UUFDZCxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVc7UUFDNUIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1FBQzdCLFFBQVEsRUFBRSxFQUFFO0tBQ2YsQ0FBQztJQUVGLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0lBQ3RELFlBQVksQ0FBcUI7SUFFakMsa0JBQWtCLENBQUMsS0FBa0M7UUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRztZQUNuQixHQUFHLElBQUksQ0FBQyxlQUFlO1lBQ3ZCLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQW9CLEtBQUssQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO1NBQ3hFLENBQUM7SUFDTixDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBa0M7UUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRztZQUNuQixHQUFHLElBQUksQ0FBQyxlQUFlO1lBQ3ZCLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFrQixLQUFLLENBQUMsTUFBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN2RixDQUFDO0lBQ04sQ0FBQztJQUVELG9CQUFvQixDQUFDLEtBQWtDO1FBQ25ELE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQW9CLEtBQUssQ0FBQyxNQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUQsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUNELElBQUksQ0FBQyxlQUFlLEdBQUc7WUFDbkIsR0FBRyxJQUFJLENBQUMsZUFBZTtZQUN2QixRQUFRO1NBQ1gsQ0FBQztJQUNOLENBQUM7Q0FDSiJ9