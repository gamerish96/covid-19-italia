<template>
  <div class="main" id="bollettino">
    <div class="head">
      <div class="title">Coronavirus in
        <b-form-select
        v-model="selected"
        :options="regionOptions"
        v-on:change="regionChange"></b-form-select>
      </div>
      <div class="data">Bollettino aggiornato in data: {{ convertData(region.data) }}</div>
    </div>
    <b-container>
      <firstRow
        :ricoverati = "region.ricoverati_con_sintomi"
        :terapia = "region.terapia_intensiva"
        :ospedalizzati = "region.totale_ospedalizzati"
        :isolamento = "region.isolamento_domiciliare"
        :regionName = "region.denominazione_regione"
      />
      <secondRow
        :totalePositivi = "region.totale_positivi"
        :nuoviPositivi = "region.nuovi_positivi"
        :dimessi = "region.dimessi_guariti"
        :deceduti = "region.deceduti"
        :totaleCasi = "region.totale_casi"
        :tamponi = "region.tamponi"
      />
      <province
        :provinces = "province"
      />
      <nazione
        :ricoverati = "nation.ricoverati_con_sintomi"
        :terapia = "nation.terapia_intensiva"
        :ospedalizzati = "nation.totale_ospedalizzati"
        :isolamento = "nation.isolamento_domiciliare"
        :totalePositivi = "nation.totale_positivi"
        :nuoviPositivi = "nation.nuovi_positivi"
        :dimessi = "nation.dimessi_guariti"
        :deceduti = "nation.deceduti"
        :totaleCasi = "nation.totale_casi"
        :tamponi = "nation.tamponi"
      />
      <hr>
      <div class="vamedecumContainer" id="cosaFare">
        <div class="vamedecum">Cosa fare in caso di dubbi?</div>
        <b-list-group>
          <b-list-group-item v-for="regola in regole" v-bind:key="regola.key">
            {{ regola }}
          </b-list-group-item>
        </b-list-group>
        <div class="credits">Fonte:
          <b-link href="http://www.salute.gov.it/imgs/C_17_opuscoliPoster_444_allegato.pdf" target="blank">
            www.salute.gov.it
          </b-link>
        </div>
      </div>
      <hr>

    </b-container>
  </div>
</template>

<script>
import firstRow from '@/components/firstRow.vue';
import secondRow from '@/components/secondRow.vue';
import province from '@/components/province.vue';
import nazione from '@/components/nazione.vue';
import debounce from 'lodash';

