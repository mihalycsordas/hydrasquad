import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';
import OrganismsHeaderComponent from "@organisms/header/header.component";
import {MoleculesModule} from "@molecules/molecules.module";


export default {
  title: 'Organisms/Header',
  component: OrganismsHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MoleculesModule],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<OrganismsHeaderComponent> = (args: OrganismsHeaderComponent) => ({
  props: args,
});

export const Header = Template.bind({});
Header.args = {
    listItems: [
        {
            itemLabel: 'Valami',
            itemLink: '#'
        },
        {
            itemLabel: 'Valami',
            itemLink: '#'
        },
    ]
};
