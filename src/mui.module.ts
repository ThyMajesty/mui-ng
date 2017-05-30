import { NgModule } from '@angular/core';
import { MuiButtonModule } from './button';
import { MuiCheckboxModule } from './checkbox';

@NgModule({
    imports: [MuiButtonModule, MuiCheckboxModule],
    exports: [MuiButtonModule, MuiCheckboxModule]
})
export class MuiModule {

}
