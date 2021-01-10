import Movies from "./components/Movies";
import Favorites from "./components/Favorites";

export const routes = [{
        path: "/",
        component: Movies
    },
    {
        path: "/favorites",
        component: Favorites
    }
]