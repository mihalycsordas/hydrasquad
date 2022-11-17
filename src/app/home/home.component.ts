import {Component} from '@angular/core';
import {NavigationItem} from "@app/header/models/navigation-item.interface";
import {PATHS} from "@app/app-paths";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
