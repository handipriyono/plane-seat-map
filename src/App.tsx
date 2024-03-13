import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PlaneSeat from "./pages/PlaneSeat";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <PlaneSeat />
      </QueryClientProvider>
    </>
  );
}

export default App;
