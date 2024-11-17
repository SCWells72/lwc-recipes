import { LightningElement } from 'lwc';
export default class ApiSetterGetter extends LightningElement {
    lastTodoId = 2;
    todos = [
        { id: 1, description: 'Explore recipes', priority: true },
        { id: 2, description: 'Install Ebikes sample app', priority: false }
    ];
    description;
    priority = false;
    handleDescriptionChange(event) {
        this.description = event.target.value;
    }
    handlePriorityChange(event) {
        this.priority = event.target.checked;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpU2V0dGVyR2V0dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpU2V0dGVyR2V0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQVN2QyxNQUFNLENBQUMsT0FBTyxPQUFPLGVBQWdCLFNBQVEsZ0JBQWdCO0lBQ3pELFVBQVUsR0FBRyxDQUFDLENBQUM7SUFFZixLQUFLLEdBQWU7UUFDaEIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1FBQ3pELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtLQUN2RSxDQUFDO0lBRUYsV0FBVyxDQUFTO0lBRXBCLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFFakIsdUJBQXVCLENBQUMsS0FBa0M7UUFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBb0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7SUFDNUQsQ0FBQztJQUVELG9CQUFvQixDQUFDLEtBQWtDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQW9CLEtBQUssQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO0lBQzNELENBQUM7SUFFRCxVQUFVO1FBQ04sSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDckIsa0lBQWtJO1FBQ2xJLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxHQUFHLElBQUksQ0FBQyxLQUFLO1lBQ2I7Z0JBQ0ksRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVO2dCQUNuQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTthQUMxQjtTQUNKLENBQUM7SUFDTixDQUFDO0NBQ0oifQ==