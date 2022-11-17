import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsComponent} from './about-us.component';
import {AtomsModule} from "@atoms/atoms.module";
import {AboutUsRoutingModule} from "@app/about-us/about-us-routing.module";

@NgModule({
    imports: [
        CommonModule,
        AtomsModule,
        AboutUsRoutingModule
    ],
    exports: [
        AboutUsComponent
    ],
    declarations: [AboutUsComponent]
})

export class AboutUsModule {
}
