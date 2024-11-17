import { LightningElement, api } from 'lwc';
export default class ViewSource extends LightningElement {
    baseURL = 'https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/';
    @api
    source;
    get sourceURL() {
        return this.baseURL + this.source;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld1NvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXdTb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUU1QyxNQUFNLENBQUMsT0FBTyxPQUFPLFVBQVcsU0FBUSxnQkFBZ0I7SUFDcEQsT0FBTyxHQUNILGdGQUFnRixDQUFDO0lBRXJGLENBQUMsR0FBRztJQUFDLE1BQU0sQ0FBUztJQUVwQixJQUFJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN0QyxDQUFDO0NBQ0oifQ==