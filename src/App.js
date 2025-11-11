import { Routes, Route } from "react-router-dom";
import WrioNavbar from "./Components/HomePage/Navbar";
import Footer from "./Components/Foot/Footer";

import HomePage from "./Components/HomePage/HomePage";
import WrioAboutUs from "./Components/HomePage/About";
import WrioFeatures from "./Components/HomePage/WrioFeatures";
import ContactComponent from "./Components/HomePage/Contact";
import ScrollToTop from "./Components/HomePage/ScrollTop";

function App() {
  return (
    <div className="App">
      <WrioNavbar />
      <ScrollToTop />

      {/* ✅ Add padding top here for all pages */}
      <div className="pt-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<WrioAboutUs />} />
          <Route path="/feature" element={<WrioFeatures />} />
          <Route path="/contact" element={<ContactComponent />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
