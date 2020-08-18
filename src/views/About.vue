<template>
  <div id="view" class="container">
    <div class="twelve columns"><h2>Cassady Lillstrom</h2>
    </div>
    <div class="twelve columns divider"></div>
    <div class="twelve columns text-box">
      <div class="eight columns bio">
        <p><img width="200" src="../assets/images/headshot.jpg" />I am a web-developer with a passion for clean, simple and satisfying design both in the user interface and my code. I enjoy creating intuitive user experiences and emersive animations, without getting overly complex. My background in graphic design has helped me to enjoy all areas of the coding experience, from color selection to data/table creation. I look forward to expanding my skill set and adding my tallents to every new project.</p>
        <p>I have been working as a developer for the past two years, and before that, worked as a graphic artist. My passion for design melds well with a desire to construct useful products with great functionality as well as visual appeal. 
        </p>
      </div>
      <div class="four columns skills">
        <table>
          <th>Skill</th>
          <th>Knowledge</th>
          <tr>
            <td>Javascript</td><td style="color: #69A53B">Advanced</td>
          </tr>
          <tr>
            <td>CSS</td><td style="color: #69A53B">Advanced</td>
          </tr>
          <tr>
            <td>Vue.js</td><td style="color: #69A53B">Advanced</td>
          </tr>
          <tr>
            <td>Illustrator</td><td style="color: #69A53B">Advanced</td>
          </tr>
          <tr>
            <td>React.js</td><td style="color: #F2CA02">Intermediate</td>
          </tr>
          <tr>
            <td>JQuery</td><td style="color: #F2CA02">Intermediate</td>
          </tr>
          <tr>
            <td>Photoshop</td><td style="color: #F2CA02">Intermediate</td>
          </tr>
          <tr>
            <td>GraphQL</td><td style="color: #007ACC">Basic</td>
          </tr>
          <tr>
            <td>Ruby on Rails</td><td style="color: #007ACC">Basic</td>
          </tr>
          <tr>
            <td>Firebase</td><td style="color: #007ACC">Basic</td>
          </tr>
          <tr>
            <td>Apollo</td><td style="color: #007ACC">Basic</td>
          </tr>
        </table>
      </div>
    </div>
    
    <div class="twelve columns divider"></div>
    <div class="twelve columns social">
      <github
        class="social-icon"
        height="40"
        width="40"
        fill="#454545ff"
        @openLink="openRoute('https://github.com/CassadyBlake')"
      />
      <linkedin
        class="social-icon"
        height="40"
        width="40"
        fill="#454545ff"
        @openLink="openRoute('https://www.linkedin.com/in/cassadyblake/')"
      />
      <twitter
        class="social-icon"
        height="40"
        width="40"
        fill="#454545ff"
        @openLink="openRoute('https://twitter.com/cassadyblake')"
      />
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

.container {
  margin-top: 6rem;
  text-align: left;

  .text-box {
    padding-top: 3rem;

    p {
      text-indent: 3rem;
    }

    img {
      float: left;
      margin-right: 3rem;
      border-bottom: solid 5px $opal
    }
  }

  .social {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    padding-top: 3rem;

    div {
      padding-right: 2rem;
    }
  }
  .social-icon {
    &:hover {
      cursor: pointer;
    }
  }
}

.skills {
  // padding-left: 0rem;
}
/* For devices larger than 550px */
@media (min-width: 550px) {
  .skills {
    padding-left: 3rem;
  }
  td, th { 
    width: 50%;
  }
}

td, th {
  text-align: right;
  width: 100%;

  &:first-child {
    text-align: left;
  }
}

th, td {
  padding: 6px 7px; 
}


</style>
