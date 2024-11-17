import { LightningElement } from 'lwc';
// @ts-expect-error HTML template import
import templateOne from './templateOne.html';
// @ts-expect-error HTML template import
import templateTwo from './templateTwo.html';
import trailheadLogo from '@salesforce/resourceUrl/trailhead_logo';
import trailheadCharacters from '@salesforce/resourceUrl/trailhead_characters';
export default class MiscMultipleTemplates extends LightningElement {
    showTemplateOne = true;
    trailheadLogoUrl = trailheadLogo;
    einsteinUrl = trailheadCharacters + '/images/einstein.png';
    render() {
        return this.showTemplateOne ? templateOne : templateTwo;
    }
    switchTemplate() {
        this.showTemplateOne = !this.showTemplateOne;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlzY011bHRpcGxlVGVtcGxhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWlzY011bHRpcGxlVGVtcGxhdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUN2Qyx3Q0FBd0M7QUFDeEMsT0FBTyxXQUFXLE1BQU0sb0JBQW9CLENBQUM7QUFDN0Msd0NBQXdDO0FBQ3hDLE9BQU8sV0FBVyxNQUFNLG9CQUFvQixDQUFDO0FBRTdDLE9BQU8sYUFBYSxNQUFNLHdDQUF3QyxDQUFDO0FBQ25FLE9BQU8sbUJBQW1CLE1BQU0sOENBQThDLENBQUM7QUFFL0UsTUFBTSxDQUFDLE9BQU8sT0FBTyxxQkFBc0IsU0FBUSxnQkFBZ0I7SUFDL0QsZUFBZSxHQUFHLElBQUksQ0FBQztJQUV2QixnQkFBZ0IsR0FBRyxhQUFhLENBQUM7SUFDakMsV0FBVyxHQUFHLG1CQUFtQixHQUFHLHNCQUFzQixDQUFDO0lBRTNELE1BQU07UUFDRixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQzVELENBQUM7SUFFRCxjQUFjO1FBQ1YsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDakQsQ0FBQztDQUNKIn0=