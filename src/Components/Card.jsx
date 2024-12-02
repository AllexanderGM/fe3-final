import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import {
    Card as CardNextUi,
    Link as LinkNextUi,
    CardHeader,
    CardBody,
    CardFooter,
    Avatar,
    Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
    const addFav = () => {
        const storedCards = JSON.parse(localStorage.getItem("favoriteCards")) || [];
        const isAlreadyFavorite = storedCards.some((card) => card.id === user.id);

        let updatedCards = isAlreadyFavorite
            ? storedCards.filter((card) => card.id !== user.id)
            : [...storedCards, user];

        localStorage.setItem("favoriteCards", JSON.stringify(updatedCards));
        setIsFollowed(!isFollowed);
    };

    const [image, setImage] = useState();

    useEffect(() => {
        const callApi = async (urlApi) => {
            try {
                const response = await fetch(urlApi);
                const data = await response.json();

                setImage(data.results[0].picture.large);
            } catch (error) {
                console.log(error);
            }
        };

        callApi("https://randomuser.me/api/");
    }, []);

    const [isFollowed, setIsFollowed] = useState(false);

    return (
        <CardNextUi className="min-w-[300px] p-1">
            <CardHeader className="justify-between">
                <div className="flex gap-5 w-full">
                    <Avatar isBordered radius="full" size="lg" src={image} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{user.username}</h4>
                        <h5 className="text-small tracking-tight text-default-400">{user.email}</h5>
                    </div>

                    <Button
                        className={
                            isFollowed
                                ? "m-auto p-1.5"
                                : "bg-transparent text-foreground border-default-200 m-auto p-1.5"
                        }
                        isIconOnly
                        color="danger"
                        radius="full"
                        size="sm"
                        variant={isFollowed ? "solid" : "bordered"}
                        onPress={addFav}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="transparent"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
                                stroke="#fff"
                                strokeWidth={1.5}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Button>
                </div>
            </CardHeader>
            <CardBody className="px-3 text-small text-default-400">
                <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600">{user.name}</h4>
                    <h4 className="flex gap-1 text-small tracking-tight text-default-400">
                        <span className="material-symbols-outlined">location_on</span>
                        {user.address.city} - {user.address.street}
                    </h4>
                    <h5 className="flex gap-1  text-small tracking-tight text-default-400">
                        <span className="material-symbols-outlined">call</span>
                        {user.phone}
                    </h5>
                    <h5 className="flex gap-1  text-small tracking-tight text-default-400">
                        <span className="material-symbols-outlined">link</span>
                        <LinkNextUi isExternal href="https://github.com/nextui-org/nextui">
                            Custom Icon
                        </LinkNextUi>
                    </h5>
                </div>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <Button color="primary" radius="full" size="sm" variant="solid">
                        <Link to={`/detail/${user.id}`}>Ver perfil</Link>
                    </Button>
                </div>
            </CardFooter>
        </CardNextUi>
    );
};

Card.propTypes = {
    user: PropTypes.object.isRequired,
};

export default Card;
