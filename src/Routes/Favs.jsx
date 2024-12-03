import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Favs = () => {
    const { state } = useContext(ContextGlobal);

    return (
        <main>
            <h1 className="title">Dentistas favoritos</h1>
            <div className="card-grid">
                {state.fav_data.map((user, index) => (
                    <Card key={index} user={user} />
                ))}
            </div>
        </main>
    );
};

export default Favs;
