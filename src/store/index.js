import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    regione: [
      {
        data: '00-00-2020',
        ricoverati_con_sintomi: '0',
        terapia_intensiva: '0',
        totale_ospedalizzati: '0',
        isolamento_domiciliare: '0',
        totale_positivi: '0',
        nuovi_positivi: '0',
        dimessi_guariti: '0',
        deceduti: '0',
        totale_casi: '0',
        tamponi: '0',
      },
    ],
    province: [10],
    nazione: [
      {
        stato: 'Italia',
        ricoverati_con_sintomi: '0',
        terapia_intensiva: '0',
        totale_ospedalizzati: '0',
        isolamento_domiciliare: '0',
        totale_positivi: '0',
        nuovi_positivi: '0',
        dimessi_guariti: '0',
        deceduti: '0',
        totale_casi: '0',
        tamponi: '0',
      },
    ],
  },
  mutations: {
    setRegione(state, regione) {
      state.regione = regione;
    },
    setProvince(state, province) {
      state.province = province;
    },
    setNazione(state, nazione) {
      state.nazione = nazione;
    },
  },
  actions: {
    loadRegion({ commit }, regionCode) {
      const regCode = regionCode !== undefined ? parseInt(regionCode, 10) : 13;
      // eslint-disable-next-line
      console.info('state loadRegion: ' + regionCode);

      axios
        .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json')
        .then((r) => r.data)
        .then((regione) => {
          const result = regione.filter((x) => parseInt(x.codice_regione, 10) === regCode);
          commit('setRegione', result);
        });
    },
    loadProvinces({ commit }, regionCode) {
      const regCode = regionCode !== undefined ? parseInt(regionCode, 10) : 13;

      axios
        .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json')
        .then((r) => r.data)
        .then((province) => {
          const result = province.filter((x) => parseInt(x.codice_regione, 10) === regCode);
          commit('setProvince', result);
        });
    },
    loadNation({ commit }) {
      axios
        .get('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json')
        .then((r) => r.data)
        .then((nazione) => {
          commit('setNazione', nazione);
        });
    },
  },
  modules: {
  },
  getters: {
    retRegione(state) {
      return state.regione;
    },
    retProvince(state) {
      return state.province;
    },
    retNazione(state) {
      return state.nazione;
    },
    getRegionCode(state) {
      return state.regionCode;
    },
  },
});
