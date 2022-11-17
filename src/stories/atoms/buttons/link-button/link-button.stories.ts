import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import { LinkButtonComponent } from './link-button.component';

export default {
    title: 'Atoms/Buttons/Link buttons',
    component: LinkButtonComponent,
    decorators: [
        moduleMetadata({
            imports: [CommonModule, RouterTestingModule],
            declarations: [LinkButtonComponent],
        }),
    ],
    argTypes: {
        size: {
            defaultValue: 'normal',
            description: 'You can choose button size',
            control: {
                type: 'select',
                options: ['small', 'normal', 'large'],
            },
        },
        color: {
            defaultValue: 'primary',
            description: 'Select button color style',
            control: {
                type: 'select',
                options: ['primary', 'secondary'],
            },
        },
    },
} as Meta;

const template: Story<LinkButtonComponent> = (args: LinkButtonComponent) => ({
    props: args,
});

export const PrimaryLink = template.bind({});
PrimaryLink.args = {
    href: '',
    routerLink: '',
    size: 'small',
    color: 'primary',
    text: 'Register now',
};

export const SecondaryLink = template.bind({});
SecondaryLink.args = {
    href: '',
    routerLink: '',
    size: 'small',
    color: 'secondary',
    text: 'Register now',
};
