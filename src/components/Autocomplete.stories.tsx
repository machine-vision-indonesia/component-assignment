import { Meta, StoryFn } from '@storybook/react';
import Autocomplete, { AutocompleteProps } from './Autocomplete';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  argTypes: {
    options: {
      control: null
    },
  },
} as Meta;

const Template: StoryFn<AutocompleteProps> = (args) => <Autocomplete {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  options: async () => [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
};

export const DynamicLabelAndRef = Template.bind({});
DynamicLabelAndRef.args = {
  options: async () => [
    { label: 'Option A', value: 'optionA' },
    { label: 'Option B', value: 'optionB' },
    { label: 'Option C', value: 'optionC' },
  ],
  label: 'Select an option', 
};
