import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Background } from "./layouts/Background";
import { Homepage } from "./layouts/homepage/Homepage";
import { Portfolio } from "./layouts/portfolio/Portfolio";
import { Layout } from "./layouts/Layout";
import { About } from "./layouts/about/About";

function App() {
  return (
    <>
      <Background />
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
