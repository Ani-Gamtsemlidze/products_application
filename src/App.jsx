import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Products from "./components/Products/ProductsFetching";
import Footer from "./components/layout/Footer/Footer";
import { useState } from "react";
import AddCartContext from "./Contexts/AddCartContext";
import Navigation from "./components/layout/navigation/Navigation";
import AllProducts from "./components/Products/AllProducts";
import Header from "./components/layout/Header/Header";
import HomePage from "./home_page/HomePage";
import CheckOut from "./components/layout/checkOut/CheckOut";
import SearchedProducts from "./search/SearchedProducts";
import InnerProduct from "./components/innerProduct/InnerProduct";

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
            <Route path="/all-products" element={<AllProducts />} />
            <Route
              path="/products/:id"
              element={
                <Products
                  addProduct={addProduct}
                  setAddProduct={setAddProduct}
                />
              }
            />
            <Route path="/innerProduct/:id" element={<InnerProduct />} />
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
