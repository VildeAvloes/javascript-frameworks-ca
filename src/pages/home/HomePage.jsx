import { useEffect, useState } from "react";
import Loader from "../../components/common/loader/Loader";
import { getProducts } from "../../api/getProducts";
import SearchBar from "../../components/products/search-bar/SearchBar";
import ProductCard from "../../components/products/product-card/ProductCard";
import s from "./HomePage.module.scss";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      // await new Promise((resolve) => setTimeout(resolve, 5000));

      try {
        const item = await getProducts();

        if (!item) {
          setNotFound(true);
          setProducts(null);
        } else {
          setProducts(item);
        }
      } catch (e) {
        setNotFound(true);
        setProducts(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className={s.container}>
      <h1>Products</h1>
      <div className={s["search-wrapper"]}>
        <SearchBar products={products} />
      </div>
      <>
        {loading ? (
          <Loader text="Loading product..." />
        ) : notFound ? (
          <>
            <h1 className={s.title}>Product not found</h1>
            <p className={s.description}>
              We couldn’t load the products. Please try again.
            </p>
          </>
        ) : (
          <ul className={s.grid}>
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        )}
      </>
    </section>
  );
}
