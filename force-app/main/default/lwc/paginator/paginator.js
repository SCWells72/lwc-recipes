import { LightningElement } from 'lwc';
export default class Paginator extends LightningElement {
    handlePrevious() {
        this.dispatchEvent(new CustomEvent('previous'));
    }
    handleNext() {
        this.dispatchEvent(new CustomEvent('next'));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnaW5hdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUV2QyxNQUFNLENBQUMsT0FBTyxPQUFPLFNBQVUsU0FBUSxnQkFBZ0I7SUFDbkQsY0FBYztRQUNWLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsVUFBVTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0NBQ0oifQ==