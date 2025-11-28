import { Routes, Route } from "react-router-dom";

import WrioNavbar from "./Components/HomePage/Navbar";
import Footer from "./Components/Foot/Footer";

import HomePage from "./Components/HomePage/HomePage";
import WrioAboutUs from "./Components/HomePage/About";
import WrioFeatures from "./Components/HomePage/WrioFeatures";
import ContactComponent from "./Components/HomePage/Contact";
import ScrollToTop from "./Components/HomePage/ScrollTop";
import { LanguageProvider } from "./LanguageContext";
import WrioCarousel from "./Components/HomePage/WrioFeatures";

function App() {
  return (
    <LanguageProvider>
      {" "}
      {/* Wrap everything with LanguageProvider */}
      <div className="App">
        <WrioNavbar />
        <ScrollToTop />

        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about" element={<WrioAboutUs />} /> */}
            <Route path="/feature" element={<WrioCarousel />} />
            <Route path="/contact" element={<ContactComponent />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
