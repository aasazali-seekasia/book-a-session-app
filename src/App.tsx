import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home.tsx";
import SessionsPage from "./pages/Sessions.tsx";
import SessionPage from "./pages/Session.tsx";
import Root from "./pages/Root.tsx";
import { SessionContextProvider } from "./store/sessions-context.tsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "sessions", element: <SessionsPage /> },
      { path: "sessions/:id", element: <SessionPage /> },
    ],
  },
]);

function App() {
  return (
    <SessionContextProvider>
      <RouterProvider router={Router} />;
    </SessionContextProvider>
  );
}

export default App;
