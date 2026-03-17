import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Jobs from "./pages/Jobs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/stories" element={<Stories />} />

        <Route path="/jobs" element={<Jobs />} />

      </Routes>
    </BrowserRouter>
  );
}
