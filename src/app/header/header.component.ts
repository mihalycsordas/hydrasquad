import {Component} from '@angular/core';
import {PATHS} from '../app-paths';
import {NavigationItem} from "@app/header/models/navigation-item.interface";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    listItems: Array<NavigationItem> = [
        {
            itemLabel: 'Gallery',
            itemLink: `/${PATHS.home.main}`,
        },
        {
            itemLabel: 'About us',
            itemLink: `/${PATHS.about_us.main}`,
        },
        {
            itemLabel: 'Partners',
            itemLink: `/${PATHS.partners.main}`,
        },
        {
            itemLabel: 'Events',
            itemLink: `/${PATHS.events.main}`,
        },
        {
            itemLabel: 'Contact us',
            itemLink: `/${PATHS.contact.main}`,
        }
    ];

}
