import { Route, Routes } from "react-router-dom";
import { routesLogin, routesPages } from "../router/routerConfig";
import React from "react";
import ProtectedRute from "./protectedRute";

const Home = React.lazy(() => import("../pages/home/home.page"));

export const AppRouter = () => {
    return (
        <>
            <Routes>
                {/* Rutas Comunes - (login y register) */}
                {routesLogin.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={route.element}
                        />
                    );
                })}

                {/* Rutas Protegidas */}
                {/* Rutas Anidadas */}
                <Route
                    path="/"
                    element={
                        <ProtectedRute>
                            <Home />
                        </ProtectedRute>
                    }
                >
                    {/* Las rutas anidadas tienen el path - relativo osea sin "/" */}
                    {/* y el Outlet en el padre*/}
                    {routesPages.map((route, index) => {
                        if (route.index) {
                            return (
                                <Route
                                    key={index}
                                    index
                                    element={route.element}
                                />
                            );
                        } else {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={route.element}
                                />
                            );
                        }
                    })}
                </Route>

                {/* Ruta not found */}
                {/* Desde el Cliente no se puede devolver un 404 - solo del servidor. */}
                <Route path="*" element={<h1>Not Fonud</h1>} />
            </Routes>
        </>
    );
};
