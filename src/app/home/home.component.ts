import { Component } from '@angular/core';
import { NavigationItem } from '@app/header/models/navigation-item.interface';
import { PATHS } from '@app/app-paths';
import { ImageInterface } from '@app/header/models/image.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
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
        },
    ];

    imageGallery: Array<ImageInterface> = [
        {
            url: '../assets/img/events/terminator_savation_event.jpeg',
            alt: 'ss',
        },
        {
            url: '../assets/img/events/ORW.png',
            alt: 'sss',
        },
        {
            url: '../assets/img/events/leghosszabb_nap.jpeg',
            alt: 'sss',
        },
        {
            url: '../assets/img/events/zona-maraton.png',
            alt: 'ss',
        },
        {
            url: '../assets/img/events/3day_mosahi.png',
            alt: 'sss',
        },
        {
            url: '../assets/img/events/leghosszabb_nap.jpeg',
            alt: 'sss',
        },
    ];
}
