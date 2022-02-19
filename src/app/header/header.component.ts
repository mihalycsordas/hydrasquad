import {Component} from '@angular/core';
import {NavigationItem} from '../services/navigation-item/model/navigation-item';
import {PATHS} from '../app-paths';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    listItems: Array<NavigationItem> = [
        {
            itemLabel: 'NavigationItems.HomePage',
            itemLink: `/${PATHS.home.main}`,
        },
        {
            itemLabel: 'NavigationItems.AboutUs',
            itemLink: `/${PATHS.about_us.main}`,
        },
        {
            itemLabel: 'NavigationItems.Partners',
            itemLink: `/${PATHS.partners.main}`,
        },
        {
            itemLabel: 'NavigationItems.Events',
            itemLink: `/${PATHS.events.main}`,
        },
        {
            itemLabel: 'NavigationItems.ContactUs',
            itemLink: `/${PATHS.contact.main}`,
        }
    ];

}
