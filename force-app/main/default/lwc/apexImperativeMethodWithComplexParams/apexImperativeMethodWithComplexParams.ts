import { LightningElement } from 'lwc';
import checkApexTypes from '@salesforce/apex/ApexTypesController.checkApexTypes';
import LightningInput from 'lightning/input';

// noinspection JSClassNamingConvention
export default class ApexImperativeMethodWithComplexParams extends LightningElement {
    listItemValue = 4;
    numberValue = 50;
    stringValue = 'Some string';

    message: string;
    error: any;

    handleStringChange(event: CustomEvent<LightningInput>) {
        this.stringValue = (<LightningInput>event.target).value;
    }

    handleNumberChange(event: CustomEvent<LightningInput>) {
        this.numberValue = (<LightningInput>event.target).value;
    }

    handleListItemChange(event: CustomEvent<LightningInput>) {
        this.listItemValue = (<LightningInput>event.target).value;
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
        } catch (error) {
            this.message = undefined;
            this.error = error;
        }
    }
}
