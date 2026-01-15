import { useEffect, useState } from "react";
import { getProducts } from "../../api/getProducts";
import SearchBar from "../../components/products/search-bar/SearchBar";
import ProductCard from "../../components/products/product-card/ProductCard";
import s from "./HomePage.module.scss";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const items = await getProducts();
      setProducts(items);
    }
    fetchProducts();
  }, []);

  return (
    <section className={s.container}>
      <h1>Products</h1>
      <div className={s["search-wrapper"]}>
        <SearchBar />
      </div>

      <ul className={s.grid}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
