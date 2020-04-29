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
  color: #3f3f37;
  font-family: 'Noto Sans', sans-serif;
  overflow-x: hidden;
}



#nav {
  width: 100%;
  position: static;
  display: inline-flex;
  background-color: #daf0ee;
  color: #3f3f37;
  z-index: 2;
  overflow: hidden;

  a {
    padding: 0;
    color: #3f3f37;
    text-decoration: none;

    &:hover {
      text-shadow: #fff 1px 0 5px;
      background-color: #e0f7f5;
    }
    &.router-link-active {
      color: #3f3f37;
      background-color: #e0f7f5;
      border-radius: 2px;
    }
  }

  .divider {
    margin: .75rem 0;
    width: 1px;
    background-color: none;
  }
}

.initial-view {
  height: 0px;
  opacity: 0;
  border-bottom: solid 0px #3f3f37;
}

.nav-view {
  height: 55px;
  transition: opacity 1s, height 2s, border-bottom 1s;
  transition-delay: 2s;
  border-bottom: solid 5px #3f3f37;

  a {
    padding: 1rem 2rem !important;
  }
}

.welcome {
  width: 100%;
  background: #daf0ee;
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  color: #3f3f37;

  &.show {
    // opacity: 1;
    margin-top: 10%;
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
      transition: height 1s, border-bottom 1s;
      transition-delay: 2s;
      border-bottom: solid 5px transparent;
    }
  }

  .bottom-overlay {
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 100%;
    background: linear-gradient(#daf0ee00, #daf0ee, #daf0ee);
    border-bottom: solid 5px #3f3f37;
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
  border: solid 3px #3f3f37;
  font-size: 16px;
  color: #3f3f37;
  background: none;
  outline: none;

  &.dark {
    border: solid 3px #daf0ee !important;
    color: #daf0ee !important;
  
    &:hover {
      background-color: #4d4d43;
    }
  }

  &:hover {
    cursor: pointer;
    background-color: #c2d6d5;
  }

  .material-icons {
    line-height: 50px;
  }
}


.slide-enter-active {
  transition: all .3s;
}
.slide-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-enter
/* .slide-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
  // opacity: 0;
}
.slide-leave-to
/* .slide-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
  // opacity: 0;
}

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
