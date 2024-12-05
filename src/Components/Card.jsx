import { useState, useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { PropTypes } from "prop-types";
import { Card as CardNextUi, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

import doctorImg from "/images/doctor.jpg";

const Card = ({ user }) => {
    const [isFollowed, setIsFollowed] = useState(false);
    const { dispatch } = useContext(ContextGlobal);

    const addFav = () => {
        const addUser = {
            ...user,
            checked: !isFollowed,
        };
        dispatch({ type: "FAV_DATA", payload: addUser });
        setIsFollowed(!isFollowed);
    };

    return (
        <CardNextUi className="min-w-[300px] p-1">
            <CardHeader className="justify-between">
                <div className="flex gap-5 w-full">
                    <Avatar isBordered radius="full" size="lg" src={doctorImg} />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{user.username}</h4>
                        <h5 className="text-small tracking-tight text-default-400">{user.email}</h5>
                    </div>

                    <Button
                        className={
                            isFollowed || user.checked
                                ? "btn-add-fav m-auto p-1.5"
                                : "btn-add-fav bg-transparent text-foreground border-default-200 m-auto p-1.5"
                        }
                        isIconOnly
                        color="danger"
                        radius="full"
                        size="sm"
                        variant={isFollowed || user.checked ? "solid" : "bordered"}
                        onClick={addFav}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
                                fill="currentColor"
                                stroke="currentColor"
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
                </div>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <Button className="btn" color="primary" radius="full" size="sm" variant="solid">
                        <Link to={`/detail/${user.id}`}>Ver mas</Link>
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
