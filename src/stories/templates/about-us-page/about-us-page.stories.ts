import {Meta, moduleMetadata, Story} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {OrganismsModule} from "@organisms/organisms.module";
import {RouterTestingModule} from "@angular/router/testing";
import AboutUsPageComponent from "./about-us-page.component";

export default {
    title: 'Templates/AboutUsPage',
    component: AboutUsPageComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, OrganismsModule, RouterTestingModule],
        }),
    ],
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
        layout: 'fullscreen',
    },
} as Meta;

const Template: Story<AboutUsPageComponent> = (args: AboutUsPageComponent) => ({
    props: args,
});

export const AboutUsPage = Template.bind({});
AboutUsPage.args = {
    listItems: [
        {
            itemLabel: 'Nav 1',
            itemLink: '#'
        },
        {
            itemLabel: 'Nav 2',
            itemLink: '#'
        },
        {
            itemLabel: 'Nav 3',
            itemLink: '#'
        },
    ],
    titleText: 'Lorem ipsum',
    titleDescription: 'Lorem ipsum dolor sit amet',
    image: 'https://via.placeholder.com/500',
    content: 'This is a test content'
}
