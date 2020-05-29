<template>
  <div id="app" >
    <transition mode="in-out" name="fade">
      <div class="overlay-blur" v-show="getBlurBackground"></div>
    </transition>
    <!-- <div id="initialNav" class="nav-box"></div> -->
    <!-- <div class="container"> -->
      <div 
        id="nav"
        :class="initialView === true ? 'initial-view' : 'nav-view'"
      >
        <img width="30" height="30" src="./assets/images/cassadyb_logo_thick_dark.png" />
        <router-link to="about">About</router-link>
        <router-link to="code">Code</router-link> 
        <router-link to="design">Design</router-link> 
      </div>
      <div :class="initialView === true ? 'welcome show' : 'welcome hide'">
        <div class="title-box">
          <div class="title-row no-wrap title-1">
            <div>C</div><div>A</div><div>S</div><div>S</div><div>A</div><div>D</div><div>Y</div>
          </div>
          <div class="title-row no-wrap title-2">
            <div>L</div><div>I</div><div>L</div><div>L</div><div>S</div><div>T</div><div>R</div><div>O</div><div>M</div>
          </div>
          <div class="title-row no-wrap title-3">
            <div>D</div><div>E</div><div>V</div><div>E</div><div>L</div><div>O</div><div>P</div><div>E</div><div>R</div><div>/</div><div>D</div><div>E</div><div>S</div><div>I</div><div>G</div><div>N</div><div>E</div><div>R</div>
          </div>
          <div class="title-row no-wrap title-4">
            <div>M</div><div>O</div><div>T</div><div>I</div><div>O</div><div>N</div><div> </div><div>S</div><div>I</div><div>M</div><div>P</div><div>L</div><div>I</div><div>C</div><div>I</div><div>T</div><div>Y</div><div> </div><div>F</div><div>E</div><div>E</div><div>L</div>
          </div>
        <button @click="openSite" class="icon">
          See More <i class="material-icons">forward</i>
        </button>

        </div>
      </div>
      <transition 
        name="expand"
        mode="out-in"
      >
        <router-view />
      </transition>
    </div>
</template>
<script>
import { mapGetters } from "vuex"

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      initialView: true
    }
  },
  mounted() {
    this.$router.push('/');
  },
  methods: {
    routeTo(view) {
      this.$router.push(view);
    },
    openSite() {
      this.initialView = false;
      setTimeout(() => { this.routeTo('about') }, 2000);
    }
  },
  computed: {
    ...mapGetters([
        'getBlurBackground'
        // ...
    ])
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');
@import './style/colors.scss';


// LAYOUT ___________________________________

html {
  height: 100%;
}

body {
  margin: 0 !important;
  height: 100%;
}

#app {
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black-olive;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: opacity 1s;
}

.title-box {
  display: inline-block;
  width: 90%;
}

.title-row {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-content: flex-start;

  &.title-1 { 
    margin-top: 20px;
    font-weight: 900;
    font-size: 4rem;
    z-index: 1;
  }
  &.title-2 {
    font-weight: 300;
    font-size: 4rem;
    margin-top: -20px;
    z-index: 1;
  }
  &.title-3 {
    font-weight: 900;
    font-size: 1.1rem;
    margin-top: -5px;
    z-index: 1;
  }
  &.title-4 {
    font-weight: 400;
    font-size: 1.1rem;
    margin-top: 10px;
    z-index: 1;
  }
}

/* Larger than tablet */
@media (min-width: 750px) {
  .title-box {
    width: 50%;
  }
  .title-row {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;

    &.title-1 { 
      margin-top: 20px;
      font-weight: 900;
      font-size: 6rem;
      z-index: 1;
    }
    &.title-2 {
      font-weight: 300;
      font-size: 6rem;
      margin-top: -20px;
      z-index: 1;
    }
    &.title-3 {
      font-weight: 900;
      font-size: 2rem;
      margin-top: -5px;
      z-index: 1;
    }
    &.title-4 {
      font-weight: 400;
      font-size: 2rem;
      margin-top: 10px;
      z-index: 1;
    }
  }
}

