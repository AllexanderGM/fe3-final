import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const initialState = {
    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
    api_data: [],
    user: {
        name: "",
        email: "",
    },
};

export const ContextGlobal = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "THEME":
            return { ...state, theme: state.theme === "light" ? "dark" : "light" };
        case "API_DATA":
            return { ...state, api_data: action.payload };
        default:
            return state;
    }
};

export const ContextProvider = ({ children }) => {
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
    const [state, dispatch] = useReducer(reducer, initialState);

    return <ContextGlobal.Provider value={{ state, dispatch }}>{children}</ContextGlobal.Provider>;
};

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
