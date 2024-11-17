import { LightningElement } from 'lwc';
import LightningInput from 'lightning/input';

export default class ApiSetterGetter extends LightningElement {
    lastTodoId = 2;

    todos = [
        { id: 1, description: 'Explore recipes', priority: true },
        { id: 2, description: 'Install Ebikes sample app', priority: false }
    ];

    description: string;

    priority = false;

    handleDescriptionChange(event: CustomEvent<LightningInput>) {
        this.description = (<LightningInput>event.target).value;
    }

    handlePriorityChange(event: CustomEvent<LightningInput>) {
        this.priority = (<LightningInput>event.target).checked;
    }

    handleSave() {
        this.lastTodoId += 1;
        // Using immutable data structures. Creating a new array with old and new items instead of mutating the existing array with push()
        this.todos = [
            ...this.todos,
            {
                id: this.lastTodoId,
                description: this.description,
                priority: this.priority
            }
        ];
    }
}
