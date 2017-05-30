import { Component } from '@angular/core';

@Component({
    selector: 'checkbox',
    template: 'Checkbox {{name}}!'
})
export class MuiCheckbox {
    name: string = 'checkbox';
}
