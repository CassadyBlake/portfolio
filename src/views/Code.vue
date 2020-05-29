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
      <h3>Projects</h3>
    </div>
    <div class="project-box">
      <div class="content-box">
        <img src="../assets/images/prism_img.png" />
      </div>
      <div class="info-box">
          <h5>Prism</h5>
          <p class="tools">( Vue, Vuex, Vuetify, SCSS, GraphQL, Apollo )</p>
        <div class="button-container">
          <button class="icon flat light" @click="openDetails('Prism')">DETAILS <i class="material-icons">web</i></button>
        </div>
      </div>
    </div>
    <div class="project-box">
      <div class="content-box">
          <img src="../assets/images/pomodoro_img.png" />
      </div>
      <div class="info-box">
          <h5>Pomodoro Timer</h5>
          <p class="tools">( React, SCSS, Firebase )</p>
        <div class="button-container">
          <button class="icon flat light" @click="openDetails('Pomodoro Timer')">DETAILS <i class="material-icons">web</i></button>
          <button class="icon flat light" @click="openRoute('https://cassadyb.com/pomodoro')">VIEW <i class="material-icons">launch</i></button>
        </div>
      </div>
    </div>
    <div class="project-box">
      <div class="content-box">
        <img src="../assets/images/weather_img.png" />
      </div>
      <div class="info-box">
          <h5>Weather Finder (vanilla JS)</h5>
          <p class="tools">( Javascript, Async Functions, API )</p>
        <div class="button-container">
          <button class="icon flat light" @click="openDetails('Weather Finder')">DETAILS <i class="material-icons">web</i></button>
          <button class="icon flat light" @click="openRoute('https://cassadyb.com/weather')">VIEW <i class="material-icons">launch</i></button>
        </div>
      </div>
    </div>
    <div class="project-box">
      <div class="content-box">
        <img src="../assets/images/timeline_img.png" />
      </div>
      <div class="info-box">
          <h5>Timeline Component</h5>
          <p class="tools">( Vue.js, CSS, SCSS )</p>
        <div class="button-container">
          <button class="icon flat light" @click="openDetails('Timeline Component')">DETAILS <i class="material-icons">web</i></button>
          <button class="icon flat light" @click="openRoute('https://codepen.io/cassadyblake/pen/oNjWvZV')">VIEW <i class="material-icons">launch</i></button>
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
      showDetailsModal: false,
      projects: [
        { name: "Prism", essay: ""},
        { name: "Pomodoro Timer", essay: "An application created using React for time management. Implimenting the Pomodoro Technique, the application tracks a full work-day being split into 25 minute segments with 5 minute breaks in between, and a 30 minute break in the middle. Dealing with time is always tricky and I enjoyed the challenge of logging each 25 minute session and triggering the breaks. The clock was great practice for manipulating css properties with rotation and triangular shapes."},
        { name: "Weather Finder", essay: "An application that displays the current weather conditions for a selected city, built using only 'vanilla' javascript. An excercise in working without a library or framework, this was a great challenge and reminder of how javascript functions within those systems."},
        { name: "Timeline Component", essay: "I was asked to create a timeline component in order to display particular events related to a surveying job. It needed to display them in order based first on the completion of the event and second on the date created or completed. I enjoyed working out the gradient overlay for the events to disapear into when the timeline is scrolled and the scroll buttons showing or not based on the length of the timeline."},
      ]
    }
  },
  methods: {
    openDetails(projectName) {
      this.selectedProject = this.projects.find( project => projectName === project.name)
      console.log("selected:", this.selectedProject)
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

@media (min-width: 550px) {
  .container {
    width: 90%;
    max-width: 1200px;
  }
}

.container {
  padding: 8rem .2rem 1rem .2rem;
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
  border: solid 1px $black-olive;
  border-radius: 5px;
  width: 25%;
  min-width: 325px;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 2rem;
  opacity: 1;
  overflow: hidden;
  
  .info-box {
    color: $black-olive;
    padding: 1rem 1rem;
    height: 100%;
    transition: all 1s ease-in-out;
    overflow: hidden;

    h5 {
      margin-bottom: 0;
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
    height: 90%;

    img {
      width: 100%;
      border-bottom: solid 1px $black-olive-lighten;
    }
  }

  &:hover {

    .info-box {
      opacity: 1;
      transition: all .5s ease-in-out;
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