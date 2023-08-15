import { useContext, createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <AppContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
