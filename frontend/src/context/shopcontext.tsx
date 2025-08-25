import { createContext, useState, type ReactNode } from "react";
import { products } from "../components/grid-row/products";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: string;
  image_offline: string;
  tag: string;
  tab: string[];
  category: string[];
}

interface ShopContextValue {
  products: ProductProps[];
  cartItems: Record<number, number>;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  getTotalCartItems: () => number;
  getTotalCartAmount: () => number;
}

interface ShopProviderProps {
  children: ReactNode;
}

export const ShopContext = createContext<ShopContextValue>({} as ShopContextValue);

const getDefaultCart = () =>{
    let cart: { [key: number]: number } = {};
    for(let index = 0; index < products.length; index++) {
      cart[products[index].id] = 0; 
    }
    return cart;
  }
  
export const ShopContextProvider = ({ children }: ShopProviderProps) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  
  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+1}));
  }
  
  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}))
  }

  console.log(cartItems);
  
  const getTotalCartItems = () =>{
    let itemCount = 0; 
    for (const item in cartItems) {
      itemCount += cartItems[item];
    }
    return itemCount;
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0; 
    for (const item in cartItems) {
      let itemInfo = products.find((product)=> product.id === Number(item));
      if (itemInfo) {
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }

  const contextValue = { products, cartItems, addToCart, removeFromCart, getTotalCartItems ,getTotalCartAmount};

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};
