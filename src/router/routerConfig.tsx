import {
    Login,
    Register,
    Actualizar,
    Detalle,
    RickAndMorty,
    Listar,
} from "../pages";

export const routesPages = [
    {
        index: false,
        path: "actualizar/:id",
        element: <Actualizar />,
    },
    {
        index: false,
        path: "detalle/:tareaId",
        element: <Detalle />,
    },
    {
        index: true,
        path: "rickandmorty",
        element: <RickAndMorty />,
    },
    {
        index: false,
        path: "Obtener",
        element: <Listar />,
    },
];

export const routesLogin = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
];
