import { LightningElement } from 'lwc';
export default class HelloExpressions extends LightningElement {
    firstName = '';
    lastName = '';
    handleChange(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        }
        else if (field === 'lastName') {
            this.lastName = event.target.value;
        }
    }
    get uppercasedFullName() {
        return `${this.firstName} ${this.lastName}`.trim().toUpperCase();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG9FeHByZXNzaW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlbGxvRXhwcmVzc2lvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBR3ZDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sZ0JBQWlCLFNBQVEsZ0JBQWdCO0lBQzFELFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixRQUFRLEdBQUcsRUFBRSxDQUFDO0lBRWQsWUFBWSxDQUFDLEtBQWtDO1FBQzNDLE1BQU0sS0FBSyxHQUFvQixLQUFLLENBQUMsTUFBTyxDQUFDLElBQUksQ0FBQztRQUNsRCxJQUFJLEtBQUssS0FBSyxXQUFXLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsU0FBUyxHQUFvQixLQUFLLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQztRQUMxRCxDQUFDO2FBQU0sSUFBSSxLQUFLLEtBQUssVUFBVSxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBb0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7UUFDekQsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLGtCQUFrQjtRQUNsQixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckUsQ0FBQztDQUNKIn0=