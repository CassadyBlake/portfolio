<template>
  <div id="app">
    <!-- <div id="initialNav" class="nav-box"></div> -->
    <!-- <div class="container"> -->
      <div 
        id="nav"
        :class="initialView === true ? 'initial-view' : 'nav-view'"
      >
        <router-link to="code">Code</router-link> 
        <router-link to="design">Design</router-link> 
        <router-link to="about">About</router-link>
      </div>
      <div :class="initialView === true ? 'welcome show' : 'welcome hide'">
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
        <button @click="openSite" class="icon dark">
          See My Work <i class="material-icons">forward</i>
        </button>
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
      setTimeout(() => { this.routeTo('code') }, 2000);
    }
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
}

.title-row {
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;

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
  .title-row {
    display: flex;
    flex-direction: row;
    width: 40%;
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
  position: absolute;
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
}

.initial-view {
  height: 3px;
  border-bottom: solid 0px transparent;
}

.nav-view {
  height: 55px;
  transition: height 1s;
  transition-delay: 1s;
  border-bottom: solid 3px $opal;

  a {
    padding: 1rem 2rem !important;
  }
}

button {
  // border-color: $black-olive;
  box-shadow: 1px 1px 4px $black-olive;
  color: $baby-powder;
  background: $opal;
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
    padding: 1.1rem 0 0 0 !important;
    height: 50px;
    width: 50px;
    margin-bottom: 0;
    justify-content: center;

    .material-icons {
      margin-left: 0;
    }
  } 

  &.flat {
    box-shadow: none;
  }

  &.dark {
    background: $black-olive;
    color: $opal;
  
    &:hover {
      // background-color: transparentize($color: $baby-powder, $amount: .2) !important;
      color: $black-olive;
      background-color: $baby-powder;
    }
  }

  &:hover {
    // cursor: pointer;
    // background-color: transparentize($color: $black-olive, $amount: .3);
    background-color: $baby-powder;
  }
}


// HELPERS ____________________________
.no-wrap {
  flex-wrap: nowrap;
  white-space: nowrap;
}

// SPECIFIC CONTAINERS ___________________________
.welcome {
  width: 100%;
  background: linear-gradient(45deg, $opal, $opal 50%, rgb(148, 182, 175) 30%, $opal 60%);
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  color: $baby-powder;
  overflow: hidden;

  button {
    margin-top: 3rem;
  }

  &.show {
    height: 100%;
    padding-top: 10%;
    overflow: hidden;
  }

  &.hide {
    height: 0px;
    padding-top: 0;
    overflow: hidden;
    border-top: solid 3px transparent;
    transition: height 1s, opacity 1s, padding-top 1s;
  }

  .gradient1 {
    position: absolute;
    transform: rotate(45deg);
    width: 1200px;
    height: 1200px;
    box-shadow: 0 0 100px $opal-darken;
    z-index: 0;
    // animation: 5s infinite circle;
    margin-left: 25%;
    margin-bottom: 25%;
  }
  .gradient2 {
    position: absolute;
    background: radial-gradient(elipse at 50%, $opal-darken, rgba(160, 193, 185, 0));
    width: 2000px;
    height: 2000px;
    z-index: 0;
    animation: 5s infinite circle;
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
</style>
