import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PartnersComponent} from './partners.component';
import {PartnersModule} from './partners.module';

const routes: Routes = [
    {
        path: '',
        component: PartnersComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class PartnersRoutingModule {
}
