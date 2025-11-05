import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Footer from "./Components/Layout/Footer/Footer";
import Home from "./Components/Pages/Home/Home";
import Services from "./Components/Pages/Services/Services";
import DiscoverSection from "./Components/Pages/DiscoverSection/DiscoverSection";
import Contact from "./Components/Pages/Contact/Contact";
import FlightSearch from "./Components/Pages/FlightSearch/FlightSearch";
import Accomodation from "./Components/Pages/Accomodation/Accomodation";
import Car from "./Components/Pages/Car/Car";
import Login from "./Components/Pages/Auth/Login";
import Signup from "./Components/Pages/Auth/Signup";
import Profil from "./Components/Pages/Auth/Profil";
import MesReservations from "./Components/Pages/Auth/MesReservations";
import Tourisme from "./Components/Pages/Tourisme/Tourisme";
import CircuitTouristique from "./Components/Pages/CircuitTouristique/CircuitTouristique";

function AppContent() {
  const location = useLocation();

  // --- On cache Navbar et Footer sur les pages Login et Signup ---
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/discover" element={<DiscoverSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/flight-search" element={<FlightSearch />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/car" element={<Car />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/mes-reservations" element={<MesReservations />} />
        <Route path="/tourisme" element={<Tourisme />} />
        <Route path="/circuit" element={<CircuitTouristique />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
