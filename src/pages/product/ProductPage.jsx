import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/getProducts";
import Loader from "../../components/common/loader/Loader";
import ProductDetails from "../../components/products/product-details/ProductDetails";
import s from "./ProductPage.module.scss";

export default function ProductPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      setNotFound(false);
      setProduct(null);

      try {
        const item = await getProductById(id);

        if (!item) {
          setNotFound(true);
        } else {
          setProduct(item);
        }
      } catch {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (loading) {
      document.title = "EVERY | LOADING…";
      return;
    }

    if (notFound) {
      document.title = "EVERY | PRODUCT NOT FOUND";
      return;
    }

    if (product) {
      document.title = `EVERY | ${product.title.toUpperCase()}`;
    }
  }, [loading, notFound, product]);

  return (
    <section className={s.container}>
      {loading ? (
        <Loader text="Loading product..." />
      ) : notFound ? (
        <>
          <h1>Product not found</h1>
          <p>We couldn’t find a product with id: {id}</p>
        </>
      ) : (
        product && <ProductDetails product={product} />
      )}
    </section>
  );
}
