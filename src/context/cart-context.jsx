import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const count = cart.length;

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.discountedPrice ?? 0), 0);
  }, [cart]);

  const value = useMemo(
    () => ({ cart, count, total, addToCart, clearCart }),
    [cart, count, total, addToCart, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
