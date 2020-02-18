<template>
  <div class="code-view">
    <h1>This is a code page</h1>
    <timeline />
  </div>
</template>

<script>
// @ is an alias to /src
import timeline from "../components/Timeline"
export default {
  name: 'code-view',
  components: {
    timeline
  }
}
</script>

<style scoped>
  
</style>