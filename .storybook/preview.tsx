import type { Preview } from "@storybook/react";

import { CssBaseline } from "@mui/material";

import "@fontsource/material-icons";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../src/utils";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => {
      return (
        <>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <Story />
          </QueryClientProvider>
        </>
      );
    },
  ],
};

export default preview;
