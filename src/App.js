import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
} from "./pages";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />}></Route>
        </Route>
        <Route>
          <Route path="about" element={<AboutPage />}></Route>
        </Route>
        <Route>
          <Route path="cart" element={<CartPage />}></Route>
        </Route>
        <Route>
          <Route path="products" element={<Products />}></Route>
        </Route>
        <Route>
          <Route path="products/:id" element={<SingleProduct />}></Route>
        </Route>
        <Route>
          <Route path="checkout" element={<CheckoutPage />}></Route>
        </Route>
        <Route>
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
