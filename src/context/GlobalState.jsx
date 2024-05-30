import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import { initialState } from "./AppReducer";

const GlobalContext = createContext();
export default function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{ basket: state.basket, user: state.user, dispatch: dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(GlobalContext);
};
