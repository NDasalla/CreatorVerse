import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import Homepage, { loader as homepageLoader } from "./pages/Homepage";
import ViewCreator, {
  loader as viewCreatorLoader,
} from "./pages/creators/ViewCreator";
import AddCreator, {
  action as addCreatorAction,
} from "./pages/creators/AddCreator";
import EditCreator, {
  loader as editCreatorLoader,
  action as editCreatorAction,
} from "./pages/creators/EditCreator";
import { action as deleteCreatorAction } from "./pages/creators/DeleteCreator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: homepageLoader,
      },
      {
        path: "/addCreator",
        element: <AddCreator />,
        action: addCreatorAction,
      },
      {
        path: "/creators/:creatorId",
        element: <ViewCreator />,
        loader: viewCreatorLoader,
      },
      {
        path: "/creators/:creatorId/edit",
        element: <EditCreator />,
        loader: editCreatorLoader,
        action: editCreatorAction,
      },
      {
        path: "/creators/:creatorId/delete",
        action: deleteCreatorAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
