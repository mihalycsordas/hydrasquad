import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {TemplatesModule} from "../templates/templates.module";
import {RouterTestingModule} from "@angular/router/testing";
import {AboutUsComponent} from "@app/about-us/about-us.component";

export default {
    title: 'Pages/FinalAboutUs',
    component: AboutUsComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, TemplatesModule, RouterTestingModule],
        }),
    ],
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
        layout: 'fullscreen',
    },
} as Meta;

const Template: Story<AboutUsComponent> = (args: AboutUsComponent) => ({
    props: args,
});

export const FinalAboutUs = Template.bind({});
FinalAboutUs.args = {}

FinalAboutUs.parameters = {
    chromatic: { viewports: [320, 1200] },
};
