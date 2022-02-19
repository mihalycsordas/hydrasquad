import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ContactUsComponent} from './contact-us.component';
import {ContactUsModule} from './contact-us.module';

const routes: Routes = [
    {
        path: '',
        component: ContactUsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),

        ContactUsModule
    ],
    exports: [RouterModule]
})
export class ContactUsRoutingModulte {
}
