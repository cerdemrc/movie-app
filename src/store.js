import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        movies: [{
                id: 1,
                image: "felsefe-tasi",
                name: "Harry Potter and the Philosopher's Stone",
                year: "2001",
                time: "152",
                favorite: false,
            },
            {
                id: 2,
                image: "lord-of",
                name: "The Lord of the Rings: The Return of the King",
                year: "2003",
                time: "251",
                favorite: false,
            },
            {
                id: 3,
                image: "spiderman",
                name: "Spider-Man: Homecoming",
                year: "2017",
                time: "151",
                favorite: false,
            },
            {
                id: 4,
                image: "ates-kadehi",
                name: "Harry Potter and the Goblet of Fire",
                year: "2005",
                time: "157",
                favorite: false,
            },
            {
                id: 5,
                image: "zumruduanka",
                name: "Harry Potter and the Order of the Phoenix",
                year: "2007",
                time: "138",
                favorite: false,
            },
            {
                id: 6,
                image: "vendetta",
                name: "V for Vendetta",
                year: "2006",
                time: "161",
                favorite: false,
            },
            {
                id: 7,
                image: "melez-prens",
                name: "Harry Potter and the Half-Blood Prince",
                year: "2009",
                time: "153",
                favorite: false,
            },
            {
                id: 8,
                image: "son-jedi",
                name: "Star Wars: The Last Jedi",
                year: "2017",
                time: "152",
                favorite: false,
            },
            {
                id: 9,
                image: "sirlar-odasi",
                name: "Harry Potter and the Chamber of Secrets",
                year: "2002",
                time: "161",
                favorite: false,
            },
            {
                id: 10,
                image: "azkaban",
                name: "Harry Potter and the Prisoner of Azkaban",
                year: "2004",
                time: "142",
                favorite: false,
            },
        ],
        favorites: [],
        searchLists: ""
    },
    getters: {
        getMovies(state) {
            return state.movies;
        },
        getFavorites(state) {
            return state.favorites;
        },
        getSearchLists(state) {
            return state.searchLists;
        }
    },
    mutations: {
        addFavorite(state, id) {
            state.movies[id - 1].favorite = true;
            state.favorites.push(state.movies[id - 1]);
        },
        removeFavorite(state, getId) {
            state.movies[getId - 1].favorite = false;
            const index = state.favorites.findIndex(i => i.id === getId);
            state.favorites.splice(index, 1);
        },
        search(state, value) {
            const search = state.movies.filter(i => {
                return i.name.toLowerCase().match(value.toLowerCase());
            })
            state.searchLists = search;
        }
    },
    actions: {}
})

export default store;