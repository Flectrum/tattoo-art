import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Background } from "./layouts/Background";
import { Homepage } from "./layouts/home-page/Homepage";
import { Portfolio } from "./layouts/portfolio-page/Portfolio";
import { Layout } from "./layouts/Layout";
import { About } from "./layouts/about-page/About";
import { pictures } from "./layouts/portfolio-page/Pictures";
import { Booking } from "./layouts/booking-page/Booking";
import { Contacts } from "./layouts/contacts-page/Contacts";

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
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
