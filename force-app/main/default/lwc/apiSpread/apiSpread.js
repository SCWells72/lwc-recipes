import { LightningElement } from 'lwc';
export default class ApiSpread extends LightningElement {
    props = {
        firstName: 'Amy',
        lastName: 'Taylor'
    };
    handleChange(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.props = {
                firstName: event.target.value,
                lastName: this.props.lastName
            };
        }
        else if (field === 'lastName') {
            this.props = {
                firstName: this.props.firstName,
                lastName: event.target.value
            };
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpU3ByZWFkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpU3ByZWFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQVF2QyxNQUFNLENBQUMsT0FBTyxPQUFPLFNBQVUsU0FBUSxnQkFBZ0I7SUFDbkQsS0FBSyxHQUFlO1FBQ2hCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFFBQVEsRUFBRSxRQUFRO0tBQ3JCLENBQUM7SUFFRixZQUFZLENBQUMsS0FBa0M7UUFDM0MsTUFBTSxLQUFLLEdBQW9CLEtBQUssQ0FBQyxNQUFPLENBQUMsSUFBSSxDQUFDO1FBQ2xELElBQUksS0FBSyxLQUFLLFdBQVcsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQ1QsU0FBUyxFQUFtQixLQUFLLENBQUMsTUFBTyxDQUFDLEtBQUs7Z0JBQy9DLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7YUFDaEMsQ0FBQztRQUNOLENBQUM7YUFBTSxJQUFJLEtBQUssS0FBSyxVQUFVLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUNULFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7Z0JBQy9CLFFBQVEsRUFBbUIsS0FBSyxDQUFDLE1BQU8sQ0FBQyxLQUFLO2FBQ2pELENBQUM7UUFDTixDQUFDO0lBQ0wsQ0FBQztDQUNKIn0=