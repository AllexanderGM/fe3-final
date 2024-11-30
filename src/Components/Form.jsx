import React, { useReducer } from "react";
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import Message from "./Message";

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
                <Message name={state.name}/>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label><b>Name:</b></label>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Input value={state.name} type="text" onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}placeholder="Enter your name" />
                      </div>
                    <label><b>Email:</b></label>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Input value={state.email} type="email" onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}placeholder="Enter your email" />
                      </div>
                      <Button type="submit" color="primary">Enviar Formulario</Button>
                    {state.error && <p style={{ color: "red" }}>Por favor chequea que la información sea correcta</p>}
                </form>
            )}
        </div>
    );
};

export default Form;
