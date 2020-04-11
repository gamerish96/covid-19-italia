<template>
  <div>
    <hr>
    <div class="titleContainer">
      <div class="title"><h2>Dati Regione {{ regionName }}</h2></div>
    </div>
    <b-row>
      <b-col class="widgetContainer" lg="3" md="3" sm="6" cols="6">
        <div class="iconContainer">
          <img class="icons" src="../assets/icons/01.svg"
          alt="Icona che raffigura una persona che tossisce">
        </div>
        <div class="title">Ricoverati con Sintomi</div>
        <div class="value">{{ ricoverati }}</div>
      </b-col>
      <b-col class="widgetContainer" lg="3" md="3" sm="6" cols="6">
        <div class="iconContainer">
          <img class="icons" src="../assets/icons/02.svg"
          alt="Icona che raffigura dei polmoni">
        </div>
        <div class="title">Terapia Intensiva</div>
        <div class="value">{{ terapia }}</div>
      </b-col>
      <b-col class="widgetContainer" lg="3" md="3" sm="6" cols="6">
        <div class="iconContainer">
          <img class="icons" src="../assets/icons/03.svg"
          alt="Icona che raffigura un ospedale">
        </div>
        <div class="title">Totale Ospedalizzati</div>
        <div class="value">{{ ospedalizzati }}</div>
      </b-col>
      <b-col class="widgetContainer" lg="3" md="3" sm="6" cols="6">
        <div class="iconContainer">
          <img class="icons" src="../assets/icons/04.svg"
          alt="Icona che raffigura un paziente con una mascherina">
        </div>
        <div class="title">Isolamento Domiciliare</div>
        <div class="value">{{ isolamento }}</div>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: ['ricoverati', 'terapia', 'ospedalizzati', 'isolamento', 'regionName'],
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
        height: 100px;
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
  }
</style>
