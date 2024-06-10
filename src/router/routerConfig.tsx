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
        path: "actualizar/:id",
        element: <Actualizar />,
    },
    {
        path: "detalle/:tareaId",
        element: <Detalle />,
    },
    {
        path: "rickandmorty",
        element: <RickAndMorty />,
    },
    {
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
