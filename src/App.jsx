import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import CheckoutSucessPage from "./pages/CheckoutSuccessPage";
import ContactPage from "./pages/contact/ContactPage";
import Layout from "./components/layout/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CheckoutPage />} />
        <Route path="/checkout-success" element={<CheckoutSucessPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
