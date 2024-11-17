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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpU2V0dGVyR2V0dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpU2V0dGVyR2V0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUd2QyxNQUFNLENBQUMsT0FBTyxPQUFPLGVBQWdCLFNBQVEsZ0JBQWdCO0lBQ3pELFVBQVUsR0FBRyxDQUFDLENBQUM7SUFFZixLQUFLLEdBQUc7UUFDSixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7UUFDekQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0tBQ3ZFLENBQUM7SUFFRixXQUFXLENBQVM7SUFFcEIsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUVqQix1QkFBdUIsQ0FBQyxLQUFrQztRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFvQixLQUFLLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztJQUM1RCxDQUFDO0lBRUQsb0JBQW9CLENBQUMsS0FBa0M7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBb0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7SUFDM0QsQ0FBQztJQUVELFVBQVU7UUFDTixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUNyQixrSUFBa0k7UUFDbEksSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFDYjtnQkFDSSxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQ25CLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDN0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQzFCO1NBQ0osQ0FBQztJQUNOLENBQUM7Q0FDSiJ9