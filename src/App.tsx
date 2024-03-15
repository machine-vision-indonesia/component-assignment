import { QueryClientProvider } from "@tanstack/react-query";
import Autocomplete from "./components/Autocomplete";
import { queryClient } from "./utils";

function App() {
  const fetchOptions = async () => {
    return [
      {
        label: "asd",
        value: "asd"
      }
    ];
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Autocomplete
        label="Test"
        options={fetchOptions}
        />
    </QueryClientProvider>
  );
}

export default App;
