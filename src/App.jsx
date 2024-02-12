import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Accordion from "./components/Accordion/Accordion";
import RandomColor from "./components/RandomColor/RandomColor";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/accordion" element={<Accordion />} />
                    <Route
                        path="/random-color-generator"
                        element={<RandomColor />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
