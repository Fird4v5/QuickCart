"use client";
import { useRouter } from "next/navigation";
import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import { productsData } from "@constants/products-data";
import { AppContextType, Product } from "../types/types";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

export const AppContextProvider = (props: { children: ReactNode }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY;
  const router = useRouter();

  const { user } = useUser();

  const [products, setProducts] = useState<Product[]>([]);
  const [userData, setUserData] = useState(false);
  const [isSeller, setIsSeller] = useState(true);

  // ✅ cart now persists via localStorage
  const [cartItems, setCartItems] = useState<Record<string, number>>({});

  // --- Load cart on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (err) {
        console.error("Failed to parse stored cart:", err);
      }
    }
  }, []);

  // --- Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const fetchProductData = async () => {
    setProducts(productsData);
  };

  const fetchUserData = async () => {
    setUserData(userData);
  };

  const addToCart = (itemId: string) => {
    let cartData: Record<string, number> = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Item added to cart successfully!");
  };

  const updateCartQuantity = (itemId: string, quantity: number) => {
    let cartData: Record<string, number> = structuredClone(cartItems);
    if (quantity === 0) {
      delete cartData[itemId];
    } else {
      cartData[itemId] = quantity;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  };

  const getCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, qty]) => {
      const itemInfo = products.find((p) => p._id === itemId);
      return itemInfo ? total + itemInfo.offerPrice * qty : total;
    }, 0);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    fetchUserData();
  }, []);

  const value = {
    user,
    currency,
    router,
    isSeller,
    setIsSeller,
    userData,
    fetchUserData,
    products,
    fetchProductData,
    cartItems,
    setCartItems,
    addToCart,
    updateCartQuantity,
    getCartCount,
    getCartAmount,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
