import { QueryClientProvider } from "@tanstack/react-query";
import { Autocomplete } from "./components/Autocomplete";
import { queryClient } from "./utils";
import { TextField } from "@mui/material";

function App() {
  const options = async () => {
    return [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ];
  };
  return (
    <QueryClientProvider client={queryClient}>
      <Autocomplete
        renderInput={(params) => <TextField {...params} label="Autocomplete" />}
        options={options}
        queryKey="options"
      />
    </QueryClientProvider>
  );
}

export default App;
