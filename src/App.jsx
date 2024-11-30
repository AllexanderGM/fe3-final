import { useEffect, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ContextGlobal } from "./Components/utils/global.context";

import Layout from "./Layouts/Layout";

import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import NotFound from "./Routes/NotFound";

const App = () => {
    const { state } = useContext(ContextGlobal);

    useEffect(() => {
        if (state.theme === "dark") {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }
    }, [state.theme]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/favs" element={<Favs />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
