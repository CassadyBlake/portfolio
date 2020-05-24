<template>
  <div class="view-container">
    <!-- <transition name="size" mode="in-out"> -->
      <details-modal
        :project="selectedProject"
        :visible="showDetailsModal"
        @close="showDetailsModal=false"
      />
    <!-- </transition> -->
    <div class="project-box">
      <!-- <div class="title">Prism App</div> -->
      <div class="info-box">
        <h3>Prism App</h3>
        <p>
          An inward facing data storage and employee management app developed for a land/site surveying company. The UI was built using Vue.js and Vuetify, connected to the backend with Apollo and GraphQL and state was managed through Vuex. I was in charge of creating and updating the UI, working closely with the senior developer who was creating the backend to coordinate GraphQL code and a UX designer for layout and flow.
        </p>
        <!-- <p>
          An inward facing data storage and employee management app developed for a land/site surveying company. The UI was built using Vue.js and Vuetify, connected to the backend with Apollo and GraphQL and state was managed through Vuex. I was in charge of creating and updating the UI, working closely with the senior developer who was creating the backend to coordinate GraphQL code and a UX designer for layout and flow. My work included creating a calendar component for users to log vacation requests, clock in/out and store payroll, a dashboard view displaying multiple components based on the users position, a system for warning dialogs, as well as many forms, lists, modals and general work flows. I enjoyed working from the ground up to create an effective UI with consistent and clean code and workflow behind it. I liked the usability of the Vuetify UI framework and was able to easily manipulate it to customize certain elements using CSS, specifically SCSS.
        </p> -->
        <p class="tools">( Vue, Vuex, Vuetify, SCSS, GraphQL, Apollo )</p>
        <button class="icon" @click="openDetails('prism')">DETAILS <i class="material-icons">launch</i></button>
      </div>
      <div class="content-box">
          <img src="../assets/images/prism_img.png" />
      </div>
    </div>
    <div class="project-box">
      <!-- <div class="title">Pomodoro App</div> -->
      <div class="info-box">
        <h3>Pomodoro App</h3>
        <p>
          An application created using React for time management. Implimenting the Pomodoro Technique, the application tracks a full work-day being split into 25 minute segments with 5 minute breaks in between, and a 30 minute break in the middle. Dealing with time is always tricky and I enjoyed the challenge of logging each 25 minute session and triggering the breaks. The clock was great practice for manipulating css properties with rotation and triangular shapes.
        </p>
        <p class="tools">( React, SCSS, Firebase )</p>
        <button class="icon" @click="openRoute('https://cassadyb.com/pomodoro')">VIEW <i class="material-icons">launch</i></button>
      </div>
      <div class="content-box">
          <img src="../assets/images/pomodoro_img.png" />
      </div>
    </div>
    <div class="project-box">
      <!-- <div class="title">Weather App (vanilla JS)</div> -->
      <div class="info-box">
        <h3>Weather App (vanilla JS)</h3>
        <p>
          An application that displays the current weather conditions for a selected city, built using only 'vanilla' javascript. An excercise in working without a library or framework, this was a great challenge and reminder of how javascript functions within those systems.
        </p>
        <p class="tools">( Javascript, Async Functions, API )</p>
        <button class="icon" @click="openRoute('https://cassadyb.com/weather')">VIEW <i class="material-icons">launch</i></button>
      </div>
      <div class="content-box">
        <img src="../assets/images/weather_img.png" />
      </div>
    </div>
    <div class="project-box">
      <!-- <div class="title">Timeline Component</div> -->
      <div class="info-box">
          <h3>Timeline Component</h3>
          <p>I was asked to create a timeline component in order to display particular events related to a surveying job. It needed to display them in order based first on the completion of the event and second on the date created or completed. I enjoyed working out the gradient overlay for the events to disapear into when the timeline is scrolled and the scroll buttons showing or not based on the length of the timeline.</p>
          <p class="tools">( Vue.js, CSS, SCSS )</p>
          <button class="icon" @click="openRoute('https://codepen.io/cassadyblake/pen/oNjWvZV')">VIEW <i class="material-icons">launch</i></button>
      </div>
      <div class="content-box">
        <img src="../assets/images/timeline_img.png" />
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
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


.view-container {
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  padding-top: 60px;
}

.project-box {
  // border: solid 3px $black-olive-lighten;
  // box-shadow: 2px 2px 5px rgb(187, 187, 187);
  width: 30%;
  min-width: 400px;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  flex-wrap: nowrap;
  // margin: 1rem;
  opacity: 1;
  overflow: hidden;
  text-align: left;

  // .title {
  //   color: $opal;
  //   font-size: 24px;
  //   font-weight: bold;
  //   text-shadow: 5px 5px white;
  //   z-index: 101;
  // }
  // .title::after {
  //   content: "";
  //   background-color: $opal;
  //   height: 1px;
  //   width: 100%;
  //   position: absolute;
  //   right: 0;
  //   top: 1.75rem;
  // }
  
  .info-box {
    color: $black-olive;
    background: rgba(249, 252, 247, 0.90);
    position:absolute;
    padding: 0 1rem;
    height: 100%;
    transition: all 1s ease-in-out;
    overflow: hidden;
    z-index: 2;
    opacity: 0;
    // margin-top: 2rem;
    // transform: translateX(-100% + 1);
    // border-right: solid 4px $opal;

    
    p {
      font-size: 12px;
    }
    .tools {
      color: $dark-salmon;
      font-size: 14px;
    }

  }
  .content-box {
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