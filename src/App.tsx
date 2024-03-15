import { QueryClientProvider } from "@tanstack/react-query";
import Autocomplete from "./components/Autocomplete";
import { queryClient } from "./utils";

function App() {
  const fetchOptions = async () => {
    return [
      {
        label: "dummy",
        value: "dummy"
      }
    ];
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Autocomplete
        label="Autocomplete"
        options={fetchOptions}
        />
    </QueryClientProvider>
  );
}

export default App;
