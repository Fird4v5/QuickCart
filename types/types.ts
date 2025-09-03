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

export type Order = {
  _id: string
  userId: string
  items: {
    product: {
      _id: string
      userId: string
      name: string
      description: string
      price: number
      offerPrice: number
      image: string[]
      category: string
      date: number
      __v: number
    }
    quantity: number
    _id: string
  }[]
  amount: number
  address: {
    _id: string
    userId: string
    fullName: string
    phoneNumber: string
    pincode: number
    area: string
    city: string
    state: string
    __v: number
  }
  status: string
  date: number
  __v: number
}


export type Address = {
  _id: string;
  userId: string;
  fullName: string;
  phoneNumber: string;
  pincode: number;
  area: string;
  city: string;
  state: string;
  __v: number;
};

