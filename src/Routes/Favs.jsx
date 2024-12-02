import { useEffect, useState } from "react";
import Card from "../Components/Card";

const Favs = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        console.log(storedFavorites);

        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    return (
        <>
            <h1>Dentists Favs</h1>
            <div className="card-grid">
                {/* este componente debe consumir los destacados del localStorage */}
                {favorites.map((user, index) => (
                    <Card key={index} user={user} />
                ))}
            </div>
        </>
    );
};

export default Favs;
