import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

import HydroSurvey from "./pages/services/hydro-survey/HydroSurvey";
import BoreholeDrilling from "./pages/services/borehole-drilling/BoreholeDrilling";
import CameraInspection from "./pages/services/camera-inspection/CameraInspection";
import TestPumping from "./pages/services/test-pumping/TestPumping";
import PumpInstallation from "./pages/services/pump-installation/PumpInstallation";
import SolarInstallation from "./pages/services/solar-installation/SolarInstallation";
import TowerConstruction from "./pages/services/tower-construction/TowerConstruction";

import NotFound from "./pages/not-found/NotFound";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <section className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />

        <Route
          path="/borehole-drilling-in-kenya"
          element={<BoreholeDrilling />}
        />
        <Route
          path="/camera-inspection"
          element={<CameraInspection />}
        />
        <Route path="/hydro-geological-survey" element={<HydroSurvey />} />
        <Route
          path="/pump-installation"
          element={<PumpInstallation />}
        />
        <Route
          path="/solar-installation"
          element={<SolarInstallation />}
        />
        <Route path="/test-pumping" element={<TestPumping />} />
        <Route
          path="/tower-construction"
          element={<TowerConstruction />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
