<template>
<div class="container">
    <div class="layout info">
        this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
        this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
        this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
        this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
        this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
        this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
    </div>
    <div class="layout controlls">
        <div class="btn-box" @click="addEvent">
            <i class="material-icons">add_circle</i>
        </div>
        <div class="btn-box" @click="removeEvent">
            <i class="material-icons">remove_circle</i>
        </div>
    </div>
    <div class="layout content">
        <div class="btn-box scroll">
            <div 
                v-if="showSideButtons"
                @mouseover="scrollLeft"
                @mouseout="clearIntervalScroll"
            >
                <i class="material-icons">keyboard_arrow_left</i>
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
          { type: 'drafting', event_completed: true }
      ],
      timeLineEvents: [
          { type: 'field', event_completed: true },
          { type: 'tech', event_completed: true },
          { type: 'field', event_completed: false },
          { type: 'drafting', event_completed: true }
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


.container {
    border: solid 1px rgba(201, 201, 201, 0.50);
    margin: 0 10rem;
    min-width: 1200px;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.layout {
    align-items: flex-end;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 65%;

    &.info {
        height: 300px;
        width: 30%;
        background-color: rgba(201, 201, 201, 0.50);
        padding: 2rem;
        overflow-y: scroll;
    }
    &.content {
        padding: 50px 0;
        min-width: 750px;
    }
    &.controlls {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        width: 5%;
        padding: 2rem;
    }
}

.btn-box {
    position: relative;
    display: inline-flex;
    height: 30px;
    
    &.scroll {
        top: 10px;
        margin: 1rem 1rem;
    }

    div {
        width: 25px;
        height: 25px;
        border-radius: 100px;
        box-shadow: 2px 2px 5px rgb(170, 170, 170); 
    }
}

.history-box {
    width: 600px;
    overflow-x: hidden;
    display: inline-flex;

    .line {
        position: absolute;
        background-color: #374f5b71;
        margin: 100px 0 100px 0;
        height: 2px;
        width: 100%;
    }
}
.overlay-container {
  position: relative;
  display: inline-flex;
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
    font-size: 24px;
    color: #374f5b;
}
</style>
