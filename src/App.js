import { Routes, Route } from "react-router-dom";
import PersonalWebsiteDevelopment from "./Components/SectionDesign/ITDesign";

import Navbar from "./Components/HomePage/Navbar";
import Footer from "./Components/Foot/Footer";
import Home from "./Components/HomePage/Home";
import BusinessWebsiteDevelopment from "./Components/SectionDesign/Business";
import EcommerceWebsiteDevelopment from "./Components/SectionDesign/Ecommerce";
import MobileAppDevelopment from "./Components/SectionDesign/MobileApp";
import LandingPageFunnelDesign from "./Components/SectionDesign/LandingPage";
import WebsiteMaintenanceSecurity from "./Components/SectionDesign/WebsiteSecurity";
import PublicityPRServices from "./Components/SectionDesign/Publicity";
import MediaPRCoverage from "./Components/SectionDesign/MediaCoverage";
import PodcastProductionMarketing from "./Components/SectionDesign/PodCast";
import FilmEventPublicity from "./Components/SectionDesign/FilmActivity";
import WikipediaORM from "./Components/SectionDesign/Wikipedia";
import SocialMediaManagement from "./Components/SectionDesign/SocialMedia";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/it-design" element={<PersonalWebsiteDevelopment />} />
        <Route path="/business" element={<BusinessWebsiteDevelopment />} />
        <Route path="/ecommerce" element={<EcommerceWebsiteDevelopment />} />
        <Route path="/mobile-app" element={<MobileAppDevelopment />} />
        <Route path="/landingPage" element={<LandingPageFunnelDesign />} />
        <Route
          path="/website-security"
          element={<WebsiteMaintenanceSecurity />}
        />
        // New Routes Added Below
        <Route path="/publicity" element={<PublicityPRServices />} />
        <Route path="/media-coverage" element={<MediaPRCoverage />} />
        <Route path="/podcast" element={<PodcastProductionMarketing />} />
        <Route path="/film-activity" element={<FilmEventPublicity />} />
        <Route path="/wikipedia" element={<WikipediaORM />} />
        <Route path="/social-media" element={<SocialMediaManagement />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
