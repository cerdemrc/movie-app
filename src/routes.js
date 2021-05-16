export const routes = [{
        path: "/",
        name:"Movies",
        component: () => 
            import(/* webpackChunkName: "movies" */ './components/Movies')
    },
    {
        path: "/favorites",
        name:"Favorites",
        component: () => 
            import(/* webpackChunkName: "favorites" */ './components/Favorites')
    }
]