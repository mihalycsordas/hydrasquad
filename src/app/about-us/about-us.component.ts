import {Component} from '@angular/core';
import {NavigationItem} from "@app/header/models/navigation-item.interface";
import {PATHS} from "@app/app-paths";

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
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

    content = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
}
