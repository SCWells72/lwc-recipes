import { LightningElement } from 'lwc';
export default class MiscDomQuery extends LightningElement {
    selection;
    handleCheckboxChange() {
        // Query the DOM
        const checked = Array.from(this.template.querySelectorAll('lightning-input'))
            // Filter to only checked items
            .filter((element) => element.checked)
            // Map to their labels
            .map((element) => element.label);
        this.selection = checked.join(', ');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY0RvbVF1ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWlzY0RvbVF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUd2QyxNQUFNLENBQUMsT0FBTyxPQUFPLFlBQWEsU0FBUSxnQkFBZ0I7SUFDdEQsU0FBUyxDQUFTO0lBRWxCLG9CQUFvQjtRQUNoQixnQkFBZ0I7UUFDaEIsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBaUIsaUJBQWlCLENBQUMsQ0FDcEU7WUFDRywrQkFBK0I7YUFDOUIsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ3JDLHNCQUFzQjthQUNyQixHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNKIn0=