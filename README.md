# Custom Autocomplete Component Assignment

## Overview

This assignment entails creating a custom Material-UI Autocomplete component that meets specific requirements. Additionally, the assignee must create a Storybook story showcasing the component.

### Requirements

- Develop a custom [Material-UI Autocomplete](https://mui.com/material-ui/react-autocomplete/) component (with TypeScript).
- Implement an `options` prop to pass a function returning a Promise of an array of objects with `value` and `label` properties. This function will serve as the `queryFn` in the `useQuery` hook provided by TanStack Query.
- Ensure the component spreads the rest of the Material-UI Autocomplete properties.
- Forward the passed `ref` to the component.
- Create a Storybook story showcasing the custom Autocomplete component.

### Tools

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material-UI](https://mui.com/material-ui/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Storybook](https://storybook.js.org/)

All of the tools are installed and configured in the project. The assignee must only implement the custom Autocomplete component and create a Storybook story showcasing the component.

## Implementation

### Prerequisites

In order to run the project, you need to have Node.js and npm installed on your machine. If you don't have them installed, you can download and install them from the [official website](https://nodejs.org/). We recommend using the LTS version.

### Steps

1. Clone the repository.
2. Install the dependencies.

```bash
npm install
```

3. Create a new branch from the `main` branch.

```bash
git checkout -b feat/github-username/autocomplete main
```

4. Copy the `.env.example` file and rename it to `.env`.

```bash
cp .env.example .env
```

5. Run project.

```bash
npm run dev
```

6. Implement the custom Autocomplete component in the `src/components/Autocomplete.tsx` file.

7. Create `Autocomplete.stories.tsx` file in the `src/components` directory to showcase the component in Storybook.

### Storybook

To run Storybook, use the following command:

```bash
npm run storybook
```
