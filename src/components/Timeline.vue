<template>
  <div class="layout">
    <div class="btn-box">
        <div>
      <!-- <v-btn
        v-show="showSideButtons"
        fab
        class="tall-btn"
        @mouseover="scroll_left"
        @mouseout="clearIntervalScroll"
      > -->
            <i class="material-icons">keyboard_arrow_left</i>
        </div>
    </div>
    <div class="overlay-container">
      <div class="overlay-left"></div>
      <div class="overlay-right"></div>
      <div class="history-box">
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
    <div class="btn-box">
      <!-- <v-btn
        v-show="showSideButtons"
        fab
        class="tall-btn"
        @mouseover="scroll_right"
        @mouseout="clearIntervalScroll"
      > -->
      <div>
        <i class="material-icons">keyboard_arrow_right</i>
      </div>
    </div>
  </div>
</template>

<script>
// import GetAllEventsByPhaseId from "@/graphql/GetAllEventsByPhaseId.gql";

// import { mapGetters } from "vuex";
// import { util } from "@/mixins/util";

export default {
  name: "historical-timeline",
  data() {
    return {
      intervalScroll: null,
      intervalValue: 0,
      showSideButtons: false,
      currentTimeLineEvents: [
          { type: 'field', event_completed: true },
          { type: 'tech', event_completed: true },
          { type: 'field', event_completed: false },
          { type: 'drafting', event_completed: true }
      ]
    };
  },
//   mixins: [util],
  watch: {
    currentTimeLineEvents() {
      const historyBoxWidth = document.querySelector(".history-box")
        .clientWidth;
      const olWidth = document.querySelector(".ol-box").scrollWidth;
      this.showSideButtons = historyBoxWidth < olWidth ? true : false;
    }
  },
  computed: {
    // ...mapGetters("prism", [
    //   "getActiveUsers"
    //   // ...
    // ])
  },
  mounted() {
    const historyBoxWidth = document.querySelector(".history-box").clientWidth;
    const olWidth = document.querySelector(".ol-box").scrollWidth;
    this.showSideButtons = historyBoxWidth < olWidth ? true : false;
  },
  methods: {
    userNameFromId(userId) {
      let userName = "";
      this.getActiveUsers.forEach(user => {
        if (user.id === userId) {
          userName = user.first_name + " " + user.last_name;
        }
      });
      return userName;
    },
    scroll_left() {
      let content = document.querySelector(".history-box");
      this.intervalScroll = setInterval(function() {
        this.intervalValue = 5;
        content.scrollLeft -= this.intervalValue;
      }, 10);
    },
    scroll_right() {
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


/* timeline list */
.layout {
    align-items: center;
    flex-direction: row;
}

.btn-box {
    display: inline-flex;
    flex-grow: 1;
    padding: 0 1rem;   

    div {
        width: 50px;
        height: 50px;
        border-radius: 100px;
        box-shadow: 2px 2px 5px rgb(170, 170, 170); 
    }
}

.history-box {
    width: 1000px;
    overflow-x: hidden;
}
.overlay-container {
  position: relative;
  display: inline-flex;
  flex-grow: 10;
}
.overlay-left,
.overlay-right {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50px;
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
  background: #374f5b;
  margin-right: 100px;
  margin: 100px 0 50px 0;
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
  padding-left: 10%;
  width: 100px;
  line-height: 100px;
  min-width: 100px;
  flex-grow: 1;
  background: #374f5b;
  position: relative;
}
li p {
  position: relative;
}
li p .event-type {
  font-size: 12px;
  position: absolute;
  transform-origin: 0 0;
  transform: rotate(-45deg);
  top: -50px;
  left: -15px;
}
li .point-filled,
li .point-empty {
  top: -10px;
  content: "";
  width: 20px;
  height: 20px;
  border: 2px solid #fff;
  border-radius: 20px;
  background-color: #60879b;
  position: absolute;
  box-shadow: 2px 2px 3px #374f5b;
  z-index: 1;
}
li .point-empty {
  transform-origin: 10 10;
  transform: scale(0.75);
  border: none;
  background-color: #fff;
}

/* tall button style */
.tall-btn {
  height: 50px;
  width: 50px;
  border-radius: 25px;
  padding: 0;
  margin: 50px 0 0 0;
  min-height: 0;
  min-width: 0;
  z-index: 1;
}

.material-icons {
    font-size: 48px;
}
</style>
