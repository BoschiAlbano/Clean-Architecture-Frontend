import { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRouter } from "./router/Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Suspense fallback={<h1>Cargandoo...</h1>}>
                    <AppRouter />
                </Suspense>
            </Router>
        </Provider>
    );
}

export default App;
