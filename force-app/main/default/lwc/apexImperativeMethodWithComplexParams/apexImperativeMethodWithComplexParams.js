import { LightningElement } from 'lwc';
import checkApexTypes from '@salesforce/apex/ApexTypesController.checkApexTypes';
// noinspection JSClassNamingConvention
export default class ApexImperativeMethodWithComplexParams extends LightningElement {
    listItemValue = 4;
    numberValue = 50;
    stringValue = 'Some string';
    message;
    error;
    handleStringChange(event) {
        this.stringValue = event.target.value;
    }
    handleNumberChange(event) {
        this.numberValue = event.target.value;
    }
    handleListItemChange(event) {
        this.listItemValue = event.target.value;
    }
    async handleButtonClick() {
        // Creating the object that represents the shape
        // of the Apex wrapper class.
        const parameterObject = {
            someString: this.stringValue,
            someInteger: this.numberValue,
            someList: []
        };
        // Populating a list
        for (let i = 0; i < this.listItemValue; i++) {
            parameterObject.someList.push(this.stringValue);
        }
        // Calling the imperative Apex method with the JSON
        // object as parameter.
        try {
            this.message = await checkApexTypes({ wrapper: parameterObject });
            this.error = undefined;
        }
        catch (error) {
            this.message = undefined;
            this.error = error;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleEltcGVyYXRpdmVNZXRob2RXaXRoQ29tcGxleFBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwZXhJbXBlcmF0aXZlTWV0aG9kV2l0aENvbXBsZXhQYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ3ZDLE9BQU8sY0FBYyxNQUFNLHFEQUFxRCxDQUFDO0FBR2pGLHVDQUF1QztBQUN2QyxNQUFNLENBQUMsT0FBTyxPQUFPLHFDQUFzQyxTQUFRLGdCQUFnQjtJQUMvRSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDakIsV0FBVyxHQUFHLGFBQWEsQ0FBQztJQUU1QixPQUFPLENBQVM7SUFDaEIsS0FBSyxDQUFNO0lBRVgsa0JBQWtCLENBQUMsS0FBa0M7UUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBb0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7SUFDNUQsQ0FBQztJQUVELGtCQUFrQixDQUFDLEtBQWtDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQW9CLEtBQUssQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0lBQzVELENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxLQUFrQztRQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFvQixLQUFLLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztJQUM5RCxDQUFDO0lBRUQsS0FBSyxDQUFDLGlCQUFpQjtRQUNuQixnREFBZ0Q7UUFDaEQsNkJBQTZCO1FBQzdCLE1BQU0sZUFBZSxHQUFHO1lBQ3BCLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM1QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsUUFBUSxFQUFFLEVBQUU7U0FDZixDQUFDO1FBQ0Ysb0JBQW9CO1FBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFFRCxtREFBbUQ7UUFDbkQsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQztZQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxjQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUMzQixDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7SUFDTCxDQUFDO0NBQ0oifQ==