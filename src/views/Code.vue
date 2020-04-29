<template>
  <div class="code-view">
    <div class="project-box">
      <div class="info-box">
          <h3>Timeline Component</h3>
          <p>I was asked to create a timeline component in order to display particular events related to a surveying job. It needed to display them in order based first on the completion of the event and second on the date created or completed. I enjoyed working out the gradient overlay for the events to disapear into when the timeline is scrolled and the scroll buttons showing or not based on the length of the timeline.</p>
          <button class="dark" @click="openRoute('https://codepen.io/cassadyblake/pen/oNjWvZV')">Info</button>
      </div>
      <div class="content-box">
        <img src="../assets/images/timeline_img.jpg" />
      </div>
    </div>
    <div class="project-box">
      <div class="info-box">
        <h3>Pomodoro App</h3>
        <p>
          An application created using React for time management. Implimenting the Pomodoro methode, the application tracks a full work-day being split into 25 minute segments with 5 minute breaks in between, and a 30 minute break in the middle. Dealing with time is always tricky and I enjoyed the challenge of logging each 25 minute session and triggering the breaks. The clock was great practice for manipulating css properties with rotation and triangular shapes.
        </p>
        <button class="dark" @click="openRoute('https://cassadyb.com/pomodoro')">Info</button>
      </div>
      <div class="content-box">
          <img src="../assets/images/pomodoro_img.jpg" />
      </div>
    </div>
    <div class="project-box">
      <div class="info-box">
        <h3></h3>
        <p>
          this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
          this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
          this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
          this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
          this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
          this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
        </p>
      </div>
      <div class="content-box">
          
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
      console.log("navigate");
      window.open(destination);
    }
  }
}
</script>

<style lang="scss" scoped>
.code-view {
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
}

.project-box {
  box-shadow: 2px 2px 5px rgb(187, 187, 187);
  margin: 2rem 2rem;
  width: 350px;
  position: relative;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;

  .info-box {
    opacity: 0;
    background-color: #3f3f37;
    color: #daf0ee;
    position:absolute;
    top: 0;
    padding: 0 1rem;
    height: 100%;
    transition: opacity 1s ease-in-out;

    p {
      font-size: 12px;
    }
  }
  .content-box {
    height: 350px;
    img {
      width: 350px;
    }
  }

  &:hover {

    .info-box {
      opacity: .95;
      transition: opacity .5s ease-in-out;
    }
  }
}
</style>