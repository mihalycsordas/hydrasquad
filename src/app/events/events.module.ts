import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TitleSectionModule} from '../title-section/title-section.module';
import {EventsComponent} from './events.component';
import {RouterModule} from '@angular/router';
import {I18nModule} from '../services/i18n/i18n.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        I18nModule,
        TitleSectionModule
    ],
    exports: [
        EventsComponent
    ],
    declarations: [EventsComponent]
})

export class EventsModule {

}
