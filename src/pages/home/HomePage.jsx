import { useEffect, useState } from "react";
import { getProducts } from "../../api/getProducts";
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
    <div className={s.wrapper}>
      <h1>Products</h1>
      <ul className={s.grid}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
