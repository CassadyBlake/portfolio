<template>
  <div id="app">
    <!-- <div id="initialNav" class="nav-box"></div> -->
    <!-- <div class="container"> -->
      <div 
        id="nav"
        :class="initialView === true ? 'initial-view' : 'nav-view'"
      >
        <router-link to="code">Code</router-link> <div class="divider"></div>
        <router-link to="design">Design</router-link> <div class="divider"></div>
        <router-link to="about">About</router-link>
      </div>
      <div :class="initialView === true ? 'welcome show' : 'welcome hide'">
        <h1>Welcome</h1>
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
        name="slide"
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
    routeTo(view, id) {
      console.log("view, id", view, id);
      this.$router.push(view);
    },
    openSite() {
      this.initialView = false;
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');

html {
  overflow-y: scroll;
}

body {
  margin: 0 !important;
  overflow-y: auto;
}

#app {
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Noto Sans', sans-serif;
  
}



#nav {
  width: 100%;
  position: static;
  display: inline-flex;
  background-color: slategray;
  color: white;
  z-index: 2;
  overflow: hidden;

  a {
    padding: 0;
    color: white;
    text-decoration: none;

    &:hover {
      text-shadow: white 1px 0 5px;
    }
    &.router-link-active {
      color: rgb(227, 244, 255)
    }
  }

  .divider {
    margin: .75rem 0;
    width: 1px;
    background-color: white;
  }
}

.initial-view {
  height: 0px;
  opacity: 0;
}

.nav-view {
  height: 55px;
  transition: opacity 1s, height 2s;
  transition-delay: 2s;

  a {
    padding: 1rem 2rem !important;
  }
}

.welcome {
  width: 100%;
  background: slategray;
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  color: white;

  &.show {
    // opacity: 1;
    margin-top: 20%;
    height: 400px;
    overflow: hidden;
  }

  &.hide {
    // opacity: 0;
    margin-top: 0%;
    height: 0px;
    overflow: hidden;
    transition: height 2s, margin 1s, opacity 2s;

    .bottom-overlay {
      height: 0px;
      transition: height 1s;
      transition-delay: 2s;
    }
  }

  .bottom-overlay {
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;
    background: linear-gradient(rgba(112, 128, 144, 0), rgb(112, 128, 144), rgb(112, 128, 144));
    z-index: 1;
  }
}

button {
  position: relative;
  display: inline-flex;
  padding: 0 1rem;
  margin: 3rem 0 0 0;
  height: 55px;
  line-height: 50px;
  justify-items: center;
  border: solid 3px white;
  font-size: 16px;
  color: white;
  background: none;
  outline: none;

  &:hover {
    cursor: pointer;
    background-color: rgb(136, 157, 179);
  }

  .material-icons {
    line-height: 50px;
  }
}

// .container {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   overflow: hidden;

//   .initial-view {
//     justify-content: space-between;
//     align-self: center;
//     margin-top: 200px;
//     border-color: rgb(240, 240, 240);
//     border-style: solid;
//     border-width: 1px;
//     padding: 30px;

//     a {
//       font-weight: 400;
//       display: none;
//       height: 0px;
//       margin: 0;
//       opacity: 0;
//       font-weight: bold;
//       color: #2c3e50;
//     }
//     span {
//       opacity: 0;
//     }
//     .welcome-message {
//       opacity: 1;
//       height: 300px ;
//       margin: 12px 0px !important;
//     }
//   }

//   .nav-view {
//     text-align: start;
//     justify-content: space-between;
//     align-self: center;
//     margin-top: 0;
//     height: inherit;
//     width: 100%;
//     padding: 30px 0px;
//     margin: 0px 30px;
//     border-bottom: solid 1px rgb(240, 240, 240);
//     // -webkit-transition: width 2s ease-in-out;
//     // -moz-transition: width 2s ease-in-out;
//     // -o-transition: width 2s ease-in-out;
//     transition: width 2s, margin-top 2s, border-color 2s;

//     a {
//       font-weight: 400 !important;
//       height: 24px;
//       opacity: 1;
//       font-weight: bold;
//       color: #2c3e50;
//       margin: 0 4rem;
//       transition: height 2s, margin 1s, opacity 2s;
//     }
//     span {
//       opacity: 1;
//       transition: margin 1s, opacity 2s;
//     }
//     .welcome-message {
//       opacity: 0;
//       height: 0px !important;
//       margin: 0 !important;
//       overflow: hidden;
//       opacity: 0;
//       transition: opacity 1s, margin 3s, height 2s;
//     }
//   }
// }

// #nav a.router-link-exact-active {
//   color: #42b983;
// }

// .fade-enter-active,
// .fade-leave-active {
//   transition-duration: .5s;
//   transition-property: opacity;
//   transition-timing-function: ease;
// }

// .fade-enter,
// .fade-leave-active {
//   opacity: 0
// }

// .home {
//   flex-direction: column;
//   justify-content: center;
// }
// .box {
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   position: relative;
//   height: 400px;
//   margin: 5rem;
//   background-color: rgb(212, 212, 212);
// }
// .link {

// }
// .hidden {
//   display: none;
// }
</style>
