import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Products from "./components/Products/ProductsFetching";
import Footer from "./components/layout/Footer/Footer";
import { useState } from "react";
import Navigation from "./components/layout/navigation/Navigation";
import AllProducts from "./components/Products/AllProducts";
import Header from "./components/layout/Header/Header";
import HomePage from "./home_page/HomePage";
import SearchedProducts from "./search/SearchedProducts";
import InnerProduct from "./components/innerProduct/InnerProduct";
import CheckOut from "./components/layout/CheckOut/CheckOut";
import { AddCartContext } from "./Contexts/AddCartContext";

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <AddCartContext>
        <BrowserRouter>
          <div className="fixed w-full left-0 top-0 z-50">
            <Header data={data} />
            <Navigation />
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route path="/products/:id" element={<Products data={data} />} />
            <Route path="/innerProduct/:id" element={<InnerProduct />} />
            <Route
              path="/search"
              element={<SearchedProducts data={data} setData={setData} />}
            />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AddCartContext>
    </>
  );
}

export default App;
