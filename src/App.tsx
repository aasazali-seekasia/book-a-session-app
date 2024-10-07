import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error.tsx";

import HomePage from "./pages/Home.tsx";
import SessionsPage from "./pages/Sessions.tsx";
import SessionPage from "./pages/Session.tsx";
import Root from "./pages/Root.tsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "sessions", element: <SessionsPage />, errorElement: <Error />},
      { path: "sessions/:id", element: <SessionPage />, errorElement: <Error/>},
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={Router} />
  );
}

export default App;
