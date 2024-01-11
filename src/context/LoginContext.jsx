import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const setLog = () => {
    setIsLogin(!isLogin);
  };

  return (
    <ThemeContext.Provider value={{ isLogin, setLog }}>
      {children}
    </ThemeContext.Provider>
  );
};
