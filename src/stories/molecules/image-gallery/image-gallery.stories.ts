import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {Story} from "@storybook/angular/types-6-0";
import {ImageGalleryComponent} from "@molecules/image-gallery/image-gallery.component";

export default {
    title: 'Molecules/ImageGallery',
    component: ImageGalleryComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule],
            declarations: [ImageGalleryComponent],
        }),
    ],
};
const template: Story<ImageGalleryComponent> = (args: ImageGalleryComponent) => ({
    props: args,
});

export const ImageBlock = template.bind({});
ImageBlock.args = {
    imageGallery: [
        {
            url: 'https://via.placeholder.com/100',
            alt: 'ss',
        },
        {
            url: 'https://via.placeholder.com/200',
            alt: 'sss',
        },
        {
            url: 'https://via.placeholder.com/300',
            alt: 'sss',
        },
    ]
};
