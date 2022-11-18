import {Component, Input} from "@angular/core";

@Component({
    selector: 'storybook-image-block',
    templateUrl: './image-block.component.html',
    styleUrls: ['./image-block.component.scss'],
})
export class ImageBlockComponent {
    @Input()
    imagePath: string;

    @Input()
    imageAlt: string;
}
