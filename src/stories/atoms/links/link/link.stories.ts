import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import {LinkComponent} from "./link.component";

export default {
  title: 'Atoms/Links',
  component: LinkComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      declarations: [LinkComponent],
    }),
  ],
  argTypes: {
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

const template: Story<LinkComponent> = (args: LinkComponent) => ({
  props: args,
});

export const PrimaryLink = template.bind({});
PrimaryLink.args = {
  routerLink: '',
  color: 'primary',
  text: 'Register now',
};
