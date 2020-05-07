<template>
  <div class="about">
    <div class="title"><h1>Cassady Lillstrom</h1></div>
    <div class="text-box">I am a web-developer with a passion for clean, simple and satisfying design both in the user interface and my code. I enjoy creating intuitive user experiences and emersive animations, without getting overly complex. My background in graphic design has helped me to enjoy all areas of the coding experience, from color selection to data/table creation</div>
  </div>
</template>
<script>
export default {
  name: 'about',
  components: {
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  padding: 0 2rem;
  text-align: left;
  display: flex;
  flex-direction: row;

  .title {
    display: inline-flex;
  }

  .text-box {
    
  }
}


</style>
