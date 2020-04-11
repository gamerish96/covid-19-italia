<template>
  <div>
    <div class="chartContainer" id="grafico1">
      <div class="chart">Casi Totali Regione {{ regionName }}</div>
      <D3LineChart :config="chart1_config" :datum="casiTotali"></D3LineChart>
    </div>
    <div class="chartContainer" id="grafico2">
      <div class="chart"><span class="green">Guariti</span>
       - <span class="red">Deceduti</span> Regione {{ regionName }}</div>
      <D3LineChart :config="chart2_config" :datum="casiTotali"></D3LineChart>
    </div>
  </div>
</template>

<script>
import { D3LineChart } from 'vue-d3-charts';

export default {
  props: ['casiTotali', 'regionName'],
  data() {
    return {
      casi_totali: [],
      chart1_config: {
        values: ['casiTotali'],
        date: {
          key: 'dataCasi',
          inputFormat: '%d',
          outputFormat: '%d',
        },
        points: {
          visibleSize: 3,
          hoverSize: 6,
        },
        axis: {
          yTitle: 'Casi Totali',
          yTicks: 6,
          xTicks: 0,
        },
      },
      chart2_config: {
        values: ['dimessiGuariti', 'deceduti'],
        date: {
          key: 'dataCasi',
          inputFormat: '%d',
          outputFormat: '%d',
        },
        points: {
          visibleSize: 3,
          hoverSize: 6,
        },
        axis: {
          yTitle: ['Dimessi Guariti - Deceduti'],
          yTicks: 6,
          xTicks: 0,
        },
        color: {
          scheme: ['#339900', '#cc3300'],
        },
        tooltip: {
          labels: ['Dimessi Guariti', 'Deceduti'],
        },
      },
    };
  },
  components: {
    D3LineChart,
  },
  mounted() {
    this.casi_totali = this.casiTotali;
  },
};
</script>

<style lang="scss" scoped>
.chartContainer{
  .chart{
    font-size: 2.5em;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    text-align: center;
    padding: 8px 0px;
  }
  .chartSubtitle{
    font-size: 1em;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    text-align: center;
    padding: 8px 0px;
  }
  .green{
    color: green;
  }
  .red{
    color: red;
  }
}
</style>
