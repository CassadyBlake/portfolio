<template>
<div class="timeline-box">
  <div class="controls-box">
      <div>
        <p>Add Event</p>
      </div>
      <div class="btn-box" @click="addEvent">
          <i class="material-icons">add_circle</i>
      </div>
      <div>
        <p>Remove Event</p>
      </div>
      <div class="btn-box" @click="removeEvent">
          <i class="material-icons">remove_circle</i>
      </div>
  </div>
  <div class="main-box">
      <div class="btn-box scroll">
          <div 
              v-if="showSideButtons"
              @mouseover="scrollLeft"
              @mouseout="clearIntervalScroll"
          >
            <i class="material-icons left-arrow">keyboard_arrow_left</i>
          </div>
      </div>
      <div class="overlay-container">
          <div class="overlay-left"></div>
          <div class="overlay-right"></div>
          <div class="history-box">
              <div class="line"></div>
              <ol class="ol-box">
                <li v-for="(event, index) in currentTimeLineEvents" :key="index">
                    <p>
                    <span class="event-type">{{ event.type }}</span>
                    </p>
                    <span v-if="event.event_completed" class="point-filled"></span>
                    <span v-else class="point-empty"></span>
                </li>
                <li></li>
              </ol>
          </div>
      </div>
      <div class="btn-box scroll">
          <div 
              v-if="showSideButtons"
              @mouseover="scrollRight"
              @mouseout="clearIntervalScroll"
          >
              <i class="material-icons">keyboard_arrow_right</i>
          </div>
      </div>
  </div>
</div>
</template>

<script>

export default {
  name: "historical-timeline",
  data() {
    return {
      intervalScroll: null,
      intervalValue: 0,
      showSideButtons: false,
      types: ['field', 'tech', 'drafting'],
      startingEvents: [
          { type: 'field', event_completed: true },
          { type: 'tech', event_completed: true },
          { type: 'field', event_completed: false },
          { type: 'drafting', event_completed: true },
          { type: 'tech', event_completed: false },
          { type: 'tech', event_completed: true },
          { type: 'field', event_completed: false }
      ],
      timeLineEvents: [
          { type: 'field', event_completed: true },
          { type: 'tech', event_completed: true },
          { type: 'field', event_completed: false },
          { type: 'drafting', event_completed: true },
          { type: 'tech', event_completed: false },
          { type: 'tech', event_completed: true },
          { type: 'field', event_completed: false }
      ]
    };
  },
//   mixins: [util],
  watch: {
    timeLineEvents() {
      const historyBoxWidth = document.querySelector(".history-box").clientWidth;
      console.log("history box width:", historyBoxWidth);
      const olWidth = document.querySelector(".ol-box").scrollWidth;
      console.log("ol box width:", olWidth);
      this.showSideButtons = historyBoxWidth < olWidth ? true : false;
    }
  },
  computed: {
    currentTimeLineEvents() {
        let newArray = this.timeLineEvents;
        return newArray.sort( (a, b) => {
            // console.log(a, b);
            return (a.event_completed === b.event_completed) 
                ? 0 
                : a.event_completed 
                    ? -1 
                    : 1;
        });
    }
  },
  mounted() {
    const historyBoxWidth = document.querySelector(".history-box").clientWidth;
    console.log("history box width:", historyBoxWidth);
    const olWidth = document.querySelector(".ol-box").scrollWidth;
    console.log("ol box width:", olWidth);
    this.showSideButtons = historyBoxWidth < olWidth ? true : false;
  },
  methods: {
    addEvent() {
        let newEvent = { type: this.types[Math.floor(Math.random() * this.types.length)], event_completed: [true, false][Math.floor(Math.random() * 2)] };
        this.timeLineEvents.push(newEvent);
    },
    removeEvent() {
        this.timeLineEvents.pop();
    },
    scrollLeft() {
      let content = document.querySelector(".history-box");
      this.intervalScroll = setInterval(function() {
        this.intervalValue = 5;
        content.scrollLeft -= this.intervalValue;
      }, 10);
    },
    scrollRight() {
      let content = document.querySelector(".history-box");
      this.intervalScroll = setInterval(function() {
        this.intervalValue = 5;
        content.scrollLeft += this.intervalValue;
      }, 10);
    },
    clearIntervalScroll() {
      clearInterval(this.intervalScroll);
    }
  }
};
</script>
<style lang="scss" scoped>
p {
  margin: 5px 0;
  font-size: 10px;
}

.timeline-box {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 100%;
    min-width: 400px;
    width: 100%;

    .controls-box {
      width: 20%;
    }
    .main-box {
      width: 80%;
      overflow: hidden;
    }
}

.layout {
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 60%;

    &.info {
        height: 300px;
        width: 30%;
        background-color: rgba(201, 201, 201, 0.50);
        padding: 2rem;
        overflow-y: scroll;
    }
    &.content {
        min-width: 600px;
        padding: 20px 0;

    }
    &.controlls {
        text-align: center;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        width: 5%;
        padding: 2rem;
    }
}

.btn-box {
    position: relative;
    display: inline-flex;
    height: 30px;
    width: 25px;
    
    &:hover {
      cursor: pointer;
    }

    &.scroll {
        height: fit-content;
        top: 10px;
        margin: 1rem 1rem;
        align-items: center;
    }

    div {
        width: 28px;
        height: 28px;
        border-radius: 100px;
        box-shadow: 2px 2px 5px rgb(170, 170, 170); 
    }
}

.history-box {
    height: fit-content;
    overflow-x: hidden;
    display: inline-flex;
    width: 450px;

    .line {
        position: absolute;
        background-color: #374f5b71;
        margin: 100px 0 100px 0;
        height: 2px;
        width: 100%;
    }
}
.overlay-container {
  height: 100%;
  position: relative;
  display: inline-flex;
  min-width: 350px;

}
.overlay-left,
.overlay-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 25px;
  height: 100%;
  background-image: linear-gradient(to right, #ffffff, rgba(255, 0, 0, 0));
  z-index: 5;
}
.overlay-right {
  right: 0;
  background-image: linear-gradient(to left, #ffffff, rgba(255, 0, 0, 0));
  z-index: 2;
}
ol {
  white-space: nowrap;
//   background: #374f5b71;
  margin-right: 100px;
  margin: 100px 0 100px 0;
  height: 2px;
  list-style: none;
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
}
li {
  left: -25px;
  padding-left: 30px;
  width: 50px;
  line-height: 50px;
  min-width: 50px;
  flex-grow: 1;
  position: relative;

  p {
    position: relative;

    .event-type {
        font-size: 14px;
        position: absolute;
        transform-origin: 0 0;
        transform: rotate(-45deg);
        top: -75px;
        left: 30px;
    }
  }  
  .point-filled,
  .point-empty {
    top: -6px;
    content: "";
    width: 10px;
    height: 10px;
    border: 2px solid #fff;
    border-radius: 10px;
    background-color: #60879b;
    position: absolute;
    box-shadow: 2px 2px 3px #374f5b;
    z-index: 1;
  }
  .point-empty {
    top: -4px;
    transform-origin: 10 10;
    transform: scale(0.75);
    border: none;
    background-color: #fff;
  }
}

/* tall button style */
.tall-btn {
  display: inline-flex;
  height: 50px;
  width: 25px;
  border-radius: 25px;
  padding: 0;
  margin: 50px 0 0 0;
  min-height: 0;
  min-width: 0;
  z-index: 1;
}

.material-icons {
    font-size: 28px;
    color: #374f5b;
}
</style>
