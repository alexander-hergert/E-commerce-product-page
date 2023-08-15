import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState(0);
  const [isInCart, setIsInCart] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        items,
        setItems,
        isInCart,
        setIsInCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
