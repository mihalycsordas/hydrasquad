import {Component, Input} from "@angular/core";
import {NavigationItem} from "@app/header/models/navigation-item.interface";

@Component({
    selector: 'app-about-us-page',
    templateUrl: './about-us-page.component.html',
    styleUrls: ['./about-us-page.component.scss'],
})
export default class AboutUsPageComponent {
    @Input() listItems: Array<NavigationItem>;

    @Input()
    titleText: string;

    @Input()
    titleDescription: string;

    @Input()
    content: string;

    @Input()
    image: string;
}
