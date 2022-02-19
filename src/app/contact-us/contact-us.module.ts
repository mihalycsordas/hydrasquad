import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactUsComponent} from './contact-us.component';
import {TitleSectionModule} from '../title-section/title-section.module';

@NgModule({
    imports: [
        CommonModule,

        TitleSectionModule
    ],
    exports: [
        ContactUsComponent
    ],
    declarations: [ContactUsComponent]
})

export class ContactUsModule {
}