export default {
  name: 'Home',
  data() {
    return {
      selected: 13,
      regionOptions: [
        { value: 13, text: 'Abruzzo' },
        { value: 17, text: 'Basilicata' },
        { value: 4, text: 'P.A. Bolzano' },
        { value: 18, text: 'Calabria' },
        { value: 15, text: 'Campania' },
        { value: 17, text: 'Emilia-Romagna' },
        { value: 6, text: 'Friuli Venezia Giulia' },
        { value: 12, text: 'Lazio' },
        { value: 7, text: 'Liguria' },
        { value: 3, text: 'Lombardia' },
        { value: 11, text: 'Marche' },
        { value: 14, text: 'Molise' },
        { value: 1, text: 'Piemonte' },
        { value: 16, text: 'Puglia' },
        { value: 20, text: 'Sardegna' },
        { value: 19, text: 'Sicilia' },
        { value: 9, text: 'Toscana' },
        { value: 4, text: 'P.A. Trento' },
        { value: 10, text: 'Umbria' },
        { value: 2, text: 'Valle d\'Aosta' },
        { value: 5, text: 'Veneto' },
      ],

      regole: {
        1: '1. Quali sono i sintomi a cui devo fare attenzione? Febbre e sintomi simil-influenzali come tosse, mal di gola, respiro corto, dolore ai muscoli, stanchezza sono segnali di una possibile infezione da nuovo coronavirus.',
        2: '2. Ho febbre e/o sintomi influenzali, cosa devo fare? Resta in casa e chiama il medico di famiglia, il pediatra o la guardia medica.',
        3: '3. Dopo quanto tempo devo chiamare il medico? Subito. Se ritieni di essere contagiato, chiama appena avverti i sintomi di infezione respiratoria, spiegando i sintomi e i contatti a rischio.',
        4: '4. Non riesco a contattare il mio medico di famiglia, cosa devo fare? Chiama uno dei numeri di emergenza indicati sul sito www.salute.gov.it/nuovocoronavirus',
        5: '5. Posso andare direttamente al pronto soccorso o dal mio medico di famiglia? No. Se accedi al pronto soccorso o vai in un ambulatorio senza prima averlo concordato con il medico potresti contagiare altre persone.',
        6: '6. Come posso proteggere i miei familiari? Segui sempre i comportamenti di igiene personale (lavati regolarmente le mani con acqua e sapone o usa un gel a base alcolica) e mantieni pulito l`ambiente. Se pensi di essere infetto indossa una mascherina chirurgica, resta a distanza dai tuoi familiari e disinfetta spesso gli oggetti di uso comune.',
        7: '7. Dove posso fare il test? I test vengono eseguiti unicamente in laboratori del Servizio Sanitario Nazionale selezionati. Se il tuo medico ritiene che sia necessario un test ti fornirà indicazioni su come procedere.',
        8: '8. Dove trovo altre informazioni attendibili? Segui solo le indicazioni specifiche e aggiornate dei siti web ufficiali, delle autorità locali e della Protezione Civile.',
      },

    };
  },
  regione: [],
  components: {
    firstRow,
    secondRow,
    province,
    nazione,
  },
  methods: {
    convertData(oldData) {
      if (oldData !== undefined) {
        let array = [];
        array = oldData.split('-');
        // Prendo il terzo elemento per eliminare l'ora
        const third = array[2];
        // Prendo il primo elemento scartando l'ora
        const giorno = third.split('T');
        const newDate = giorno[0].concat('-', array[1], '-', array[0]);
        return newDate;
      }
      return undefined;
    },
    updateRegionData() {
      this.$store.dispatch('loadRegion', this.selected);
      this.$store.dispatch('loadProvinces', this.selected);
    },

    regionChange() {
      // Updates the region based on the selection
      debounce(this.updateRegionData(), 2000);
    },
  },
  mounted() {
    this.$store.dispatch('loadRegion', this.selected);
    this.$store.dispatch('loadProvinces', this.selected);
    this.$store.dispatch('loadNation');
  },
  computed: {
    region: {
      // getter
      // eslint-disable-next-line
      get() {
        return this.$store.getters.retRegione[0];
      },
    },
    province: {
      // getter
      // eslint-disable-next-line
      get() {
        return this.$store.getters.retProvince;
      },
      // setter
      // eslint-disable-next-line
      set() {
        this.$store.dispatch('loadProvinces', this.selected);
      },
    },
    nation: {
      // getter
      // eslint-disable-next-line
      get() {
        return this.$store.getters.retNazione[0];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  #bollettino{
    margin-top: 100px;
  }
  .main{
    background-color: #f5f6fa;
    .widgetContainer{
      // background-color: blue;
      padding: 16px;
      .iconContainer{
        width: 100%;
        // background-color: green;
        display: flex;
        justify-content: center;
        margin-bottom: 16px;
      }
      .icons{
        // background-color: red;
        width: auto;
        height: 80px;
      }
      .title{
        font-size: 1.2em;
        text-align: center;
      }
      .value{
        font-size: 3em;
        text-align: center;
      }
    }
    .head{
      // background-color: aqua;
      padding: 16px;
      .title{
        font-size: 3em;
        text-align: center;
        font-family: 'Raleway', sans-serif;
        font-weight: 300;
      }
      .data{
        font-size: 1.3em;
        text-align: center;
        font-family: 'Raleway', sans-serif;
      }
    }
    .vamedecumContainer{
      .vamedecum{
        font-size: 2.5em;
        font-family: 'Raleway', sans-serif;
        font-weight: 300;
        text-align: center;
        padding: 16px 0px;
      }
      .credits{
        margin-top: 16px;
        text-align: center;
        font-family: 'Raleway', sans-serif;
      }
    }
    .rivolgersiContainer{
      padding: 16px 0px;
      .rivolgersi{
        font-size: 2.5em;
        text-align: center;
        font-family: 'Raleway', sans-serif;
        font-weight: 300;
        padding: 16px 0px;
      }
    }
    .amazon{
      display: flex;
      justify-content: center;
      padding: 16px;
      .amazonProduct{
        margin-bottom: 16px;
      }
    }
  }
</style>
