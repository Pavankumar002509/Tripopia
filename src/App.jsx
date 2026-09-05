import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import Packages from "./pages/Packages";
import Adventure from "./pages/Adventure";
import Family from "./pages/Family";
import Honeymoon from "./pages/Honeymoon";
import Bookings from "./pages/Bookings";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TravelGuides from "./pages/TravelGuides";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/destinations" element={<Destinations />} />
        <Route
          path="/destinations/:id"
          element={<DestinationDetails />}
        />

        <Route path="/packages" element={<Packages />}>
          <Route path="adventure" element={<Adventure />} />
          <Route path="family" element={<Family />} />
          <Route path="honeymoon" element={<Honeymoon />} />
        </Route>

        <Route path="/bookings" element={<Bookings />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/about" element={<About />} />

        <Route path="/travel-guides" element={<TravelGuides />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;