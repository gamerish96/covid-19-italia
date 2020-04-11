<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="/">COVID-19 ITALIA</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#bollettino">Bollettino</b-nav-item>
          <b-nav-item href="#province">Dati province</b-nav-item>
          <b-nav-item href="#nazione">Dati nazione</b-nav-item>
          <b-nav-item href="#cosaFare">Cosa fare</b-nav-item>
          <b-nav-item href="#contatti">A chi rivolgersi</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
</style>
