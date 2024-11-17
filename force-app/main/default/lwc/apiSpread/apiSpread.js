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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpU3ByZWFkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpU3ByZWFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUd2QyxNQUFNLENBQUMsT0FBTyxPQUFPLFNBQVUsU0FBUSxnQkFBZ0I7SUFDbkQsS0FBSyxHQUFHO1FBQ0osU0FBUyxFQUFFLEtBQUs7UUFDaEIsUUFBUSxFQUFFLFFBQVE7S0FDckIsQ0FBQztJQUVGLFlBQVksQ0FBQyxLQUFrQztRQUMzQyxNQUFNLEtBQUssR0FBb0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDbEQsSUFBSSxLQUFLLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRztnQkFDVCxTQUFTLEVBQW1CLEtBQUssQ0FBQyxNQUFPLENBQUMsS0FBSztnQkFDL0MsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTthQUNoQyxDQUFDO1FBQ04sQ0FBQzthQUFNLElBQUksS0FBSyxLQUFLLFVBQVUsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQ1QsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztnQkFDL0IsUUFBUSxFQUFtQixLQUFLLENBQUMsTUFBTyxDQUFDLEtBQUs7YUFDakQsQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0NBQ0oifQ==