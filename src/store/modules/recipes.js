import axios from 'axios';
import { FAVOURITES_TITLES_KEY } from '@/constants';
import mockedAxios from '@/mockedAxios';

const baseState = {
  items: [],
  favouriteTitles: localStorage.getItem(FAVOURITES_TITLES_KEY)
    ? JSON.parse(localStorage.getItem(FAVOURITES_TITLES_KEY))
    : [],
  loading: false,
};

const actions = {
  async fetch({ commit, state }) {
    try {
      commit('SET_LOADING', true);

      const { favouriteTitles } = state;
      const { results = [] } = (await axios.get('/api')).data;

      const recipes = results.map(recipe => {
        return Object.assign({}, recipe, {
          favourite: favouriteTitles.includes(recipe.title),
        });
      });

      commit('SET_ITEMS', recipes);
    } finally {
      commit('SET_LOADING', false);
    }
  },
  toggleFavourite({ state, commit }, { title }) {
    if (!title) {
      return;
    }

    const titles = [...state.favouriteTitles];
    const index = titles.indexOf(title);

    if (index === -1) {
      titles.push(title);
    } else {
      titles.splice(index, 1);
    }

    localStorage.setItem(FAVOURITES_TITLES_KEY, JSON.stringify(titles));
    commit('SET_FAVOURITE_TITLES', titles);

    const items = [...state.items].map(recipe => {
      if (recipe.title === title) {
        recipe = Object.assign({}, recipe, {
          favourite: titles.indexOf(title) !== -1,
        });
      }

      return recipe;
    });

    commit('SET_ITEMS', items);
  },
  async addRecipe(store, form) {
    await mockedAxios.post('/recipes', form);
  },
  clearFavourites({ commit, state }) {
    localStorage.removeItem(FAVOURITES_TITLES_KEY);
    commit('SET_FAVOURITE_TITLES', []);

    const items = [...state.items].map(recipe => {
      return Object.assign({}, recipe, {
        favourite: false,
      });
    });
    commit('SET_ITEMS', items);
  },
};

const mutations = {
  SET_ITEMS(state, items) {
    state.items = items;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_FAVOURITE_TITLES(state, titles) {
    state.favouriteTitles = titles;
  },
};

const getters = {
  favouriteItems(state) {
    return state.items.filter(recipe => recipe.favourite);
  },
};

export default {
  namespaced: true,
  state: () => baseState,
  actions,
  mutations,
  getters,
};
