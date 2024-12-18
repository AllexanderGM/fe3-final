import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";


const Detail = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    console.log(id);
    const API = `https://jsonplaceholder.typicode.com/users/${id}`;

    useEffect(() => {
        const callApi = async (urlApi) => {
            try {
                const response = await fetch(urlApi);
                const data = await response.json();
                console.log(data);
                setUser(data);
            } catch (error) {
                console.log(error);
            }
        };

        callApi(API);
    }, [id, API]);

    return (
        <>
        <h1 className="title">Detalles del Dentista:</h1>
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>NOMBRE</TableColumn>
                    <TableColumn>TELÉFONO</TableColumn>
                    <TableColumn>CORREO</TableColumn>
                    <TableColumn>SITIO WEB</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                            <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
                                {user.website}
                            </a>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
};

export default Detail;
