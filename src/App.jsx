import { CartProvider } from "./context/cart-context";
import Layout from "./components/layout/layout/Layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ProductPage from "./pages/product/ProductPage";
import CartPage from "./pages/cart/CartPage";
import CheckoutSucessPage from "./pages/checkout/CheckoutSuccessPage";
import ContactPage from "./pages/contact/ContactPage";

function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout-success" element={<CheckoutSucessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
