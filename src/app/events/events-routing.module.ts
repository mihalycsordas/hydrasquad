import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {EventsComponent} from './events.component';
import {EventsModule} from './events.module';

const routes: Routes = [
    {
        path: '',
        component: EventsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class EventsRoutingModule {
}
