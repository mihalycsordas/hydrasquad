import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {Story} from "@storybook/angular/types-6-0";
import {ParagraphComponent} from "@atoms/paragraph/paragraph.component";

export default {
    title: 'Atoms/Paragraph',
    component: ParagraphComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule],
            declarations: [ParagraphComponent],
        }),
    ],
};
const template: Story<ParagraphComponent> = (args: ParagraphComponent) => ({
    props: args,
});

export const Title = template.bind({});
Title.args = {
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
};
