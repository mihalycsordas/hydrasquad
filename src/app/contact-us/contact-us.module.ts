import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactUsComponent} from './contact-us.component';
import {AtomsModule} from "@atoms/atoms.module";
import {ContactUsRoutingModule} from "@app/contact-us/contact-us-routing.modulte";

@NgModule({
    imports: [
        CommonModule,
        AtomsModule,
        ContactUsRoutingModule
    ],
    exports: [
        ContactUsComponent
    ],
    declarations: [ContactUsComponent]
})

export class ContactUsModule {
}
