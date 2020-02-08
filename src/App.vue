<template>
  <div id="app">
    <!-- <div id="initialNav" class="nav-box"></div> -->
    <div class="container">
      <div 
        id="nav"
        :class="initialView === true ? 'initial-view' : 'nav-view'"
        @click="initialView = false"
      >
        <router-link to="/">Home</router-link> |
        <router-link to="/code">Code</router-link> |
        <router-link to="/design">Design</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <transition name="fade" mode="out-in">
      <div :class="initialView ? 'welcome' : 'hidden'">
        <h4>Display of recent work or code I am working on</h4>
      </div>
      </transition>
      <transition 
        name="fade"
        mode="out-in"
      >
        <router-view :class="initialView ? 'hidden' : ''" />
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
#app {
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
      font-weight: bold;
      color: #2c3e50;
      margin: 0 1rem;
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
    transition: width 2s, margin-top 3s, border-color 3s;

    a {
      font-weight: bold;
      color: #2c3e50;
      margin: 0 4rem;
      transition: margin 2s;
    }
  }
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.home {
  display: flex;
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
