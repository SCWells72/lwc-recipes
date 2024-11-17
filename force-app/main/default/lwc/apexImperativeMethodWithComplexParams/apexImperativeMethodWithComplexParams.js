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
        // NOTE: IC generates the actual type so we can use it directly
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleEltcGVyYXRpdmVNZXRob2RXaXRoQ29tcGxleFBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwZXhJbXBlcmF0aXZlTWV0aG9kV2l0aENvbXBsZXhQYXJhbXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ3ZDLE9BQU8sY0FBYyxNQUFNLHFEQUFxRCxDQUFDO0FBR2pGLHVDQUF1QztBQUN2QyxNQUFNLENBQUMsT0FBTyxPQUFPLHFDQUFzQyxTQUFRLGdCQUFnQjtJQUMvRSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDakIsV0FBVyxHQUFHLGFBQWEsQ0FBQztJQUU1QixPQUFPLENBQVM7SUFDaEIsS0FBSyxDQUFNO0lBRVgsa0JBQWtCLENBQUMsS0FBa0M7UUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBb0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7SUFDNUQsQ0FBQztJQUVELGtCQUFrQixDQUFDLEtBQWtDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQW9CLEtBQUssQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0lBQzVELENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxLQUFrQztRQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFvQixLQUFLLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztJQUM5RCxDQUFDO0lBRUQsS0FBSyxDQUFDLGlCQUFpQjtRQUNuQixnREFBZ0Q7UUFDaEQsNkJBQTZCO1FBQzdCLCtEQUErRDtRQUMvRCxNQUFNLGVBQWUsR0FBa0I7WUFDbkMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzVCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixRQUFRLEVBQUUsRUFBRTtTQUNmLENBQUM7UUFDRixvQkFBb0I7UUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMxQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUVELG1EQUFtRDtRQUNuRCx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDO1lBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLGNBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQzNCLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQztJQUNMLENBQUM7Q0FDSiJ9