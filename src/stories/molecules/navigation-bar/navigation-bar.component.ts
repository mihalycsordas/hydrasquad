import {Component, Input} from "@angular/core";
import {NavigationItem} from "@app/header/models/navigation-item.interface";

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss'],
})

export class NavigationBarComponent {
    @Input() listItems: Array<NavigationItem>;
}
