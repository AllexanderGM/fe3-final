import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

const NotFound = () => {
    return (
        <div className="error404">
            <h1 className="h1Error">404 Not Found</h1>
            <p>La pagina a la cual queres acceder no existe</p>
            <Link to="/">
                <Button color="primary">Volver al inicio</Button>
            </Link>
        </div>
    );
};

export default NotFound;
