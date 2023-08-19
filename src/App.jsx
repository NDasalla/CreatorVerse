import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./routes/Root";
import Homepage from "./routes/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
