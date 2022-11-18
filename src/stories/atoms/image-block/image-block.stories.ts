import {TitleComponent} from "@atoms/title/title.component";
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {Story} from "@storybook/angular/types-6-0";
import {ImageBlockComponent} from "@atoms/image-block/image-block.component";

export default {
    title: 'Atoms/ImageBlock',
    component: ImageBlockComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule],
            declarations: [ImageBlockComponent],
        }),
    ],
};
const template: Story<ImageBlockComponent> = (args: ImageBlockComponent) => ({
    props: args,
});

export const ImageBlock = template.bind({});
ImageBlock.args = {
    imagePath: 'https://via.placeholder.com/500',
    imageAlt: 'Lorem ipsum dolor sit amet'
};
