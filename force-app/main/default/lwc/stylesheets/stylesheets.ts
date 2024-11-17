import { LightningElement } from 'lwc';
// @ts-expect-error CSS import
import textStyles from './text-styles.css';

export default class Stylesheets extends LightningElement {
    static stylesheets = [textStyles];
}
