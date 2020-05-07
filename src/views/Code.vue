<template>
  <div class="code-view">
    <div class="project-box">
      <div class="info-box">
        <h3>Pomodoro App</h3>
        <p>
          An application created using React for time management. Implimenting the Pomodoro methode, the application tracks a full work-day being split into 25 minute segments with 5 minute breaks in between, and a 30 minute break in the middle. Dealing with time is always tricky and I enjoyed the challenge of logging each 25 minute session and triggering the breaks. The clock was great practice for manipulating css properties with rotation and triangular shapes.
        </p>
        <p class="tools">( React, SCSS, Firebase )</p>
        <button class="" @click="openRoute('https://cassadyb.com/pomodoro')">VIEW <i class="material-icons small">launch</i></button>
      </div>
      <div class="content-box">
          <img src="../assets/images/pomodoro_img.jpg" />
      </div>
    </div>
    <div class="project-box">
      <div class="info-box">
        <h3>Weather App (vanilla JS)</h3>
        <p>
          An application that displays the current weather conditions for a selected city, built using only 'vanilla' javascript. An excercise in working without a library or framework, this was a great challenge and reminder of how javascript functions within those systems.
        </p>
        <p class="tools">( Javascript, Async Functions, API )</p>
        <button class="" @click="openRoute('https://cassadyb.com/weather')">VIEW <i class="material-icons small">launch</i></button>
      </div>
      <div class="content-box">
        <img src="../assets/images/weather_img.jpg" />
      </div>
    </div>
    <div class="project-box">
      <div class="info-box">
          <h3>Timeline Component</h3>
          <p>I was asked to create a timeline component in order to display particular events related to a surveying job. It needed to display them in order based first on the completion of the event and second on the date created or completed. I enjoyed working out the gradient overlay for the events to disapear into when the timeline is scrolled and the scroll buttons showing or not based on the length of the timeline.</p>
          <p class="tools">( Vue.js, CSS, SCSS )</p>
          <button class="" @click="openRoute('https://codepen.io/cassadyblake/pen/oNjWvZV')">VIEW <i class="material-icons small">launch</i></button>
      </div>
      <div class="content-box">
        <img src="../assets/images/timeline_img.jpg" />
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import timeline from "../components/Timeline"
export default {
  name: 'code-view',
  components: {
  },
  data: () => {
    return {

    }
  },
  methods: {
    openRoute(destination) {
      window.open(destination);
    }
  }
}
</script>

<style lang="scss" scoped>

$dark-salmon: #e88669;
$opal: #a0c1b9ff;
$opal-darken: rgb(129, 156, 150);
$peach: #fcde9eff;
$baby-powder: #f9fcf7ff;
$baby-powder-darken: rgb(235, 238, 232);
$black-olive: #454545ff;
$black-olive-lighten: rgb(92, 91, 91);


.code-view {
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  padding-top: 2rem;
}

.project-box {
  border: solid 1px white;
  // box-shadow: 2px 2px 5px rgb(187, 187, 187);
  width: 350px;
  position: relative;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 1rem;
  opacity: 1;
  overflow: hidden;

  .info-box {
    color: $black-olive;
    background: radial-gradient($baby-powder, $baby-powder-darken);
    position:absolute;
    top: 0;
    padding: 0 1rem;
    height: 100%;
    transition: all 1s ease-in-out;
    overflow: hidden;
    z-index: 2;
    transform: translateX(-342px);
    border-right: solid 8px $opal;

    
    p {
      font-size: 12px;
    }
    .tools {
      color: $dark-salmon;
      font-size: 16px;
    }

  }
  .content-box {
    height: 350px;
    background: radial-gradient($baby-powder, $baby-powder-darken);

    img {
      // opacity:1;
      width: 350px;
      // transition: opacity 1s ease-in-out;
    }
  }

  &:hover {

    .info-box {
      transform: translateX(0);
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
</style>