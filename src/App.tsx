import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Reception />
      },
      {
        path: "floor/:floorNumber",
        element: (
          <PrivateRoute>
            <Floor />
          </PrivateRoute>
        )
      },
      {
        path: "forbidden",
        element: <Forbidden />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;