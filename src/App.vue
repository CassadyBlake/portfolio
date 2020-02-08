<template>
  <div id="app">
    <!-- <div id="initialNav" class="nav-box"></div> -->
    <div class="container">
      <div 
        id="nav"
        :class="initialView === true ? 'initial-view' : 'nav-view'"
        @click="initialView = false"
      >
        <router-link to="/code">Code</router-link> <span>|</span>
        <router-link to="/design">Design</router-link> <span>|</span>
        <router-link to="/about">About</router-link>
        <h1 class="welcome-message">Welcome</h1>
      </div>
      <transition 
        name="fade"
        mode="out-in"
      >
        <router-view class="main-view" />
      </transition>
    </div>
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
  }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');

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

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;

  .initial-view {
    justify-content: space-between;
    align-self: center;
    margin-top: 200px;
    width: 40%;
    border-color: rgb(240, 240, 240);
    border-style: solid;
    border-width: 1px;
    padding: 30px;

    a {
      font-weight: 400;
      display: none;
      height: 0px;
      margin: 0;
      opacity: 0;
      font-weight: bold;
      color: #2c3e50;
    }
    span {
      opacity: 0;
    }
    .welcome-message {
      opacity: 1;
      height: 50px !important;
      margin: 12px 0px !important;
      opacity: 1;
    }
  }

  .nav-view {
    justify-content: space-between;
    align-self: center;
    margin-top: 0;
    height: inherit;
    width: 100%;
    padding: 30px;
    border-bottom: solid 1px rgb(240, 240, 240);
    // -webkit-transition: width 2s ease-in-out;
    // -moz-transition: width 2s ease-in-out;
    // -o-transition: width 2s ease-in-out;
    transition: width 2s, margin-top 2s, border-color 2s;

    a {
      font-weight: 400 !important;
      height: 24px;
      opacity: 1;
      font-weight: bold;
      color: #2c3e50;
      margin: 0 4rem;
      transition: height 2s, margin 1s, opacity 2s;
    }
    span {
      opacity: 1;
      transition: margin 1s, opacity 2s;
    }
    .welcome-message {
      opacity: 0;
      height: 0px !important;
      margin: 0 !important;
      overflow: hidden;
      opacity: 0;
      transition: opacity 1s, margin 3s, height 2s;
    }
  }
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: .5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.home {
  flex-direction: column;
  justify-content: center;
}
.box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  height: 400px;
  margin: 5rem;
  background-color: rgb(212, 212, 212);
}
.link {

}
.hidden {
  display: none;
}
</style>
