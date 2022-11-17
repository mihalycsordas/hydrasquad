import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PATHS} from './app-paths';

const routes: Routes = [
    {
        path: PATHS.home.main,
        data: {title: 'Home'},
        loadChildren: () => import('./home/home-routing.module').then(m => m.HomeRoutingModule)
    },
    {
        path: PATHS.about_us.main,
        data: {title: 'Rólunk'},
        loadChildren: () => import('./about-us/about-us-routing.module').then(m => m.AboutUsRoutingModule)
    },
    {
        path: PATHS.partners.main,
        data: {title: 'Partnerek'},
        loadChildren: () => import('./partners/partners-routing.module').then(m => m.PartnersRoutingModule)
    },
    {
        path: PATHS.events.main,
        data: {title: 'Események'},
        loadChildren: () => import('./events/events-routing.module').then(m => m.EventsRoutingModule)
    },
    {
        path: PATHS.contact.main,
        data: {title: 'Kapcsolat'},
        loadChildren: () => import('./contact-us/contact-us-routing.modulte').then(m => m.ContactUsRoutingModule)
    },
    {path: '', redirectTo: PATHS.home.main, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
