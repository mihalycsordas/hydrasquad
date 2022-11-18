import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsComponent} from './about-us.component';
import {AboutUsRoutingModule} from "@app/about-us/about-us-routing.module";
import {TemplatesModule} from "../../stories/templates/templates.module";

@NgModule({
    imports: [
        CommonModule,
        AboutUsRoutingModule,
        TemplatesModule
    ],
    exports: [
        AboutUsComponent
    ],
    declarations: [AboutUsComponent]
})

export class AboutUsModule {
}
