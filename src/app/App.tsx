import { StoreProvider } from "@/app/providers/StoreProvider";
import { AppRouter } from "@/app/providers/Router";

export default function App() {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  );
}
