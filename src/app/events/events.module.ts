import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsComponent} from './events.component';
import {RouterModule} from '@angular/router';
import {I18nModule} from '../services/i18n/i18n.module';
import {AtomsModule} from "@atoms/atoms.module";
import {EventsRoutingModule} from "@app/events/events-routing.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AtomsModule,
        EventsRoutingModule,
        I18nModule,
    ],
    exports: [
        EventsComponent
    ],
    declarations: [EventsComponent]
})

export class EventsModule {

}
