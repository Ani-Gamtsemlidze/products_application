import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import HomePage from "./pages/page_navigation/HomePage";
import Products from "./pages/page_navigation/Products";
import "./index.css";
import NavigationPage from "./pages/page_navigation/NavigationPage";
import AllProducts from "./pages/page_navigation/AllProducts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavigationPage />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/allproducts" element={<AllProducts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
