import { useEffect, useContext } from "react";

import { ContextGlobal } from "../Components/utils/global.context";

import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    const { state, dispatch } = useContext(ContextGlobal);
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

    return (
        <main>
            <h1 className="title">Encuentra al Dentista Ideal</h1>

            <p className="paragraph">
                En esta sección, te presentamos una lista cuidadosamente seleccionada de dentistas que destacan por su
                experiencia y compromiso con tu salud bucal. ¡Elige al dentista que mejor se adapte a tus necesidades y
                comienza tu camino hacia una sonrisa saludable!
            </p>

            <div className="card-grid">
                {/* Aqui deberias renderizar las cards */}

                {state.api_data.map((user, index) => (
                    <Card key={index} user={user} />
                ))}
            </div>
        </main>
    );
};

export default Home;
