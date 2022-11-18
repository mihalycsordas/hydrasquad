import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';
import {OrganismsModule} from "../../organisms/organisms.module";
import TemplateHomePageComponent from "./home-page.component";
import {RouterTestingModule} from "@angular/router/testing";


export default {
    title: 'Templates/HomePage',
    component: TemplateHomePageComponent,
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

const Template: Story<TemplateHomePageComponent> = (args: TemplateHomePageComponent) => ({
    props: args,
});

export const HomePage = Template.bind({});
HomePage.args = {
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
        {
            url: 'https://via.placeholder.com/400',
            alt: 'sss',
        },
    ]
}
