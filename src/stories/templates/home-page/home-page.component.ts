import {Component, Input} from "@angular/core";
import {NavigationItem} from "@app/header/models/navigation-item.interface";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export default class TemplateHomePageComponent {
    @Input() listItems: Array<NavigationItem>;
}
