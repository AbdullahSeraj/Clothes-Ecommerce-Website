import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Footer from "./components/Footer/Footer";
import ShopCategory from "./pages/ShopCategory";

import banner_mens from "./Assets/banner_mens.png";
import banner_women from "./Assets/banner_women.png";
import banner_kids from "./Assets/banner_kids.png";
import Signup from "./pages/Signup";

// import all_product from "./Assets/all_product";

function App() {
  // const menCat = all_product.filter((item) => item.category === "men");

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div style={{ marginBottom: "70px" }}></div>
        <div
          style={{
            minHeight: "calc(100vh - 72px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/men"
              element={<ShopCategory banner={banner_mens} category="men" />}
            />
            <Route
              path="/women"
              banner={banner_women}
              element={<ShopCategory banner={banner_women} category="women" />}
            />
            <Route
              path="/kids"
              banner={banner_kids}
              element={<ShopCategory banner={banner_kids} category="kid" />}
            />
            <Route path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
