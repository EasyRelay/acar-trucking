import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./policy/PrivacyPolicy";
import TermsOfService from "./policy/TermsOfService";
import CookiesPolicy from "./policy/CookiesPolicy";
import Index from "./components/index";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiesPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;