import { Routes, Route } from "react-router-dom";

import Header from "./Components-Landing Page/Header/Header";
import HeroSection from "./Components-Landing Page/HeroSection/HeroSection";
import TrustedCompanies from "./Components-Landing Page/TrustedCompanies/TrustedCompanies";
import SolutionsSection from "./Components-Landing Page/SolutionsSection/SolutionsSection";
import StatisticsSection from "./Components-Landing Page/StatisticsSection/StatisticsSection";
import TestimonialsSection from "./Components-Landing Page/TestimonialsSection/TestimonialsSection";
import CallToAction from "./Components-Landing Page/CallToAction/CallToAction";
import Footer from "./Components-Landing Page/Footer/Footer";

import StudentLogin from "./Components-Student Login/StudentLogin/StudentLogin";
import DashboardCards from "./Components-Dashboard/DashboardCards";
import AdminDashboard from "./Components-Admin-Dashboard/AdminDashboard";

function LandingPage() {
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
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Temporary Home Page */}
      <Route path="/" element={<AdminDashboard />} />

      {/* Other Routes */}
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/login" element={<StudentLogin />} />
      <Route path="/dashboard" element={<DashboardCards />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;