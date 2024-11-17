import { LightningElement, api } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
// @ts-expect-error HTML template import
import noDataIllustration from './templates/noDataIllustration.html';
// @ts-expect-error HTML template import
import inlineMessage from './templates/inlineMessage.html';
// noinspection NonBlockStatementBodyJS
export default class ErrorPanel extends LightningElement {
    /** Single or array of LDS errors */
    @api
    errors;
    /** Generic / user-friendly message */
    @api
    friendlyMessage = 'Error retrieving data';
    /** Type of error message **/
    @api
    type;
    viewDetails = false;
    get errorMessages() {
        return reduceErrors(this.errors);
    }
    handleShowDetailsClick() {
        this.viewDetails = !this.viewDetails;
    }
    render() {
        if (this.type === 'inlineMessage')
            return inlineMessage;
        return noDataIllustration;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JQYW5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVycm9yUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLHdDQUF3QztBQUN4QyxPQUFPLGtCQUFrQixNQUFNLHFDQUFxQyxDQUFDO0FBQ3JFLHdDQUF3QztBQUN4QyxPQUFPLGFBQWEsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUzRCx1Q0FBdUM7QUFDdkMsTUFBTSxDQUFDLE9BQU8sT0FBTyxVQUFXLFNBQVEsZ0JBQWdCO0lBQ3BELG9DQUFvQztJQUNwQyxDQUFDLEdBQUc7SUFBQyxNQUFNLENBQWtDO0lBQzdDLHNDQUFzQztJQUN0QyxDQUFDLEdBQUc7SUFBQyxlQUFlLEdBQUcsdUJBQXVCLENBQUM7SUFDL0MsNkJBQTZCO0lBQzdCLENBQUMsR0FBRztJQUFDLElBQUksQ0FBUztJQUVsQixXQUFXLEdBQUcsS0FBSyxDQUFDO0lBRXBCLElBQUksYUFBYTtRQUNiLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsc0JBQXNCO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGVBQWU7WUFBRSxPQUFPLGFBQWEsQ0FBQztRQUN4RCxPQUFPLGtCQUFrQixDQUFDO0lBQzlCLENBQUM7Q0FDSiJ9