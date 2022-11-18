import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {HomeRoutingModule} from "@app/home/home-routing.module";
import {TemplatesModule} from "../../stories/templates/templates.module";
import TemplateHomePageComponent from "../../stories/templates/home-page/home-page.component";

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        HomeRoutingModule,
        TemplatesModule,
    ],
    exports: [
        HomeComponent,
        TemplateHomePageComponent
    ],
    declarations: [HomeComponent]
})

export class HomeModule {

}
