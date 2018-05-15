const baseState = {
  authenticated: localStorage.getItem('loggedIn') === 'yes' || false,
};

const actions = {
  login({ commit }) {
    commit('SET_AUTHENTICATED', true);
    localStorage.setItem('loggedIn', 'yes');
  },
  logout({ commit }) {
    commit('SET_AUTHENTICATED', false);
    localStorage.removeItem('loggedIn');
  },
};

const mutations = {
  SET_AUTHENTICATED(state, value) {
    state.authenticated = value;
  },
};

export default {
  namespaced: true,
  state: () => baseState,
  actions,
  mutations,
};
