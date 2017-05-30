import { Component } from '@angular/core';

@Component({
    selector: 'button',
    template: 'Button {{name}}!'
})
export class MuiButton {
    name: string = 'button';
}
