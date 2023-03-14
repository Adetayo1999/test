import { useReducer, useContext, createContext } from "react";
import reducer, { initialState } from "./reducer";
import { ContextType } from "../../types/index";

const StoreContext = createContext({} as ContextType);

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

export default StoreProvider;
