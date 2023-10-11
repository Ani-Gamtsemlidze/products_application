import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import HomePage from "./pages/page_navigation/HomePage";
import Products from "./pages/page_navigation/Products";
import "./index.css";
import NavigationPage from "./pages/page_navigation/navigation/NavigationPage";
import AllProducts from "./pages/page_navigation/AllProducts";
import ProductDetails from "./pages/page_navigation/ProductDetails";
import Footer from "./components/layout/Footer";
import SearchedProducts from "./search/SearchedProducts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavigationPage />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/innerProduct/:id" element={<ProductDetails />} />
          <Route path="/search" element={<SearchedProducts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
