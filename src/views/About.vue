<template>
  <div class="about">
    <div class="title column-8"><h1>Cassady Lillstrom</h1></div>
    <div class="social column-4">
      <h3>cassady.lillstrom@gmail.com</h3>
      <github
        class="social-icon"
        height="50"
        width="50"
        fill="#454545ff"
        @openLink="openRoute('https://github.com/CassadyBlake')"
      />
      <linkedin
        class="social-icon"
        height="50"
        width="50"
        fill="#454545ff"
        @openLink="openRoute('https://www.linkedin.com/in/cassadyblake/')"
      />
      <twitter
        class="social-icon"
        height="50"
        width="50"
        fill="#454545ff"
        @openLink="openRoute('https://twitter.com/cassadyblake')"
      />
    </div>
    <div class="text-box column-12">
      <p>I am a web-developer with a passion for clean, simple and satisfying design both in the user interface and my code. I enjoy creating intuitive user experiences and emersive animations, without getting overly complex. My background in graphic design has helped me to enjoy all areas of the coding experience, from color selection to data/table creation. I look forward to expanding my skill set and adding my tallents to every new project.</p>
    
    </div>
  </div>
</template>
<script>
import github from "@/assets/icons/github"
import linkedin from "@/assets/icons/linkedin"
import twitter from "@/assets/icons/twitter"

export default {
  name: 'about',
  components: {
    github,
    linkedin,
    twitter
  },
  data() {
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
@import '@/style/colors.scss';
.about {
  padding: 60px 2rem 0 2rem;
  text-align: left;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .title {
    display: inline-flex;
  }

  .social {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }
  .social-icon {
    &:hover {
      cursor: pointer;
    }
  }
}


</style>
