import Vue from 'vue';
import Vuex from 'vuex';

const endPoint = 'https://restcountries.eu/rest/v2/';
const fields = [
  'name',
  'population',
  'region',
  'capital',
  'flag',
  'nativeName',
  'subregion',
  'topLevelDomain',
  'currencies',
  'languages',
].join(';');

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loadingState: false,
    darkMode: false,
    countries: [],
  },
  getters: {
    loading(state) {
      return state.loadingState;
    },
    getCountries: state => query => {
      if (state.countries.length == 0) {
        return [];
      }

      return state.countries.filter(country => {
        let search = true;
        let region = true;

        if (query.query) {
          search = country.name.indexOf(query.query) === 0;
        }

        if (query.region) {
          region = country.region === query.region;
        }

        return search && region;
      });
    },
  },
  mutations: {
    changeLoading(state, payload) {
      state.loadingState = payload;
    },
    changeMode(state) {
      state.dark = !state.dark;
    },
    changeCountries(state, payload) {
      state.countries = payload;
    },
  },
  actions: {
    getCountries({ state, commit }) {
      if (state.countries.length == 0 && !state.loadingState) {
        commit('changeLoading', true);

        fetch(endPoint + 'all?fields=' + fields)
          .then(d => {
            console.log(d);

            d.json()
              .then(data => {
                commit('changeCountries', data);
                commit('changeLoading', false);
              })
              .catch(() => {
                commit('changeLoading', false);
              });
          })
          .catch(e => {
            commit('changeLoading', false);
            console.error(e);
          });
      }
    },
  },
});

export default store;
