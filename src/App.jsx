import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Employees from "./pages/Employees";
import EmployeeDetail from "./pages/EmployeeDetail";
import CalenderView from "./pages/CalenderView";

function App() {
  const router = createBrowserRouter([
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
