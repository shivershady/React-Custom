import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "pages/ErrorPage";
import Root, { loader as rootLoader, action as rootAction } from "routes/root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
