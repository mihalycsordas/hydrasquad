import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import {TitleComponent} from "./title.component";

export default {
  title: 'Atoms/Title',
  component: TitleComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
      declarations: [TitleComponent],
    }),
  ],
};
const template: Story<TitleComponent> = (args: TitleComponent) => ({
  props: args,
});

export const Title = template.bind({});
Title.args = {
    titleText: 'Lorem ipsum dolor sit amet',
    titleDescription: 'Lorem ipsum dolor sit amet'
};
