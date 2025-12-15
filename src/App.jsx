import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import AIAssistant from "./pages/AIassitant";
import Settings from "./pages/Setting";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <Dashboard />
      </AppLayout>
    ),
  },
  {
    path: "/analytics",
    element: (
      <AppLayout>
        <Analytics />
      </AppLayout>
    ),
  },
  {
    path: "/ai",
    element: (
      <AppLayout>
        <AIAssistant />
      </AppLayout>
    ),
  },
  {
    path: "/settings",
    element: (
      <AppLayout>
        <Settings />
      </AppLayout>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
