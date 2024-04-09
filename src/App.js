import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNavigation from "./components/topNavigation/TopNavigation";
import Services from "./pages/ServicesPage";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <Router>
      <TopNavigation />
      <Routes>
        <Route path="/" element={<Services />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
