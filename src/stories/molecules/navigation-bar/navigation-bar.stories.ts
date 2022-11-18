import {LinkComponent} from "@atoms/links/link/link.component";
import {moduleMetadata} from "@storybook/angular";
import {CommonModule} from "@angular/common";
import {Meta, Story} from "@storybook/angular/types-6-0";
import {NavigationBarComponent} from "@molecules/navigation-bar/navigation-bar.component";

export default {
    title: 'Molecules/NavigationBar',
    component: NavigationBarComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule],
            declarations: [LinkComponent],
        }),
    ],
} as Meta;

const template: Story<NavigationBarComponent> = (args: NavigationBarComponent) => ({
    props: args,
});

export const NavigatinBar = template.bind({});
NavigatinBar.args = {
    listItems: [
        {
            itemLabel: 'Home',
            itemLink: '#'
        },
        {
            itemLabel: 'About us',
            itemLink: '#'
        },
        {
            itemLabel: 'Contact us',
            itemLink: '#'
        },
    ]
};
