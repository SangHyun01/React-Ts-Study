import { useReducer } from "react";
import { themeReducer, initialTheme, THEME_ACTIONS } from "../reducers/themeReducer";
import { ThemeContext } from "./ThemeContextInstance";

// Context Provider 컴포넌트
const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialTheme);

  // Context 값 구성
  const contextValue = {
    state,
    dispatch,
    actions: {
      toggleTheme: () => dispatch({ type: THEME_ACTIONS.TOGGLE_THEME }),
      setTheme: (mode) => dispatch({ type: THEME_ACTIONS.SET_THEME, payload: mode })
    }
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
