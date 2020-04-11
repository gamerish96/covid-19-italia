<template>
  <div class="main">
    <hr>
    <b-row>
      <b-col class="widgetContainer" lg="4" md="4" sm="6" cols="6">
        <div class="iconContainer">
          <img class="icons" src="../assets/icons/05.svg"
          alt="Icona che raffigura lo stato di pandemia">
        </div>
        <div class="title">Totale Positivi</div>
        <div class="descr">
          Ospedalizzati + isolamento domiciliare
        </div>
        <div class="value">{{ totalePositivi }}</div>
      </b-col>
      <b-col class="widgetContainer" lg="4" md="4" sm="6" cols="6">
        <div class="iconContainer">
          <img class="icons" src="../assets/icons/06.svg"
          alt="Icona che raffigura un virus">
        </div>
        <div class="title">Nuovi Attualmente Positivi</div>
        <div class="value">+{{ nuoviPositivi }}</div>
      </b-col>
      <b-col class="widgetContainer" lg="4" md="4" sm="6" cols="6">
        <div class="iconContainer">
          <img class="icons" src="../assets/icons/07.svg"
          alt="Icona che raffigura una cartella con una spunta verde">
        </div>
        <div class="title">Totale Pazienti Dimessi</div>
        <div class="value">{{ dimessi }}</div>
      </b-col>
      <b-col class="widgetContainer" lg="4" md="4" sm="6" cols="6">
        <div class="iconContainer">
          <img class="icons" src="../assets/icons/10.svg"
          alt="Icona che raffigura un cardiografo">
        </div>
        <div class="title">Totale Pazienti Deceduti</div>
        <div class="value">{{ deceduti }}</div>
      </b-col>
      <b-col class="widgetContainer" lg="4" md="4" sm="6" cols="6">
        <div class="iconContainer">
          <img class="icons" src="../assets/icons/08.svg"
          alt="Icona che raffigura una cartella">
        </div>
        <div class="title">Casi Totali</div>
        <div class="value">{{ totaleCasi }}</div>
      </b-col>
      <b-col class="widgetContainer" lg="4" md="4" sm="6" cols="6">
        <div class="iconContainer">
          <img class="icons" src="../assets/icons/09.svg"
          alt="Icona che raffigura un microscopio">
        </div>
        <div class="title">Tamponi Effettuati</div>
        <div class="value">{{ tamponi }}</div>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: ['totalePositivi', 'nuoviPositivi', 'dimessi', 'deceduti', 'totaleCasi', 'tamponi'],
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
  .main{
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
        font-size: 1em;
        text-align: center;
        font-family: 'Raleway', sans-serif;
      }
      .descr{
        font-size: 0.8em;
        text-align: center;
        font-family: 'Raleway', sans-serif;
      }
      .value{
        font-size: 2em;
        text-align: center;
      }
    }
  }
</style>
