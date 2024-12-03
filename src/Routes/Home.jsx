import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    const { state } = useContext(ContextGlobal);

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
