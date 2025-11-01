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
import BrandFilms from "./Components/SectionDesign/DigitalMarketing/BrandFilms";
import VoiceOver from "./Components/SectionDesign/DigitalMarketing/Voice";
import Scripting from "./Components/SectionDesign/DigitalMarketing/Scripting";
import VideoEditing from "./Components/SectionDesign/DigitalMarketing/VideoEditing";
import Graphic from "./Components/SectionDesign/DigitalMarketing/GraphicDesign";
import Photography from "./Components/SectionDesign/DigitalMarketing/Photo";
import ContentCreating from "./Components/SectionDesign/DigitalMarketing/ContentCreating";
import GoogleMyBusiness from "./Components/SectionDesign/ContentCreation/GoogleMyBusiness";
import InfluencerMarketing from "./Components/SectionDesign/ContentCreation/InfluenceMarket";
import WhatsappApi from "./Components/SectionDesign/ContentCreation/WhatsappApi";
import Seo from "./Components/SectionDesign/ContentCreation/Seo";
import MarketAuto from "./Components/SectionDesign/ContentCreation/MarketAutomation";
import PerformanceMarketing from "./Components/SectionDesign/ContentCreation/PerformanceMarketing";
import AIToolAndIntegration from "./Components/SectionDesign/Others/AIToolAndIntegration";
import FreeLearning from "./Components/SectionDesign/Others/Freelearnings";
import Marketing from "./Components/SectionDesign/Others/Marketing";
import SalesConsultancy from "./Components/SectionDesign/Others/Saleconsultancy";
import TrainingAndWorkshop from "./Components/SectionDesign/Others/TrainingandWorkshop";
import CubeAboutPage from "./Components/SectionDesign/About";
import WrioNavbar from "./Components/HomePage/Navbar";
import WrioHeroSection from "./Components/HomePage/WrioHeroSection";

function App() {
  return (
    <div className="App">
      <WrioNavbar />
      <WrioHeroSection />

      <Footer />
    </div>
  );
}
export default App;
