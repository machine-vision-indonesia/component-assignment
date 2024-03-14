import { QueryClientProvider } from "@tanstack/react-query";
import { Autocomplete } from "./components/Autocomplete";
import { queryClient } from "./utils";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Autocomplete />
    </QueryClientProvider>
  );
}

export default App;
