import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AboutUsComponent} from './about-us.component';
import {AboutUsModule} from './about-us.module';

const routes: Routes = [
    {
        path: '',
        component: AboutUsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),

        AboutUsModule
    ],
    exports: [RouterModule]
})
export class AboutUsRoutingModule {
}
