import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import Homepage, { loader as HomepageLoader } from "./pages/Homepage";
import ViewCreator from "./pages/creators/ViewCreator";
import AddCreator from "./pages/creators/AddCreator";
import EditCreator from "./pages/creators/EditCreator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: HomepageLoader,
      },
      {
        path: "/addCreator",
        element: <AddCreator />,
        // action: addCreatorAction,
      },
      {
        path: "/creators/:creatorId",
        element: <ViewCreator />,
      },
      {
        path: "/creators/:creatorId/edit",
        element: <EditCreator />,
        // action: editCreatorAction,
      },
      {
        path: "/creators/:creatorId/delete",
        // action: deleteCreatorAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
