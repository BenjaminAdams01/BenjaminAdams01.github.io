import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./components/NotFound";
import ProjectCardsPage from "./pages/ProjectCardsPage";
import AboutMePage from "./pages/AboutMePage";
import NavBar from "./components/NavBar/NavBar";

function RootLayout() {
  return (
    <div>
      <main className="main-content">
        <NavBar />
        <Outlet />
      </main>
      <ScrollRestoration />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <ProjectCardsPage /> },
      { path: "/projects/:id", element: <ProjectPage /> },
      { path: "/aboutme", element: <AboutMePage /> },
      { path: "*", element: <NotFound error="Page Not Found" /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
