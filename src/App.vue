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
        <div class="title-3">WEB-DEVELOPER/DESIGNER</div>
        <div class="title-4">MOTION SIMPLICITY FEEL</div>
        <button @click="openSite">
          See My Work <i class="material-icons">forward</i>
        </button>
        <div class="bottom-overlay"></div>
      </div>
      <div class="main-container">
        <!-- <about-view />
        <code-view />
        <design-view /> -->
      </div>
      <transition 
        name="expand"
        mode="out-in"
      >
        <router-view class="main-view" />
      </transition>
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

/* HEX */
$dark-salmon: #e69374ff;
$opal: #a0c1b9ff;
$opal-darken: rgb(129, 156, 150);
$peach: #fcde9eff;
$baby-powder: #f9fcf7ff;
$baby-powder-darken: rgb(235, 238, 232);
$black-olive: #454545ff;
$black-olive-lighten: rgb(92, 91, 91);

html {
  overflow-y: scroll;
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
  font-family: 'Noto Sans', sans-serif;
  overflow-x: hidden;
}

.title-1 { 
  font-size: 4rem;
  width: 400px;
  letter-spacing: 1rem;
  text-align: justify; 
}
.title-2 {
  font-size: 4rem;
  width: 400px;
  letter-spacing: .3rem;
  text-align: justify; 
}
.title-3 {
  font-size: 1.1rem;
  width: 400px;
  letter-spacing: .42rem;
  text-align: justify; 
}
.title-4 {
  font-size: 1.1rem;
  width: 400px;
}


#nav {
  width: 100%;
  position: static;
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
  height: 0px;
  opacity: 0;
  border-bottom: solid 0px $opal;
}

.nav-view {
  height: 55px;
  transition: opacity .5s, height 1s, border-bottom .5s;
  transition-delay: 1s;
  border-bottom: solid 3px $opal;

  a {
    padding: 1rem 2rem !important;
  }
}

.welcome {
  width: 100%;
  background: linear-gradient($opal-darken, $opal);
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  color: $baby-powder;
  text-align: justify; 

  &.show {
    // opacity: 1;
    margin-top: 10%;
    height: 400px;
    overflow: hidden;
    border-top: solid 3px $black-olive; 
  }

  &.hide {
    // opacity: 0;
    margin-top: 0%;
    height: 0px;
    overflow: hidden;
    border-top: solid 3px transparent;
    transition: height 1s, margin .5s, opacity 1s, border-top 2s;

    .bottom-overlay {
      height: 0px;
      transition: height .5s;
      transition-delay: 1s;
    }
  }

  .bottom-overlay {
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 100%;
    background: linear-gradient(rgba(160, 193, 185, 0), $opal, $opal);
    z-index: 1;
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

  &.dark {
    border: solid 3px $opal;
    color: $opal;
  
    &:hover {
      background-color: $black-olive-lighten;
    }
  }

  &:hover {
    cursor: pointer;
    background-color: $black-olive-lighten;
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

</style>
