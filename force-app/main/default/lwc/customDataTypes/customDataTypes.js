import LightningDatatable from 'lightning/datatable';
// @ts-expect-error HTML template import
import customPicture from './customPicture.html';
export default class CustomDataTypes extends LightningDatatable {
    // noinspection JSUnusedGlobalSymbols
    static customTypes = {
        customPictureType: {
            template: customPicture,
            standardCellLayout: true,
            typeAttributes: ['pictureUrl']
        }
        // Other Custom Types
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tRGF0YVR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VzdG9tRGF0YVR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sa0JBQWtCLE1BQU0scUJBQXFCLENBQUM7QUFDckQsd0NBQXdDO0FBQ3hDLE9BQU8sYUFBYSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE1BQU0sQ0FBQyxPQUFPLE9BQU8sZUFBZ0IsU0FBUSxrQkFBa0I7SUFDM0QscUNBQXFDO0lBQ3JDLE1BQU0sQ0FBQyxXQUFXLEdBQUc7UUFDakIsaUJBQWlCLEVBQUU7WUFDZixRQUFRLEVBQUUsYUFBYTtZQUN2QixrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLGNBQWMsRUFBRSxDQUFDLFlBQVksQ0FBQztTQUNqQztRQUNELHFCQUFxQjtLQUN4QixDQUFDIn0=