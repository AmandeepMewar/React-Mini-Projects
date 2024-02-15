import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Error404 from "./pages/ErrorPage/Error404";

import ImageSlider from "./components/ImageSlider/ImageSlider";
import Accordion from "./components/Accordion/Accordion";
import RandomColor from "./components/RandomColor/RandomColor";
import StartRating from "./components/StarRating/StarRating";
import LoadMore from "./components/LoadMore/LoadMore";
import TreeView from "./components/TreeView/TreeView";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

import menuData from "./components/TreeView/TreeViewData";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import Tabs from "./components/Tabs/Tabs";

const routerDefinitions = createRoutesFromElements(
    <Route errorElement={<Error404 />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/random-color-generator" element={<RandomColor />} />
        <Route path="/star-rating" element={<StartRating />} />
        <Route
            path="/image-slider"
            element={
                <ImageSlider url={`https://picsum.photos/v2/list`} limit={7} />
            }
        />
        <Route path="/load-more" element={<LoadMore />} />
        <Route path="/tree-view" element={<TreeView menu={menuData} />} />
        <Route path="/theme-switch" element={<ThemeSwitch />} />
        <Route
            path="/scroll-progress"
            element={
                <ScrollProgress
                    url={`https://dummyjson.com/products?limit=100`}
                />
            }
        />
        <Route path="/tabs" element={<Tabs />} />
    </Route>
);

const router = createBrowserRouter(routerDefinitions);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
