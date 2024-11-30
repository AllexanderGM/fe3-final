import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

const NotFound = () => {
    return (
        <div>
            <h1>404 Not Found</h1>

            <Link to="/">
                <Button color="primary">Volver al inicio</Button>
            </Link>
        </div>
    );
};

export default NotFound;
