/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export const AppThemeContext = createContext(null);
export default function AppTheme({ children }) {
  const [isDark, setIsDark] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDark"
  );

  function toggleTheme() {
    setIsDark((prevState) => !prevState);
  }

  useEffect(() => {
    isDark
      ? document.documentElement.classList.add("dark-mode")
      : document.documentElement.classList.remove("dark-mode");
  }, [isDark]);

  return (
    <AppThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
}
