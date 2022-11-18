import {Component, Input} from "@angular/core";
import {ImageInterface} from "@app/header/models/image.interface";

@Component({
    selector: 'storybook-image-gallery',
    templateUrl: './image-gallery.component.html',
    styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent {
    @Input() imageGallery: Array<ImageInterface>;
}
