import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type AppContextType = {
  currency: string | undefined;
  router: AppRouterInstance;
  isSeller: boolean;
  setIsSeller: React.Dispatch<React.SetStateAction<boolean>>;
  userData: boolean;
  fetchUserData: () => void;
  products: Product[];
  fetchProductData: () => void;
  cartItems: Record<string, number>;
  setCartItems: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  addToCart: (itemId: string) => void;
  updateCartQuantity: (itemId: string, quantity: number) => void;
  getCartCount: () => number;
  getCartAmount: () => number;
};

export type Product = {
  _id: string;
  userId: string;
  name: string;
  description: string;
  price: number;
  offerPrice: number;
  image: string[];
  category: string;
  date: number;
  __v: number;
};