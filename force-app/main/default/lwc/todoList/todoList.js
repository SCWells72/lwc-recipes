import { LightningElement, api } from 'lwc';
// noinspection LocalVariableNamingConventionJS
export default class TodoList extends LightningElement {
    // Spring 20 Note on tracked properties: this component may seem to
    // mutate an array, but because Array.prototype.filter() always creates
    // a new array, in fact no mutation occurs. Since we always assign
    // a new array to filteredTodos, the track decorator is not required.
    filteredTodos = [];
    _todos = [];
    priorityFilter = false;
    @api
    get todos() {
        return this._todos;
    }
    set todos(value) {
        this._todos = value;
        this.filterTodos();
    }
    filterTodos() {
        if (this.priorityFilter) {
            this.filteredTodos = this._todos.filter((todo) => todo.priority === true);
        }
        else {
            this.filteredTodos = this._todos;
        }
    }
    handleCheckboxChange(event) {
        this.priorityFilter = event.target.checked;
        this.filterTodos();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb0xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RvTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLE1BQU0sS0FBSyxDQUFDO0FBRzVDLCtDQUErQztBQUMvQyxNQUFNLENBQUMsT0FBTyxPQUFPLFFBQVMsU0FBUSxnQkFBZ0I7SUFDbEQsbUVBQW1FO0lBQ25FLHVFQUF1RTtJQUN2RSxrRUFBa0U7SUFDbEUscUVBQXFFO0lBQ3JFLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFFbkIsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUVaLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFFdkIsQ0FBQyxHQUFHO1FBQ0EsS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBSztRQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQ25DLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FDbkMsQ0FBQztRQUNOLENBQUM7YUFBTSxDQUFDO1lBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0JBQW9CLENBQUMsS0FBa0M7UUFDbkQsSUFBSSxDQUFDLGNBQWMsR0FBb0IsS0FBSyxDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUM7UUFDN0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FDSiJ9