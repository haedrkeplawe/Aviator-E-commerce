import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import "./App.css"
import { Home } from "./pages/Home"
import { Footer } from "./components/Footer"
import { Dashboard } from "./pages/Dashboard"
import { Product } from "./pages/Product"
import { Shop } from "./pages/Shop"
import { Cart } from "./pages/cart"
import { Blog } from "./pages/blog"
import { SinglBlog } from "./pages/singlBlog"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Signin } from "./pages/Signin"
import { Login } from "./pages/Login"

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-single" element={<SinglBlog />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
