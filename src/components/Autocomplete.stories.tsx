// Autocomplete.stories.tsx

import { Meta, Story } from "@storybook/react";
import { Autocomplete } from "./Autocomplete";
import { TextField } from "@mui/material";

export default {
  title: "Autocomplete",
  component: Autocomplete,
} as Meta;

const Template: Story = (args) => (
  <Autocomplete
    queryKey="options"
    renderInput={(params) => <TextField {...params} label="Autocomplete" />}
    options={async () => {
      return [
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
        { value: "3", label: "Option 3" },
      ];
    }}
    {...args}
  />
);

export const Basic = Template.bind({});
Basic.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
