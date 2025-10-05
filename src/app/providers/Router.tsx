import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardPage } from "@/pages/DashboardPage";
import { TransactionsPage } from "@/pages/TransactionsPage";
import { AccountsPage } from "@/pages/AccountsPage";
import { ReportsPage } from "@/pages/ReportsPage";
import { SettingsPage } from "@/pages/SettingsPage";
import { MainLayout } from "@/app/layouts/MainLayout";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      // Nested routes will be rendered inside MainLayout
      { path: "/", element: <DashboardPage /> },
      { path: "/transactions", element: <TransactionsPage /> },
      { path: "/accounts", element: <AccountsPage /> },
      { path: "/reports", element: <ReportsPage /> },
      { path: "/settings", element: <SettingsPage /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
