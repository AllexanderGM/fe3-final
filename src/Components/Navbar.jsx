import { useContext } from "react";

import {
    Navbar as NextUiNavbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarContent,
    NavbarItem,
    Button,
} from "@nextui-org/react";

import { Link } from "react-router-dom";

import logo from "/DH.ico";

import { ContextGlobal } from "./utils/global.context";
//Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
    const { dispatch } = useContext(ContextGlobal);

    const menuItems = [
        {
            name: "Inicio",
            url: "/home",
        },
        {
            name: "Destacados",
            url: "/favs",
        },
        {
            name: "Contacto",
            url: "/contact",
        },
    ];

    const handlerDarkMode = () => {
        dispatch({ type: "THEME" });
    };

    return (
        <NextUiNavbar disableAnimation isBordered>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <img src={logo} alt="logo" className="w-8 h-8 pr-1" />
                    <p className="font-bold text-inherit">Odontología</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarBrand>
                    <img src={logo} alt="logo" className="w-8 h-8 pr-1" />
                    <p className="font-bold text-inherit">Odontología</p>
                </NavbarBrand>

                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item}-${index}`}>
                        <Link
                            to={item.url}
                            size="lg"
                            className="w-full"
                            color={index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"}
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="warning" to="#" variant="flat" onClick={handlerDarkMode}>
                        <span className="material-symbols-outlined">dark_mode</span>
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"}
                            to={item.url}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </NextUiNavbar>
    );
};

export default Navbar;
