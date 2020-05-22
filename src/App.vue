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
        <div class="title-1">CASSADY</div>
        <div class="title-2">LILLSTROM</div>
        <div class="title-3">WEB-DEVELOPER / DESIGNER</div>
        <div class="title-4">MOTION SIMPLICITY FEEL</div>
        <button @click="openSite">
          See My Work <i class="material-icons">forward</i>
        </button>
        <!-- <div class="gradient1"></div> -->
        <!-- <div class="gradient2"></div> -->
        <!-- <div class="bottom-overlay"></div> -->
      </div>
      <!-- <div class="main-container">
        <about-view />
        <code-view />
        <design-view />
      </div> -->
      <!-- <div class="main-container"> -->
      <transition 
        name="expand"
        mode="out-in"
      >
        <router-view class="main-view" />
      </transition>
      <!-- </div> -->
    </div>
  <!-- </div> -->
</template>
<script>
// import currentWork from "./components/Current-Work";
// import codeView from "./views/Code"
// import designView from "./views/Design"
// import aboutView from "./views/About"

export default {
  name: 'app',
  components: {
    // codeView,
    // designView,
    // aboutView
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

.welcome {
  width: 100%;
  background: linear-gradient(45deg, $opal, $opal 50%, rgb(148, 182, 175) 30%, $opal 60%);
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  color: $baby-powder;
  overflow: hidden;

  .title-1 { 
    margin-top: 20px;
    font-weight: 900;
    font-size: 4rem;
    width: 450px;
    letter-spacing: 1.35rem;
    z-index: 1;
  }
  .title-2 {
    font-weight: 300;
    font-size: 4rem;
    width: 450px;
    letter-spacing: .8rem;
    margin-top: -20px;
    z-index: 1;
  }
  .title-3 {
    font-weight: 900;
    font-size: 1.1rem;
    width: 450px;
    letter-spacing: .45rem;
    margin-top: -5px;
    z-index: 1;
  }
  .title-4 {
    font-weight: 400;
    font-size: 1.1rem;
    width: 450px;
    letter-spacing: .63rem;
    margin-top: 10px;
    z-index: 1;
  }

  button {
    bottom: -30px;
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

button {
  position: relative;
  display: inline-flex;
  padding: 0 1rem;
  line-height: 50px;
  justify-items: center;
  border: solid 1px $opal;
  box-shadow: 2px 2px 10px $black-olive;
  font-size: 16px;
  color: $opal;
  background: $black-olive;
  outline: none;
  z-index: 1;

  &.circle {
    border-radius: 100%;
    padding: 0 !important;
    height: 50px;
    width: 50px;
    justify-content: center;

    .material-icons {
      margin-left: 0;
    }
  } 

  &.flat {
    border: none;
    background: none;
    box-shadow: none;
    color: $baby-powder;
  
    &:hover {
      background-color: transparentize($color: $baby-powder, $amount: .8);
    }
  }

  &:hover {
    cursor: pointer;
    background-color: transparentize($color: $black-olive, $amount: .3);
  }

  .material-icons {
    line-height: 50px;
    margin-left: 1rem;

    &.small {
      font-size: 18px;
    }
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

.column-1 {
  width: 8.3%
}
.column-2 {
  width: 16.6%
}
.column-3 {
  width: 24.9%
}
.column-4 {
  width: 33.3%
}
.column-5 {
  width: 41.6%
}
.column-6 {
  width: 49.9%
}
.column-7 {
  width: 58.3%
}
.column-8 {
  width: 66.6%
}
.column-9 {
  width: 74.9%
}
.column-10 {
  width: 83.3%
}
.column-11 {
  width: 91.6%
}
.column-12 {
  width: 100%
}
</style>
