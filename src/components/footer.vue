<template>
  <div class="main">
    <b-container>
      <b-row class="topContainer">
        <div class="socialContainer">
          <div class="contactTitle">Contact me</div>
          <div class="socialGroup">
            <b-link
              href="https://github.com/gamerish96/covid-19-italia"
              target="blank"
              class="socialIcon"
            >
              <font-awesome-icon :icon="['fab', 'github']" size="2x" />
            </b-link>
          </div>
        </div>
      </b-row>
      <b-row class="bottomContainer">
        <div class="bottom">
          © 2020 gamerish96 - Made with
          <b-icon icon="heart-fill" variant="danger"></b-icon>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
.main {
  color: white;
  background-color: #353b48;
  padding: 32px 16px;

  .topContainer {
    display: flex;
    justify-content: center;
    // background-color: red;
    padding: 16px 0px;

    .socialContainer {
      font-weight: 100;
      text-align: center;

      .contactTitle {
        font-family: "Raleway", sans-serif;
        font-weight: 300;
      }

      // background-color: blue;
      .socialGroup {
        // background-color: red;
        margin-top: 16px;

        .socialIcon {
          color: white;
          margin-left: 8px;
          margin-right: 8px;

          :hover {
            color: aqua;
          }
        }
      }
    }
  }

  .bottomContainer {
    // background-color: blue;
    display: flex;
    justify-content: center;
    padding: 16px 0px;

    .bottom {
      font-family: "Raleway", sans-serif;
      font-weight: 300;
    }
  }
}
</style>
