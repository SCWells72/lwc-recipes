import { api } from 'lwc';
import LightningModal from 'lightning/modal';
export default class MyModal extends LightningModal {
    @api
    header;
    @api
    content;
    // Return a custom value when the modal is closed with the Close button.
    // If no value is returned in the close method, then undefined is returned(Same as closing with the X button).
    handleClose() {
        this.close('return value');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15TW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUMxQixPQUFPLGNBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxNQUFNLENBQUMsT0FBTyxPQUFPLE9BQVEsU0FBUSxjQUFjO0lBQy9DLENBQUMsR0FBRztJQUFDLE1BQU0sQ0FBUztJQUNwQixDQUFDLEdBQUc7SUFBQyxPQUFPLENBQVM7SUFFckIsd0VBQXdFO0lBQ3hFLDhHQUE4RztJQUM5RyxXQUFXO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0oifQ==