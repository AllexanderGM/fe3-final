import { createContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";

export const ContextGlobal = createContext();

export const initialState = {
    theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
    api_data: [],
    fav_data: JSON.parse(localStorage.getItem("fav_data")) || [],
    user: {
        name: "",
        email: "",
    },
};

const verifyUser = (user, arrayData) => {
    return arrayData.find((item) => item.id === user.id);
};

const reducer = (state, action) => {
    switch (action.type) {
        case "THEME":
            return { ...state, theme: state.theme === "light" ? "dark" : "light" };
        case "API_DATA":
            return { ...state, api_data: action.payload };
        case "FAV_DATA": {
            const user = action.payload;
            const arrayData = state.fav_data;

            if (verifyUser(user, arrayData)) {
                localStorage.setItem("fav_data", JSON.stringify(arrayData.filter((item) => item.id !== user.id)));
                return { ...state, fav_data: arrayData.filter((item) => item.id !== user.id) };
            } else {
                localStorage.setItem("fav_data", JSON.stringify([...arrayData, user]));
                return { ...state, fav_data: [...arrayData, user] };
            }
        }
        default:
            return state;
    }
};

export const ContextProvider = ({ children }) => {
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
    const [state, dispatch] = useReducer(reducer, initialState);
    const API = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        const callApi = async (urlApi) => {
            try {
                const response = await fetch(urlApi);
                const data = await response.json();
                dispatch({ type: "API_DATA", payload: data });
            } catch (error) {
                console.log(error);
            }
        };

        callApi(API);
    }, [dispatch]);

    return <ContextGlobal.Provider value={{ state, dispatch }}>{children}</ContextGlobal.Provider>;
};

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
