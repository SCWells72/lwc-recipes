import { LightningElement } from 'lwc';
import FULL_CALENDAR from '@salesforce/resourceUrl/fullCalendar';
import { loadScript, loadStyle } from 'lightning/platformResourceLoader';
/**
 * When using this component in an LWR site, please import the below custom implementation of 'loadScript' module
 * instead of the one from 'lightning/platformResourceLoader'
 *
 * import { loadScript } from 'c/resourceLoader';
 *
 * This workaround is implemented to get around a limitation of the Lightning Locker library in LWR sites.
 * Read more about it in the "Lightning Locker Limitations" section of the documentation
 * https://developer.salesforce.com/docs/atlas.en-us.exp_cloud_lwr.meta/exp_cloud_lwr/template_limitations.htm
 */
export default class LibsFullCalendar extends LightningElement {
    isCalInitialized = false;
    error;
    async renderedCallback() {
        if (this.isCalInitialized) {
            return;
        }
        this.isCalInitialized = true;
        try {
            await Promise.all([
                loadScript(this, FULL_CALENDAR + '/main.min.js'),
                loadStyle(this, FULL_CALENDAR + '/main.min.css')
            ]);
            this.initializeCalendar();
        }
        catch (error) {
            this.error = error;
        }
    }
    initializeCalendar() {
        const calendarEl = this.template.querySelector('.calendar');
        // eslint-disable-next-line no-undef
        // @ts-expect-error How do we resolve types imported from static resources?
        if (typeof FullCalendar === 'undefined') {
            throw new Error('Could not load FullCalendar. Make sure that Lightning Web Security is enabled for your org. See link below.');
        }
        // eslint-disable-next-line no-undef
        // @ts-expect-error How do we resolve types imported from static resources?
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth'
        });
        calendar.render();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlic0Z1bGxDYWxlbmRhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpYnNGdWxsQ2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sS0FBSyxDQUFDO0FBQ3ZDLE9BQU8sYUFBYSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekU7Ozs7Ozs7OztHQVNHO0FBRUgsTUFBTSxDQUFDLE9BQU8sT0FBTyxnQkFBaUIsU0FBUSxnQkFBZ0I7SUFDMUQsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLEtBQUssQ0FBTTtJQUVYLEtBQUssQ0FBQyxnQkFBZ0I7UUFDbEIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixPQUFPO1FBQ1gsQ0FBQztRQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFFN0IsSUFBSSxDQUFDO1lBQ0QsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUNkLFVBQVUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxHQUFHLGNBQWMsQ0FBQztnQkFDaEQsU0FBUyxDQUFDLElBQUksRUFBRSxhQUFhLEdBQUcsZUFBZSxDQUFDO2FBQ25ELENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzlCLENBQUM7UUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQztJQUNMLENBQUM7SUFFRCxrQkFBa0I7UUFDZCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RCxvQ0FBb0M7UUFDcEMsMkVBQTJFO1FBQzNFLElBQUksT0FBTyxZQUFZLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDdEMsTUFBTSxJQUFJLEtBQUssQ0FDWCw2R0FBNkcsQ0FDaEgsQ0FBQztRQUNOLENBQUM7UUFDRCxvQ0FBb0M7UUFDcEMsMkVBQTJFO1FBQzNFLE1BQU0sUUFBUSxHQUFHLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDbkQsV0FBVyxFQUFFLGNBQWM7U0FDOUIsQ0FBQyxDQUFDO1FBQ0gsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RCLENBQUM7Q0FDSiJ9