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
      <section className={s.intro}>
        <div className={s["intro-content"]}>
          <h1 className={s["intro-title"]}>Designed for everyday use</h1>

          <p className={s["intro-text"]}>
            We focus on timeless pieces made for daily wear. Clean silhouettes,
            neutral tones and thoughtful details — designed to last beyond the
            season.
          </p>
        </div>
      </section>

      <section className={s.products}>
        <h2>Browse Products</h2>
        <div className={s["search-wrapper"]}>
          <SearchBar products={products} />
        </div>

        {loading ? (
          <Loader text="Loading products..." />
        ) : notFound ? (
          <>
            <h2>Products not found</h2>
            <p>We couldn’t load the products. Please try again.</p>
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
      </section>
    </section>
  );
}
