<template>
  <div class="design container">
    <transition name="drop" mode="in-out">
      <div class="design-nav">
        <button class="light flat small" @click="scrollToSection('packaging')">Packaging</button>
        <button class="light flat small" @click="scrollToSection('posters')">Posters</button>
        <button class="light flat small" @click="scrollToSection('graphics')">Graphics</button>
      </div>
    </transition>
    <div class="scroll-top">
      <button @click="scrollToTop" class="circle icon light"><i class="material-icons">arrow_circle_up</i></button>
    </div>
    <h3>Design</h3>
    <h5 id="packaging">Packaging</h5>
    <div class="image-container packaging">
      <div v-for="img in packagingImages" v-bind:key="img">
        <img :src="img" />
      </div>
    </div>
    <h5 id="posters">Posters</h5>
    <div class="image-container">
      <div v-for="img in posterImages" v-bind:key="img">
        <img :src="img" />
      </div>
    </div>
    <h5 id="graphics">Graphics</h5>
    <div class="image-container">
      <div v-for="img in graphicImages" v-bind:key="img">
        <img :src="img" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'design',
  components: {
  },
  data() {
    return {
      graphicImages: ['.././images/shirt-SB-2.png','.././images/shirt-GY-2.png','.././images/shirt-SW-2.png','.././images/shirt-FS-1.png','.././images/shirt-SW-9.png','.././images/shirt-SW-10.png','.././images/shirt-SW-5.png','.././images/shirt-LX-1.png','.././images/shirt-MB-1.png','.././images/shirt-RW-1.png','.././images/shirt-SB-1.png','.././images/shirt-SW-7.png',],
      posterImages: ['.././images/posters-PW-1.jpg','.././images/posters-PW-3.jpg'],
      packagingImages: ['.././images/Projects-Pickwick-Myths-EP.jpg','.././images/Projects-Pickwick-Myths-Vol1.jpg','.././images/Projects-Pickwick-Myths-Vol2.jpg','.././images/Projects-Pickwick-Myths-Vol3.jpg','.././images/Projects-Pickwick-CDE-Split.jpg']
    }
  },
  methods: {
    scrollToTop() {
      const appWindow = document.getElementById('app')
      appWindow.scroll({top: 0, left: 0, behavior: 'smooth'})
    },
    scrollToSection(section) {
      const selection = document.getElementById(section)
      const appWindow = document.getElementById('app')
      const y = selection.offsetTop - 100
      appWindow.scroll({top: y, left: 0, behavior: 'smooth'})
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/colors.scss';
.design {
  padding-top: 11rem;

  h5 {
    margin-top: 8rem;
  }

  .image-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    &.packaging {
      img {
        max-width: 450px;
        margin-bottom: 2rem;
      }
    }

    img {
      max-width: 300px;
    }
  }
}

.design-nav {
  position: fixed;
  background-color: white;
  border-bottom: 1px solid $black-olive; 
  width: 100%;
  left: 0;
  top: 5rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  transition-delay: 1s;
  transition: margin 1s 1s;
  -webkit-animation: 4s linear 0s slidedown;
  animation: 1s linear 0s slidedown;
    
  h3 {
    width: 100%;
  }

  button {
    margin: 0 2rem;
  }
  
}

.scroll-top {
  position: fixed;
  right: 2rem;
  bottom: 1rem;

  button {
    padding-top: 0;
    background-color: $opal;
    color: white;
    border:none;

    .material-icons {
      font-size: 28px;
    }
  }
}

@keyframes slidedown {
  from {
    top: 0;
  } 
  to {
    top: 5rem;
  }
}


</style>