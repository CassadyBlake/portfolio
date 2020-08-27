<template>
  <div id="view" >
    <div class="overlay-blur" v-show="showDetailsModal"></div>
    <transition name="fade" mode="out-in">
      <details-modal
        :project="selectedProject"
        v-if="showDetailsModal"
        @close="showDetailsModal=false"
      />
    </transition>

    <div class="twelve columns">
      <h3>Projects</h3>
    </div>
    <div 
      class="project-box"
      v-for="(project, index) in projects"  :key="index"
    >
      <div class="info-box">
          <h5>{{ project.name }}</h5>
          <p class="tools">( {{project.skills}} )</p>
          <button class="append-icon" @click="openDetails(project.name)">DETAILS <i class="material-icons">web</i></button>
          <button v-if="project.url" class="append-icon" @click="openRoute(project.url)">VIEW <i class="material-icons">launch</i></button>
      </div>
      <img :src="require(`../assets/images/${project.image}`)" :alt="project.name" />
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
      loaded: false,
      selectedProject: "",
      showDetailsModal: false,
      showBox: false,
      projects: [
        { name: "Prism", 
          skills: "Vue, Vuex, Vuetify, SCSS, GraphQL, Apollo",
          essay: "",
          url: null,
          image: "prism_img.jpg"
        },
        { name: "Pomodoro Timer",
          skills: "React, SCSS, Firebase", 
          essay: "An application created using React for time management. Implimenting the Pomodoro Technique, the application tracks a full work-day being split into 25 minute segments with 5 minute breaks in between, and a 30 minute break in the middle. Dealing with time is always tricky and I enjoyed the challenge of logging each 25 minute session and triggering the breaks. The clock was great practice for manipulating css properties with rotation and triangular shapes.",
          url: "https://cassadyb.com/pomodoro",
          image: "pomodoro_img.jpg"
        },
        { name: "Spun Streaming", 
          skills: "React, React-Router, Audio Elements", 
          essay: "An application created using React for streaming music. Learned to manage assets both within and outside of the public folder. Set up a complex series of functions to play songs, display icons and manipulate volume and song time tracking on scroll. Added a bit of an 80's design vibe to it for fun.",
          url: "https://cassadyb.com/spun",
          image: "spun_img.jpg"
        },
        { name: "Weather Finder", 
          skills: "Javascript, Async, API",
          essay: "An application that displays the current weather conditions for a selected city, built using only 'vanilla' javascript. An excercise in working without a library or framework, this was a great challenge and reminder of how javascript functions within those systems.",
          url: "https://cassadyb.com/weather",
          image: "weather_img.jpg"
        },
        { name: "Timeline Component", 
          skills: "Vue, CSS, SCSS",
          essay: "I was asked to create a timeline component in order to display particular events related to a surveying job. It needed to display them in order based first on the completion of the event and second on the date created or completed. I enjoyed working out the gradient overlay for the events to disapear into when the timeline is scrolled and the scroll buttons showing or not based on the length of the timeline.",
          url: "https://codepen.io/cassadyblake/pen/oNjWvZV",
          image: "timeline_img.jpg"
        },
      ]
    }
  },
  mounted() {
  },
  methods: {
    openDetails(projectName) {
      this.selectedProject = this.projects.find( project => projectName === project.name)
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

#view {
  margin-top: 6rem;
}

@media (min-width: 550px) {
  .container {
    margin-top: 6rem;
    width: 90%;
    max-width: 1200px;
  }
}

.project-box {
  // border: solid 1px $black-olive;
  box-shadow: 1px 1px 10px rgb(163, 163, 163);
  border-radius: 100%;
  width: 250px;
  height: 250px;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 1%;
  opacity: 1;
  overflow: hidden;
  transition: opacity 2s ease-in;
  
  .info-box {
    opacity: 0;
    color: $black-olive;
    padding: 4rem 3rem;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    transition: opacity .5s ease-in-out;

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
    button {
      height: 35px;
    }
  }

  img {
    width: 100%;
    position: absolute;
    opacity: 1;
    transition: opacity .5s ease-in-out;
    // border-bottom: solid 1px $black-olive-lighten;
  }

  &:hover {
    img {
      opacity: .03;
    }
    .info-box {
      opacity: 1;
    }
  }
}

.overlay-blur {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.438);
  opacity: 1;
  z-index: 99;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: scale(1.1)
}

.fade-enter-active,
.fade-leave-active {
    transition: all .5s ease
}

</style>