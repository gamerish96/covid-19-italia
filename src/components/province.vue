<template>
  <div class="main" id="province">
    <hr>
    <div class="titleContainer">
      <div class="title">Dati per Provincia</div>
      <div class="subtitle">Totale dei Casi Positivi</div>
    </div>
    <b-row>
      <b-col v-for="(provincia, index) in provinces" v-bind:key="provincia.key"
      class="widgetContainer" lg="3" md="4" sm="4" cols="6">
        <div class="iconContainer">
          <img class="icons" :src="require(`@/assets/icons/city/0${index}.svg`)"
          alt="Icona che raffigura un ospedale">
        </div>
        <div class="title">{{ provincia.denominazione_provincia || 'Nome Provincia' }}</div>
        <div class="value">{{ provincia.totale_casi || '0' }}</div>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: ['provinces'],
  data() {
    return {
      icone: {
        0: '../assets/icons/city/00.svg',
      },
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
        height: 60px;
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
