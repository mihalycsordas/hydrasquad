import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';
import HomePageComponent from "./home-page.component";
import {HeaderModule} from "../../../app/header/header.module";
import {OrganismsModule} from "../../organisms/organisms.module";
import {Input} from "@angular/core";


export default {
    title: 'Templates/HomePage',
    component: HomePageComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, OrganismsModule],
        }),
    ],
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/angular/configure/story-layout
        layout: 'fullscreen',
    },
} as Meta;

const Template: Story<HomePageComponent> = (args: HomePageComponent) => ({
    props: args,
});

export const HomePage = Template.bind({});
HomePage.args = {
    listItems: [
        {
            itemLabel: 'Valami',
            itemLink: '#'
        },
        {
            itemLabel: 'Valami',
            itemLink: '#'
        },
    ],
    titleText: 'Lorem ipsum',
    titleDescription: 'Lorem ipsum dolor sit amet',
}

HomePage.parameters = {
    // Set the viewports in Chromatic at a story level.
    chromatic: { viewports: [320, 1200] },
};