#nav {
  width: 100%;
  position: fixed;
  display: inline-flex;
  background: linear-gradient($black-olive-lighten, $black-olive);
  color: $baby-powder;
  z-index: 2;
  overflow: hidden;

  a {
    padding: 0;
    color: $baby-powder;
    text-decoration: none;

    &:hover {
      text-shadow: #fff 1px 0 20px;
      background-color: $black-olive-lighten;
    }
    &.router-link-active {
      color: $baby-powder;
      background-color: $black-olive-lighten;
      border-radius: 2px;
    }
  }

  img {
    margin: .75rem 1rem;
  }
}

.initial-view {
  height: 3px;
  border-bottom: solid 0px transparent;
}

.nav-view {
  height: 50px;
  transition: height 1s;
  transition-delay: 1s;
  border-bottom: solid 3px $opal;

  a {
    padding: 1rem 2rem !important;
  }
}

button {
  border-color: $opal;
  box-shadow: 1px 1px 4px $black-olive;
  color: $opal; // $opal-lighten; //$baby-powder;
  background: $black-olive;
  z-index: 1;

  &.icon {
    justify-items: center;
    display: inline-flex;

    .material-icons {
      font-size: 20px;
      margin-left: 1rem;
      line-height: 36px;
    }
  }

  &.circle {
    border-radius: 100%;
    padding: 1.1rem 0 0 0;
    height: 50px;
    width: 50px;
    margin-bottom: 0;
    justify-content: center;

    &.small {
      height: 4rem;
      width: 4rem;
      padding: .5rem 0 0 0;
    }

    .material-icons {
      margin-left: 0;
    }
  } 

  &.small {
    height: 3rem;
    font-size: 10px;
    line-height: 10px;
    padding: 5px 10px;
  }

  &.flat {
    box-shadow: none;
  }
  &.light {
    background: $opal;
    color: white;
    border-color: transparent;

    &:hover {
      background-color: $baby-powder-darken;
    }
  }
  &.dark {
    background: transparent;
    color: $baby-powder;
  
    // &:hover {
    //   // background-color: transparentize($color: $baby-powder, $amount: .2) !important;
    //   color: $black-olive;
    //   background-color: $baby-powder;
    // }
  }

  &:hover {
    // cursor: pointer;
    // background-color: transparentize($color: $black-olive, $amount: .3);
    color: $black-olive;
    background-color: $baby-powder;
  }
}

a {
  color: $opal; 
}
a:hover {
  color: $opal-darken; 
}

// HELPERS ____________________________
.no-wrap {
  flex-wrap: nowrap;
  white-space: nowrap;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: $black-olive-lighten;
}

.overlay-blur {
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.438);
  opacity: 1;
  z-index: 99;
}

// SPECIFIC CONTAINERS ___________________________
.welcome {
  width: 100%;
  background: linear-gradient(45deg, $opal, $opal 50%, rgb(148, 182, 175) 30%, $opal 60%);
  color: $baby-powder;
  overflow: hidden;
  text-align: center;

  button {
    margin-top: 3rem;
  }

  &.show {
    height: 100%;
    padding-top: 10%;
    overflow: hidden;
    text-align: center;
  }

  &.hide {
    height: 0px;
    padding-top: 0;
    overflow: hidden;
    border-top: solid 3px transparent;
    transition: height 1s, opacity 1s, padding-top 1s;
  }
}

// ANIMATIONS/TRANSITIONS __________________________
@keyframes circle {
  from {
    left: -200%;
  }
  50% {
    left: -30%;
  }
  80% {
    left: -100%;
  }
  to {
    left: -200%;
  }
}

.expand-enter-active {
  transition: all .5s ease-in;
  transition-timing-function:cubic-bezier(0.0, 0.0, 0.7, 1.0);
}
.expand-leave-active {
  transition: all .3s ease-out;
}
.expand-enter
/* .slide-leave-active below version 2.1.8 */ {
  transform: translateY(-100%);
  opacity: 0;
  overflow: hidden;
}
.expand-leave-to
/* .slide-leave-active below version 2.1.8 */ {
  transform: translateY(-100%);
  opacity: 0;
  overflow: hidden;
}

.fade-enter-active {
    transition: all .5s ease-in;
}
.fade-leave-active {
    transition: all .5s ease-out;
}
.fade-enter {
    opacity: 0;
}
.fade-leave-to{
    opacity: 0;
}
</style>
