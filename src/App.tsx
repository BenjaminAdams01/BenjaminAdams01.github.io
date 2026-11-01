import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./components/NotFound";
import ProjectCardsPage from "./pages/ProjectCardsPage";
import AboutMePage from "./pages/AboutMePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <main className="main-content">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectCardsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route
            path="*"
            element={<NotFound error="Page Not Found"></NotFound>}
          />
          <Route path="/aboutme" element={<AboutMePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
