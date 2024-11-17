import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavToListView extends NavigationMixin(LightningElement) {
    navigateToList() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2VG9MaXN0Vmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hdlRvTGlzdFZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RCxNQUFNLENBQUMsT0FBTyxPQUFPLGFBQWMsU0FBUSxlQUFlLENBQUMsZ0JBQWdCLENBQUM7SUFDeEUsY0FBYztRQUNWLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0IsSUFBSSxFQUFFLHNCQUFzQjtZQUM1QixVQUFVLEVBQUU7Z0JBQ1IsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCLFVBQVUsRUFBRSxNQUFNO2FBQ3JCO1lBQ0QsS0FBSyxFQUFFO2dCQUNILFVBQVUsRUFBRSxRQUFRO2FBQ3ZCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKIn0=