import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Employees from "./pages/Employees";
import EmployeeDetail from "./pages/EmployeeDetail";
import CalenderView from "./pages/CalenderView";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";
import Signin from "./pages/Signin";
import User from "./pages/User";

function App() {
  const queryClient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/attendance",
          element: <Attendance />,
        },
        {
          path: "/employees",
          element: <Employees />,
        },
        {
          path: "/employees/:id",
          element: <EmployeeDetail />,
        },
        {
          path: "/employees/:id/details",
          element: <CalenderView />,
        },
        {
          path: "/user",
          element: <User />,
        },
        {
          path: "*",
          element: <h1>404 Page not found</h1>,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position="top-center" />
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
