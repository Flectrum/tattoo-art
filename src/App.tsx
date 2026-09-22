import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Background } from "./layouts/Background";
import { Homepage } from "./layouts/home-page/Homepage";
import { Portfolio } from "./layouts/portfolio-page/Portfolio";
import { Layout } from "./layouts/Layout";
import { About } from "./layouts/about-page/About";
import { Booking } from "./layouts/booking-page/Booking";
import { Contacts } from "./layouts/contacts-page/Contacts";
import { getUserLanguage } from "./common/Languages";
import { Admin } from "./layouts/admin-page/Admin";

function App() {
  return (
    <>
      <Background />
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/${getUserLanguage()}`} replace />}
        />
        <Route path="/:lang" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="booking" element={<Booking />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
