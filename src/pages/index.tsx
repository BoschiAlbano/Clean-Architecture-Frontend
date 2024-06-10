import React from "react";
// import Home from "./home/home.page";
// export { Home };

export const Home = React.lazy(() => import("../pages/home/home.page"));
export const Actualizar = React.lazy(() => import("./task/actualizar.page"));
export const Detalle = React.lazy(() => import("./task/detalle.page"));
export const Login = React.lazy(() => import("../pages/login/login.page"));
export const Register = React.lazy(
    () => import("../pages/register/register.page")
);
export const Listar = React.lazy(() => import("./task/lista.page"));
export const RickAndMorty = React.lazy(
    () => import("./task/rickandmorty.page")
);
