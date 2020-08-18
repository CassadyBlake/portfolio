<template>
  <div id="view" class="design container">

    <!-- DESKTOP -->
    <div class="desktop">
    <div style="overflow: hidden">
    <div class="design-nav twelve columns">
      <button class="light flat small" @click="selectCategory('packaging')">Packaging</button>
      <button class="light flat small" @click="selectCategory('poster')">Posters</button>
      <button class="light flat small" @click="selectCategory('graphic')">Graphics</button>

      <div class="twelve columns category" v-show="category === 'packaging'">
        <div 
          @click="selectedImage=image"
          class="thumbnail"
          v-for="(image, index) in packagingImages" 
          :key="'thumb-' + index"
        >
          <img
            :src="require(`@/assets/images/${image}`)" 
            :alt="`${image}`"
          />
        </div>
      </div>
      <div class="twelve columns category" v-show="category === 'poster'">
        <div 
          @click="selectedImage=image"
          class="thumbnail" 
          v-for="(image, index) in posterImages" 
          :key="'thumb-' + index"
        >
          <img 
            class="poster"
            :src="require(`@/assets/images/${image}`)" 
            :alt="`${image}`"
          />
        </div>
      </div>
      <div class="twelve columns category" v-show="category === 'graphic'">
        <div
          @click="selectedImage=image"
          class="thumbnail"
          v-for="(image, index) in graphicImages" 
          :key="'thumb-' + index"
        >
          <img
            class="graphic"
            :src="require(`@/assets/images/${image}`)" 
            :alt="`${image}`"
          />
        </div>
      </div>
    </div>
    </div>

    <img
      :class="category === 'packaging' ? 'main-image landscape' : 'main-image' "
      :src="require(`@/assets/images/${selectedImage}`)"
      :alt="selectedImage"
    />
    <div class="twelve columns button-container">
      <button class="light flat circle" @click="selectImage('left')"><i class="material-icons">arrow_left</i></button>
      <button class="light flat circle" @click="selectImage('right')"><i class="material-icons">arrow_right</i></button>
    </div>
    </div>

    <!-- MOBILE -->
      <div class="mobile">
      <div class="design-nav">
        <button class="light flat small" @click="scrollToSection('packaging')">Packaging</button>
        <button class="light flat small" @click="scrollToSection('posters')">Posters</button>
        <button class="light flat small" @click="scrollToSection('graphics')">Graphics</button>
      </div>
      <div class="scroll-top">
        <button @click="scrollToTop" class="circle icon light"><i class="material-icons">arrow_circle_up</i></button>
      </div>
      <h3>Design</h3>
      <h5 id="packaging">Packaging</h5>
        <div 
          class="mobile-img"
          v-for="(image, index) in packagingImages" 
          :key="'packaging-' + index"
        >
          <img
            :src="require(`@/assets/images/${image}`)" 
            :alt="`${image}`"
          />
        </div>
      <h5 id="posters">Posters</h5>
        <div 
          class="mobile-img" 
          v-for="(image, index) in posterImages" 
          :key="'poster-' + index"
        >
          <img 
            class="poster"
            :src="require(`@/assets/images/${image}`)" 
            :alt="`${image}`"
          />
        </div>
      <h5 id="graphics">Graphics</h5>
        <div
          class="mobile-img"
          v-for="(image, index) in graphicImages" 
          :key="'graphic-' + index"
        >
          <img
            class="graphic"
            :src="require(`@/assets/images/${image}`)" 
            :alt="`${image}`"
          />
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
      lazyloadImages: null,
      lazyloadThrottleTimeout: null,
      graphicImages: ['shirt-SB-2.png','shirt-GY-2.png','shirt-SW-2.png','shirt-FS-1.png','shirt-SW-9.png','shirt-SW-10.png','shirt-SW-5.png','shirt-LX-1.png','shirt-MB-1.png','shirt-RW-1.png','shirt-SB-1.png','shirt-SW-7.png',],
      posterImages: ['posters-PW-1.jpg','posters-PW-3.jpg'],
      packagingImages: ['Projects-Pickwick-Myths-EP.jpg','Projects-Pickwick-Myths-Vol1.jpg','Projects-Pickwick-Myths-Vol2.jpg','Projects-Pickwick-Myths-Vol3.jpg','Projects-Pickwick-CDE-Split.jpg'],
      category: 'graphic',
      selectedImage: 'shirt-SB-2.png'
    }
  },
  mounted() {
      
  },
  methods: {
    selectImage(dir) {
      if(dir === 'left') {
        if(this.category === 'graphic') {
          this.selectedImage = this.graphicImages[this.graphicImages.indexOf(this.selectedImage) -1]
        }
        if(this.category === 'poster') {
          this.selectedImage = this.posterImages[this.posterImages.indexOf(this.selectedImage) -1]
        }
        if(this.category === 'packaging') {
          this.selectedImage = this.packagingImages[this.packagingImages.indexOf(this.selectedImage) -1]
        }
      } else {
        if(this.category === 'graphic') {
          this.selectedImage = this.graphicImages[this.graphicImages.indexOf(this.selectedImage) +1]
        }
        if(this.category === 'poster') {
          this.selectedImage = this.posterImages[this.posterImages.indexOf(this.selectedImage) +1]
        }
        if(this.category === 'packaging') {
          this.selectedImage = this.packagingImages[this.packagingImages.indexOf(this.selectedImage) +1]
        }
      }
    },
    selectCategory(category) {
      this.category = category
      if(category === 'graphic') {
        this.selectedImage = this.graphicImages[0]
      }
      if(category === 'poster') {
        this.selectedImage = this.posterImages[0]
      }
      if(category === 'packaging') {
        this.selectedImage = this.packagingImages[0]
      }
    },
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
    // transitionOver() {
    //   console.log(document.querySelector("#view"))
    // }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/colors.scss';
.design {

  h5 {
    margin-top: 8rem;
  }

  // img {
  //   max-width: 100%;
  //   height: auto;
  //   margin-bottom: 2rem;
  // }

  .category {
    justify-content: space-evenly;
    display: inline-flex;
    flex-wrap: nowrap;
    margin-left: 4rem;
  }
  .thumbnail {
    position: relative;
    width: 35px;
    height: 35px;
    overflow: hidden;
    border-radius: 100%;
    
    img {
      position: absolute;
      left: 15%;
      top: 50%;
      height: 200%;
      width: auto;
      -webkit-transform: translate(-60%,-55%);
          -ms-transform: translate(-60%,-55%);
              transform: translate(-60%,-55%);
      
      &.poster {
        left: 40%;
        width: 200%;
        height: auto
      }

      &.graphic {
        left: 50%;
        height: 300%;
      }
    }
  }

  .main-image {
    margin-top: 25%;
    max-width: 400px;
    width: 100%;

    &.landscape {
      max-width: 600px;
    }
  }

  .image-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
  }

  .mobile-img {
    img {
      width: 100%;
      max-width: 400px;
    }
  }
}

.design-nav {
  position: fixed;
  background-color: white;
  border-bottom: 1px solid $black-olive; 
  width: 100%;
  left: 0;
  margin-top: 5rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  -webkit-animation: 1s linear 0s slidedown;
  animation: 1s linear 0s slidedown;
    
  h3 {
    width: 100%;
  }

  button {
    margin: 0 2rem;
  }
  
}

.button-container {
  button {
    margin: 2rem;
  }
}

.scroll-top {
  position: fixed;
  right: 2rem;
  bottom: 1rem;

  button {
    background-color: $opal;
    color: white;
    border:none;

    .material-icons {
      font-size: 28px;
    }
  }
}

.mobile {
  display: none;
}
.desktop {
  display: inline
}
@media (max-width: 750px) {
 .mobile {
   display: inline;
 }
 .desktop {
   display: none;
 }

 .design-nav {
   justify-content: space-between;
 }
}


@keyframes slidedown {
  0% {
    margin-top: -5rem;
  } 
  20% {
    margin-top: -5rem;
  }
  100% {
    margin-top: 5rem;
  }
}


</style>