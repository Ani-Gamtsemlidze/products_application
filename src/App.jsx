import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from "./components/homeSlider/Slider";
import Header from "./components/layout/Header";
import HomePage from "./pages1/page_navigation/HomePage";
import PageNav from "./pages1/page_navigation/PageNav";
import Smartphones from "./pages1/page_navigation/SmartphonesPage";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <PageNav />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/smartphones" element={<Smartphones />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
