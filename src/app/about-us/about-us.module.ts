import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsComponent} from './about-us.component';
import {TitleSectionModule} from '../title-section/title-section.module';

@NgModule({
    imports: [
        CommonModule,

        TitleSectionModule
    ],
    exports: [
        AboutUsComponent
    ],
    declarations: [AboutUsComponent]
})

export class AboutUsModule {
}
