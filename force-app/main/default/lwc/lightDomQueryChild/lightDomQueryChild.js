import { LightningElement } from 'lwc';
// noinspection JSUnusedGlobalSymbols
export default class LightDomQueryChild extends LightningElement {
    static renderMode = 'light';
    handleButtonClick() {
        // Within Light DOM components, use this.querySelector instead of this.template.querySelector to access elements
        (this.querySelector('p.lightDomParagraph')).innerText =
            'Text changed by child';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHREb21RdWVyeUNoaWxkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlnaHREb21RdWVyeUNoaWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEtBQUssQ0FBQztBQUV2QyxxQ0FBcUM7QUFDckMsTUFBTSxDQUFDLE9BQU8sT0FBTyxrQkFBbUIsU0FBUSxnQkFBZ0I7SUFDNUQsTUFBTSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7SUFFNUIsaUJBQWlCO1FBQ2IsZ0hBQWdIO1FBQ2hILENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBdUIscUJBQXFCLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDdkUsdUJBQXVCLENBQUM7SUFDaEMsQ0FBQyJ9