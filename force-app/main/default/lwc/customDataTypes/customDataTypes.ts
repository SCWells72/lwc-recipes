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
