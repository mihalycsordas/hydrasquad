import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartnersComponent} from './partners.component';
import {AtomsModule} from "@atoms/atoms.module";
import {PartnersRoutingModule} from "@app/partners/partners-routing.module";

@NgModule({
    imports: [
        CommonModule,
        AtomsModule,
        PartnersRoutingModule
    ],
    exports: [
        PartnersComponent
    ],
    declarations: [PartnersComponent]
})

export class PartnersModule {

}
