import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import KlinikObat from "./pages/KlinikObat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:slug" element={<ProjectDetail />} />
      <Route path="/project/klinikobat" element={<KlinikObat />} />
    </Routes>
  );
}

export default App;
