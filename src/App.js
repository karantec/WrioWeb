import { Routes, Route } from "react-router-dom";
import PersonalWebsiteDevelopment from "./Components/SectionDesign/ITDesign";

import Navbar from "./Components/HomePage/Navbar";
import Footer from "./Components/Foot/Footer";
import Home from "./Components/HomePage/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/it-design" element={<PersonalWebsiteDevelopment />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
