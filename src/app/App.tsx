import { StoreProvider } from "@/app/providers/StoreProvider";
import { AppRouter } from "@/app/providers/Router";
import "@/app/styles/index.scss";

export default function App() {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  );
}
