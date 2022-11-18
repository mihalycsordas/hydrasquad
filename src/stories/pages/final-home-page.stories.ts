import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "@app/home/home.component";
import {TemplatesModule} from "../templates/templates.module";
import {RouterTestingModule} from "@angular/router/testing";
import {HomePage} from "../templates/home-page/home-page.stories";

export default {
    title: 'Pages/FinalHomePage',
    component: HomeComponent,
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

const Template: Story<HomeComponent> = (args: HomeComponent) => ({
    props: args,
});

export const FinalHomePage = Template.bind({});
FinalHomePage.args = {}

FinalHomePage.parameters = {
    chromatic: { viewports: [320, 1200] },
};
