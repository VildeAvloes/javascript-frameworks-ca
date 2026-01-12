import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/getProducts";
import s from "./ProductPage.module.scss";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const item = await getProductById(id);

      setProduct(item);
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading…</p>;
  }

  const hasDiscount = product.price !== product.discountedPrice;
  const savings = product.price - product.discountedPrice;

  return (
    <section className={s.container}>
      <h1 className={s.title}>{product.title}</h1>
      <div className={s["image-wrapper"]}>
        {product.image?.url && (
          <img
            className={s.image}
            src={product.image.url}
            alt={product.image.alt || product.title}
          />
        )}
      </div>

      <p className={s.description}>{product.description}</p>

      <div>
        {hasDiscount ? (
          <>
            <div className={s["price-info"]}>
              <p className={s["discounted-price"]}>
                {product.discountedPrice}kr
              </p>

              <p className={s["original-price"]}>
                Original price: {product.price}kr
              </p>

              <p className={s.savings}>Save {savings}kr</p>
            </div>
          </>
        ) : (
          <p className={s.price}>{product.price}kr</p>
        )}
      </div>

      <button
        type="button"
        className={"cta"}
        onClick={() => console.log("add to cart")}
      >
        Add to cart
      </button>
    </section>
  );
}
