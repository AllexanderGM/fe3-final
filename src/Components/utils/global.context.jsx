import { createContext, useReducer } from "react";

export const initialState = {
    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
    data: [],
};

export const ContextGlobal = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "THEME":
            return { ...state, theme: state.theme === "light" ? "dark" : "light" };

        default:
            return state;
    }
};

export const ContextProvider = ({ children }) => {
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
    const [state, dispatch] = useReducer(reducer, initialState);

    return <ContextGlobal.Provider value={{ state, dispatch }}>{children}</ContextGlobal.Provider>;
};
