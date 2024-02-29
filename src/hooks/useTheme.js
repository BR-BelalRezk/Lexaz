import { useContext } from "react";
import { AppThemeContext } from "../context/AppTheme";

export default function useTheme() {
  const context = useContext(AppThemeContext);
  if (!context || context === null || context === undefined) {
    throw new Error(
      "use the useTheme hook inside the AppTheme provider component"
    );
  }
  return context;
}
