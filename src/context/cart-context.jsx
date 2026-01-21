import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext(null);

const CART_KEY = "cart";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem(CART_KEY);
      const parsed = storedCart ? JSON.parse(storedCart) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  const removeFromCart = useCallback((removedItem) => {
    setCart((prev) => prev.filter((_, index) => index !== removedItem));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const count = cart.length;

  const total = useMemo(() => {
    const sum = cart.reduce(
      (acc, item) => acc + (item?.discountedPrice ?? 0),
      0
    );

    return Math.round(sum * 100) / 100;
  }, [cart]);

  const value = useMemo(
    () => ({ cart, count, total, addToCart, removeFromCart, clearCart }),
    [cart, count, total, addToCart, removeFromCart, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
