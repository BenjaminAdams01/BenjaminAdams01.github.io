import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route
            path="*"
            element={<NotFound error="Page Not Found"></NotFound>}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
