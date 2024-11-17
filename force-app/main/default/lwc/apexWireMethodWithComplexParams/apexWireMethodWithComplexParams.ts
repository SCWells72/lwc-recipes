import { LightningElement, wire } from 'lwc';
import checkApexTypes from '@salesforce/apex/ApexTypesController.checkApexTypes';
import LightningInput from 'lightning/input';

export default class ApexWireMethodWithComplexParams extends LightningElement {
    listItemValue = 0;
    numberValue = 50;
    stringValue = 'Some string';

    // NOTE: IC generates the actual type so we can use it directly
    parameterObject: CustomWrapper = {
        someString: this.stringValue,
        someInteger: this.numberValue,
        someList: []
    };

    @wire(checkApexTypes, { wrapper: '$parameterObject' })
    apexResponse: WireResult<string>;

    handleStringChange(event: CustomEvent<LightningInput>) {
        this.parameterObject = <CustomWrapper>{
            ...this.parameterObject,
            someString: (this.stringValue = (<LightningInput>event.target).value)
        };
    }

    handleNumberChange(event: CustomEvent<LightningInput>) {
        this.parameterObject = <CustomWrapper>{
            ...this.parameterObject,
            someInteger: (this.numberValue = parseInt((<LightningInput>event.target).value, 10))
        };
    }

    handleListItemChange(event: CustomEvent<LightningInput>) {
        const someList = [];
        for (let i = 0; i < (<LightningInput>event.target).value; i++) {
            someList.push(this.stringValue);
        }
        this.parameterObject = <CustomWrapper>{
            ...this.parameterObject,
            someList
        };
    }
}
