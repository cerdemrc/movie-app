import Movies from "./components/Movies";
import Favorites from "./components/Favorites";
import Home from "./components/Home";

export const routes = [{
        path: "/",
        component: Home
    },
    {
        path: "/movies",
        component: Movies
    },
    {
        path: "/favorites",
        component: Favorites
    }
]