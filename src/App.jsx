import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from "./components/homeSlider/Slider";
import Header from "./components/layout/Header";
import HomePage from "./pages/page_navigation/HomePage";
import PageNav from "./pages/page_navigation/PageNav";
import Smartphones from "./pages/page_navigation/SmartphonesPage";
import "./index.css";
import HomeDecorPage from "./pages/page_navigation/HomeDecorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <PageNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/decoration" element={<HomeDecorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
