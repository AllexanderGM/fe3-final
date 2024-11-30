import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layouts/Layout";

import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/favs" element={<Favs />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
