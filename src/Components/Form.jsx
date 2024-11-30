import React, { useReducer } from "react";
import Card from "./Card";

const initialState = {
    name: "",
    email: "",
    mostrar: false,
    error: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.payload };
        case "SET_EMAIL":
            return { ...state, email: action.payload };
        case "SET_MOSTRAR":
            return { ...state, mostrar: action.payload };
        case "SET_ERROR":
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const Form = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (state.name.trim().length > 5 && emailRegex.test(state.email)) {
            dispatch({ type: "SET_MOSTRAR", payload: true });
            dispatch({ type: "SET_ERROR", payload: false });
        } else {
            dispatch({ type: "SET_ERROR", payload: true });
        }
    };

    return (
        <div>
            {state.mostrar ? (
                <Card name={state.name} email={state.email} />
            ) : (
                <form className={FormModule} onSubmit={handleSubmit}>
                    <label><b>Name:</b></label>
                    <input
                        type="text"
                        value={state.name}
                        onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
                    />
                    <label><b>Email:</b></label>
                    <input
                        type="text"
                        value={state.email}
                        onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
                    />
                    <button>Enviar Formulario</button>
                    {state.error && <p style={{ color: "red" }}>Por favor chequea que la información sea correcta</p>}
                </form>
            )}
        </div>
    );
};

export default Form;
