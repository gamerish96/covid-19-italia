<template>
  <div class="main" id="bollettino">
    <div class="head">
      <div class="title">Coronavirus in {{ getRegione.denominazione_getRegione }}</div>
      <div class="data">Bollettino aggiornato in data: {{ convertData(getRegione.data) }}</div>
    </div>
    <b-container>
      <firstRow
        :ricoverati = "getRegione.ricoverati_con_sintomi"
        :terapia = "getRegione.terapia_intensiva"
        :ospedalizzati = "getRegione.totale_ospedalizzati"
        :isolamento = "getRegione.isolamento_domiciliare"
      />
      <secondRow
        :totalePositivi = "getRegione.totale_positivi"
        :nuoviPositivi = "getRegione.nuovi_positivi"
        :dimessi = "getRegione.dimessi_guariti"
        :deceduti = "getRegione.deceduti"
        :totaleCasi = "getRegione.totale_casi"
        :tamponi = "getRegione.tamponi"
      />
      <province
        :province = "getProvince"
      />
      <hr>
      <chart :casiTotali = "grafico.casiTotali" />
      <nazione
        :ricoverati = "getNazione.ricoverati_con_sintomi"
        :terapia = "getNazione.terapia_intensiva"
        :ospedalizzati = "getNazione.totale_ospedalizzati"
        :isolamento = "getNazione.isolamento_domiciliare"
        :totalePositivi = "getNazione.totale_positivi"
        :nuoviPositivi = "getNazione.nuovi_positivi"
        :dimessi = "getNazione.dimessi_guariti"
        :deceduti = "getNazione.deceduti"
        :totaleCasi = "getNazione.totale_casi"
        :tamponi = "getNazione.tamponi"
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
      <div class="rivolgersiContainer" id="contatti">
        <div class="rivolgersi">A chi rivolgersi?</div>
        <b-list-group>
          <b-list-group-item v-for="contatto in contatti" v-bind:key="contatto.key">
            {{ contatto.titolo }} , <b-link :href="contatto.link" target="blank">
              {{ contatto.placeholder }}
            </b-link>
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
// import { mapState } from 'vuex';
import firstRow from '@/components/firstRow.vue';
import secondRow from '@/components/secondRow.vue';
import province from '@/components/province.vue';
import nazione from '@/components/nazione.vue';
import chart from '@/components/chart.vue';

export default {
  name: 'Home',
  data() {
    return {
      grafico: {
        casiTotali: [],
      },
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
      contatti: [
        {
          titolo: 'Regione Sicilia',
          link: 'http://pti.regione.sicilia.it/portal/page/portal/PIR_PORTALE/',
          placeholder: 'Link al Sito Web',
        },
        {
          titolo: 'Numero Verde Regione Sicilia',
          link: 'tel:800 45 87 87',
          placeholder: '800 45 87 87',
        },
      ],
    };
  },
  regione: [],
  components: {
    firstRow,
    secondRow,
    province,
    nazione,
    chart,
  },
  methods: {
    convertData(oldData) {
      let array = [];
      array = oldData.split('-');
      // Prendo il terzo elemento per eliminare l'ora
      const third = array[2];
      // Prendo il primo elemento scartando l'ora
      const giorno = third.split('T');
      const newDate = giorno[0].concat('-', array[1], '-', array[0]);
      return newDate;
    },
    getStorico() {
      const path = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni.json';
      axios.get(path)
        .then((res) => {
          const result = res.data;
          const lunghezza = result.length;
          let i = 0;
          let j = 0;
          while (i < lunghezza) {
            if (result[i].codice_regione === 19) {
              const [casiTotali, dimessiGuariti, deceduti, dataCasi] = [
                result[i].totale_casi, result[i].dimessi_guariti, result[i].deceduti, j,
              ];
              this.grafico.casiTotali.push({
                casiTotali, dimessiGuariti, deceduti, dataCasi,
              });
              j += 1;
            }
            i += 1;
          }
          // (this.grafico.casiTotali);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
  },
  created() {
    // this.getProvince();
    // this.getNazione();
    this.getStorico();
  },
  mounted() {
    this.$store.dispatch('getRegione');
    this.$store.dispatch('getProvince');
    this.$store.dispatch('getNazione');
  },
  computed: {
    getRegione() {
      return this.$store.getters.retRegione[0];
    },
    getProvince() {
      return this.$store.getters.retProvince;
    },
    getNazione() {
      return this.$store.getters.retNazione[0];
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
