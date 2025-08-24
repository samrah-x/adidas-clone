import { createContext, type ReactNode } from "react";
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
}

interface ShopProviderProps {
  children: ReactNode;
}

export const ShopContext = createContext<ShopContextValue>({} as ShopContextValue);


export const ShopContextProvider = ({ children }: ShopProviderProps) => {
  const contextValue: ShopContextValue = { products };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};
