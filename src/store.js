import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        movies: [{
                id: 1,
                search: "Harry Potter",
                image: "felsefe-tasi",
                name: "Harry Potter and the Philosopher's Stone",
                year: "2001",
                time: "152",
                favorite: false,
            },
            {
                id: 2,
                search: "Harry Potter",
                image: "sirlar-odasi",
                name: "Harry Potter and the Chamber of Secrets",
                year: "2002",
                time: "161",
                favorite: false,
            },
            {
                id: 3,
                search: "Harry Potter",
                image: "azkaban",
                name: "Harry Potter and the Prisoner of Azkaban",
                year: "2004",
                time: "142",
                favorite: false,
            },
            {
                id: 4,
                search: "Harry Potter",
                image: "ates-kadehi",
                name: "Harry Potter and the Goblet of Fire",
                year: "2005",
                time: "157",
                favorite: false,
            },
            {
                id: 5,
                search: "Harry Potter",
                image: "zumruduanka",
                name: "Harry Potter and the Order of the Phoenix",
                year: "2007",
                time: "138",
                favorite: false,
            },
            {
                id: 6,
                search: "Harry Potter",
                image: "melez-prens",
                name: "Harry Potter and the Half-Blood Prince",
                year: "2009",
                time: "153",
                favorite: false,
            },
            {
                id: 7,
                search: "Star Wars",
                image: "son-jedi",
                name: "Star Wars: The Last Jedi",
                year: "2017",
                time: "152",
                favorite: false,
            },
        ],
        favorites: []
    },
    getters: {
        getMovies(state) {
            return state.movies;
        }
    },
    mutations: {},
    actions: {}
})

export default store;