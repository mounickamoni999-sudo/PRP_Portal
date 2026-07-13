import "./App.css";

import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import TrustedCompanies from "./components/TrustedCompanies/TrustedCompanies";
import SolutionsSection from "./components/SolutionsSection/SolutionsSection";
import StatisticsSection from "./components/StatisticsSection/StatisticsSection";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";
import StudentLogin from "./components/StudentLogin/StudentLogin";


function App() {
  return (
    <>
  <Header />
  <HeroSection />
  <TrustedCompanies />
  <SolutionsSection />
  <StatisticsSection />
  <TestimonialsSection />
  <CallToAction />
  <Footer />
   <StudentLogin />
  
</>
  );
}

export default App;