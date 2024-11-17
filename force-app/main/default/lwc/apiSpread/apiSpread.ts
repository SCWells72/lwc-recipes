import { LightningElement } from 'lwc';
import LightningInput from 'lightning/input';

export interface PersonName {
    firstName: string;
    lastName: string;
}

export default class ApiSpread extends LightningElement {
    props: PersonName = {
        firstName: 'Amy',
        lastName: 'Taylor'
    };

    handleChange(event: CustomEvent<LightningInput>) {
        const field = (<LightningInput>event.target).name;
        if (field === 'firstName') {
            this.props = {
                firstName: (<LightningInput>event.target).value,
                lastName: this.props.lastName
            };
        } else if (field === 'lastName') {
            this.props = {
                firstName: this.props.firstName,
                lastName: (<LightningInput>event.target).value
            };
        }
    }
}
