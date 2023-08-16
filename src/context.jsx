import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState(0);
  const [isInCart, setIsInCart] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [activeTnNumber, setActiveTnNumber] = useState(0);
  const [stock, setStock] = useState(5);

  return (
    <AppContext.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        items,
        setItems,
        isInCart,
        setIsInCart,
        isModal,
        setIsModal,
        activeTnNumber,
        setActiveTnNumber,
        stock,
        setStock,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
