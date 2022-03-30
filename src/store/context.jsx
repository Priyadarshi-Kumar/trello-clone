import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducers";
const initialState = [];

export const appContext = createContext(initialState);

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <appContext.Provider value={[state, dispatch]}>{children}</appContext.Provider>;
};

const useStore = () => useContext(appContext)
export default useStore;
