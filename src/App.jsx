import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
import Products from "./components/products/Products";
import "./index.css";
import ProductDetails from "./components/innerProduct/InnerProduct";
import Footer from "./components/layout/Footer";
import SearchedProducts from "./search/SearchedProducts";
import { useState } from "react";
import AddCartContext from "./Contexts/AddCartContext";
import CheckOut from "./components/layout/CheckOut";
import Navigation from "./components/layout/navigation/Navigation";
import AllProducts from "./components/Products/AllProducts";
function App() {
  const [addProduct, setAddProduct] = useState(0);

  return (
    <>
      <AddCartContext>
        <BrowserRouter>
          <div className="fixed w-full left-0 top-0 z-50">
            <Header addProduct={addProduct} />
            <Navigation />
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
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AddCartContext>
    </>
  );
}

export default App;
