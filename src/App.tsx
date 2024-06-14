import { Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./router/Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useSwitchModeSelector } from "./redux/slices/switchMode/hook/useSwitchModeStore";

function App() {
    return (
        <Provider store={store}>
            <SwitchModeComponent />
            <Router>
                <Suspense fallback={<h1>Cargandoo...</h1>}>
                    <AppRouter />
                </Suspense>
            </Router>
        </Provider>
    );
}

export default App;

function SwitchModeComponent() {
    const mode = useSwitchModeSelector((store) => store.switchMode);

    useEffect(() => {
        mode.isDarckMode
            ? document.body.classList.add("CambiarModoCssOscuro")
            : document.body.classList.add("CambiarModoCssClaro");

        return mode.isDarckMode
            ? document.body.classList.remove("CambiarModoCssClaro")
            : document.body.classList.remove("CambiarModoCssOscuro");
    }, [mode.isDarckMode]);

    return <></>;
}
