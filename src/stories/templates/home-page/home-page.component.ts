import {Component, Input} from "@angular/core";
import {NavigationItem} from "@app/header/models/navigation-item.interface";
import {ImageInterface} from "@app/header/models/image.interface";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export default class TemplateHomePageComponent {
    @Input() listItems: Array<NavigationItem>;
    @Input() imageGallery: Array<ImageInterface>;

    @Input()
    titleText: string;

    @Input()
    titleDescription: string;
}
