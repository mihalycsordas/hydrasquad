import {Component, Input} from '@angular/core';
import {NavigationItem} from "@app/header/models/navigation-item.interface";

@Component({
    selector: 'storybook-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export default class OrganismsHeaderComponent {
    @Input() listItems: Array<NavigationItem>;
}
