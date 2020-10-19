<template>
  <div class="main" id="nazione">
    <hr>
    <div class="titleContainer">
      <div class="title">Dati Italia</div>
    </div>
    <b-row>
      <b-col class="widgetContainer" lg="3" md="6" sm="6" cols="6">
        <div class="title">Casi Totali</div>
        <div class="value">{{ totaleCasi }}</div>
      </b-col>
      <b-col class="widgetContainer" lg="3" md="6" sm="6" cols="6">
        <div class="title">Totale Positivi</div>
        <div class="value">{{ totalePositivi }}</div>
      </b-col>
      <b-col class="widgetContainer" lg="3" md="6" sm="6" cols="6">
        <div class="title">Nuovi Attualmente Positivi</div>
        <div class="value">+{{ nuoviPositivi }}</div>
      </b-col>
      <b-col class="widgetContainer" lg="3" md="6" sm="6" cols="6">
        <div class="title">Totale Dimessi</div>
        <div class="value">{{ dimessi }}</div>
      </b-col>
      <b-col class="widgetContainer" lg="3" md="6" sm="6" cols="6">
        <div class="title">Totale Deceduti</div>
        <div class="value">{{ deceduti }}</div>
      </b-col>
      <b-col class="widgetContainer" lg="3" md="6" sm="6" cols="6">
        <div class="title">Tamponi Effettuati</div>
        <div class="value">{{ tamponi }}</div>
      </b-col>
      <b-col class="widgetContainer" lg="3" md="6" sm="6" cols="6">
        <div class="title">Ricoverati con Sintomi</div>
        <div class="value">{{ ricoverati }}</div>
      </b-col>
      <b-col class="widgetContainer" lg="3" md="6" sm="6" cols="6">
        <div class="title">Terapia Intensiva</div>
        <div class="value">{{ terapia }}</div>
      </b-col>
      <b-col class="widgetContainer" lg="3" md="6" sm="6" cols="6">
        <div class="title">Totale Ospedalizzati</div>
        <div class="value">{{ ospedalizzati }}</div>
      </b-col>
      <b-col class="widgetContainer" lg="3" md="6" sm="6" cols="6">
        <div class="title">Isolamento Domiciliare</div>
        <div class="value">{{ isolamento }}</div>
      </b-col>
    </b-row>
    <div class="credits">Fonte dati: <b-link href="https://github.com/pcm-dpc/COVID-19" target="blank">Protezione Civile</b-link></div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: [
    'totalePositivi',
    'nuoviPositivi',
    'dimessi',
    'deceduti',
    'totaleCasi',
    'tamponi',
    'ricoverati',
    'terapia',
    'ospedalizzati',
    'isolamento'],
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
  .main{
    .titleContainer{
      padding: 16px 0px;
      text-align: center;
      .title{
        font-size: 2em;
        font-family: 'Raleway', sans-serif;
        font-weight: 300;
      }
      .subtitle{
        font-size: 1.3em;
        font-family: 'Raleway', sans-serif;
      }
    }
    .widgetContainer{
      // background-color: blue;
      padding: 16px;
      // margin-bottom: 16px;
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
        height: 40px;
      }
      .title{
        font-size: 1em;
        text-align: center;
        font-family: 'Raleway', sans-serif;
      }
      .value{
        font-size: 2em;
        text-align: center;
      }
    }
    .credits{
      text-align: center;
      font-family: 'Raleway', sans-serif;
    }
  }
</style>
