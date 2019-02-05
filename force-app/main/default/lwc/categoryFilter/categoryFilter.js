import { LightningElement } from 'lwc';

export default class CategoryFilter extends LightningElement {
    handleCheckboxChange() {
        // 1. Get the labels of selected checkboxes
        const filters = Array.from(
            this.template.querySelectorAll('lightning-input')
        )
            .filter(element => element.checked)
            .map(element => element.label);
        
        const filterChangeEvent = new CustomEvent('filterchange', {
            detail: { filters }
        });
        // 3. Fire the custom event
        this.dispatchEvent(filterChangeEvent);
    }
}