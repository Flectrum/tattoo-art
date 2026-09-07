import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Background } from "./layouts/Background";
import { Homepage } from "./layouts/homepage/Homepage";
import { Portfolio } from "./layouts/portfolio/Portfolio";
import { Layout } from "./layouts/Layout";
import { About } from "./layouts/about/About";
import { pictures } from "./layouts/portfolio/Pictures";
import { Booking } from "./layouts/booking/Booking";

function App() {
  return (
    <>
      <Background />
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="portfolio" element={<Portfolio pictures={pictures} />} />
          <Route path="about" element={<About />} />
          <Route path="booking" element={<Booking />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
