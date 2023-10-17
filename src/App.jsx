import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
import Products from "./components/Products/Products";
import "./index.css";
import NavigationPage from "./components/layout/navigation/NavigationPage";
import AllProducts from "./components/Products/AllProducts";
import ProductDetails from "./components/ProductsInner/ProductDetails";
import Footer from "./components/layout/Footer";
import SearchedProducts from "./search/SearchedProducts";
import { useState } from "react";
import AddCartContext from "./Contexts/AddCartContext";
function App() {
  const [addProduct, setAddProduct] = useState(0);

  return (
    <>
      <AddCartContext>
        <BrowserRouter>
          <div className="fixed w-full left-0 top-0 z-50">
            <Header addProduct={addProduct} />
            <NavigationPage />
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route
              path="/products/:id"
              element={
                <Products
                  addProduct={addProduct}
                  setAddProduct={setAddProduct}
                />
              }
            />
            <Route path="/innerProduct/:id" element={<ProductDetails />} />
            <Route path="/search" element={<SearchedProducts />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AddCartContext>
    </>
  );
}

export default App;
