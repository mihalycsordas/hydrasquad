import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartnersComponent} from './partners.component';
import {TitleSectionModule} from '../title-section/title-section.module';

@NgModule({
    imports: [
        CommonModule,
        TitleSectionModule
    ],
    exports: [
        PartnersComponent
    ],
    declarations: [PartnersComponent]
})

export class PartnersModule {

}
