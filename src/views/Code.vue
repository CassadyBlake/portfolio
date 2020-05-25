<template>
  <div class="container">
    <!-- <transition name="size" mode="in-out"> -->
      <details-modal
        :project="selectedProject"
        :visible="showDetailsModal"
        @close="showDetailsModal=false"
      />
    <!-- </transition> -->
    <div class="twelve columns">
      <h1>Projects</h1>
    </div>
    <div class="project-box">
      <div class="content-box">
        <img src="../assets/images/prism_img.png" />
      </div>
      <div class="info-box">
          <h5>Prism App</h5>
          <!-- <p>
            An inward facing data storage and employee management app developed for a land/site surveying company. The UI was built using Vue.js and Vuetify, connected to the backend with Apollo and GraphQL and state was managed through Vuex. I was in charge of creating and updating the UI, working closely with the senior developer who was creating the backend to coordinate GraphQL code and a UX designer for layout and flow.
          </p> -->
          <p class="tools">( Vue, Vuex, Vuetify, SCSS, GraphQL, Apollo )</p>
        <div class="button-container">
          <button class="icon" @click="openDetails('prism')">DETAILS <i class="material-icons">web</i></button>
        </div>
      </div>
    </div>
    <div class="project-box">
      <div class="content-box">
          <img src="../assets/images/pomodoro_img.png" />
      </div>
      <div class="info-box">
          <h5>Pomodoro App</h5>
        <!-- <p>
          An application created using React for time management. Implimenting the Pomodoro Technique, the application tracks a full work-day being split into 25 minute segments with 5 minute breaks in between, and a 30 minute break in the middle. Dealing with time is always tricky and I enjoyed the challenge of logging each 25 minute session and triggering the breaks. The clock was great practice for manipulating css properties with rotation and triangular shapes.
        </p> -->
          <p class="tools">( React, SCSS, Firebase )</p>
        <div class="button-container">
          <button class="icon " @click="openDetails('prism')">DETAILS <i class="material-icons">web</i></button>
          <button class="icon" @click="openRoute('https://cassadyb.com/pomodoro')">VIEW <i class="material-icons">launch</i></button>
        </div>
      </div>
    </div>
    <div class="project-box">
      <div class="content-box">
        <img src="../assets/images/weather_img.png" />
      </div>
      <div class="info-box">
          <h5>Weather App (vanilla JS)</h5>
        <!-- <p>
          An application that displays the current weather conditions for a selected city, built using only 'vanilla' javascript. An excercise in working without a library or framework, this was a great challenge and reminder of how javascript functions within those systems.
        </p> -->
          <p class="tools">( Javascript, Async Functions, API )</p>
        <div class="button-container">
          <button class="icon" @click="openDetails('prism')">DETAILS <i class="material-icons">web</i></button>
          <button class="icon" @click="openRoute('https://cassadyb.com/weather')">VIEW <i class="material-icons">launch</i></button>
        </div>
      </div>
    </div>
    <div class="project-box">
      <div class="content-box">
        <img src="../assets/images/timeline_img.png" />
      </div>
      <div class="info-box">
          <h5>Timeline Component</h5>
        <!-- <p>I was asked to create a timeline component in order to display particular events related to a surveying job. It needed to display them in order based first on the completion of the event and second on the date created or completed. I enjoyed working out the gradient overlay for the events to disapear into when the timeline is scrolled and the scroll buttons showing or not based on the length of the timeline.</p> -->
          <p class="tools">( Vue.js, CSS, SCSS )</p>
        <div class="button-container">
          <button class="icon" @click="openDetails('prism')">DETAILS <i class="material-icons">web</i></button>
          <button class="icon" @click="openRoute('https://codepen.io/cassadyblake/pen/oNjWvZV')">VIEW <i class="material-icons">launch</i></button>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// import timeline from "../components/Timeline"
import detailsModal from "../components/details/Details-Modal"

export default {
  name: 'code-view',
  components: {
    detailsModal
  },
  data: () => {
    return {
      selectedProject: "",
      showDetailsModal: false
    }
  },
  methods: {
    openDetails(projectName) {
      this.selectedProject = projectName
      this.showDetailsModal = true
    },
    openRoute(destination) {
      window.open(destination);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/colors.scss';


.container {
  padding-top: 60px;
  width: 100%;
  max-width: none;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    margin: 0 1rem;
  }
}

.project-box {
  border: solid 1px $black-olive-lighten;
  border-radius: 5px;
  width: 30%;
  min-width: 325px;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  flex-wrap: nowrap;
  // padding: 1rem;
  margin: 2rem;
  opacity: 1;
  overflow: hidden;
  
  .info-box {
    color: $black-olive;
    // border: solid 1px $black-olive-lighten;
    // border-radius: 5px;
    // background: rgba(249, 252, 247, 0.90);
    // position:absolute;
    padding: 1rem 1rem;
    height: 100%;
    transition: all 1s ease-in-out;
    overflow: hidden;
    z-index: 2;
    // opacity: 0;
    // margin-top: 2rem;
    // transform: translateX(-100% + 1);
    // border-right: solid 4px $opal;

    h5 {
      margin-bottom: 1rem;
    }
    p {
      font-size: 12px;
      margin-bottom: 1rem;
    }
    .tools {
      color: $dark-salmon;
      font-size: 14px;
    }
  }

  .content-box {
    // border-bottom: solid 1px $black-olive-lighten;
    // padding: 1rem;
    // height: 260px;
    // background: linear-gradient(45deg, $baby-powder-darken, $baby-powder-darken 50%, $baby-powder 30%, $baby-powder-darken 60%);

    img {
      // opacity:1;
      width: 100%;
      // transition: opacity 1s ease-in-out;
    }
  }

  &:hover {

    .info-box {
      opacity: 1;
      // transform: translateX(0);
      transition: all .5s ease-in-out;
    }
    .content-box {
      img {
        // opacity: .05;
        // transition: opacity .5s ease-in-out;
      }
    }
  }
}


.size-enter-active {
    transition: all 1s ease-in;
    transition-timing-function:cubic-bezier(0.0, 0.0, 0.7, 1.0);
}
.size-leave-active {
    transition: all 1s ease-out;
}
.size-enter
/* .slide-leave-active below version 2.1.8 */ {
    transform: scale(0);
    opacity: 0;
}
.size-leave-to
/* .slide-leave-active below version 2.1.8 */ {
    transform: scale(0);
    opacity: 0;
}
</style>