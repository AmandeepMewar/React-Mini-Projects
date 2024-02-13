import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageSlider from "./components/ImageSlider/ImageSlider";

import Accordion from "./components/Accordion/Accordion";
import RandomColor from "./components/RandomColor/RandomColor";
import StartRating from "./components/StarRating/StarRating";
import HomePage from "./pages/HomePage/HomePage";

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
                    <Route path="/star-rating" element={<StartRating />} />
                    <Route
                        path="/image-slider"
                        element={
                            <ImageSlider
                                url={`https://picsum.photos/v2/list`}
                                limit={7}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
