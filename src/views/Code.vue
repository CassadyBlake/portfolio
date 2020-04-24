<template>
  <div class="code-view">
    <h1>This is a code page</h1>
    <div class="container">
      <div class="layout info">
          <h2>Timeline Component</h2>
          <p>I was asked to create a timeline component in order to display particular events related to a surveying job. It needed to display them in order based first on the completion of the event and second on the date created or completed. I enjoyed working out the gradient overlay for the events to disapear into when the timeline is scrolled and the scroll buttons showing or not based on the length of the timeline.</p>
      </div>
      <div class="layout content">
        <timeline />
      </div>
    </div>
    <div class="container">
      <div class="layout info">
          this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
          this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
          this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
          this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
          this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
          this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
      </div>
      <div class="layout content">
          
      </div>
    </div>
    <div class="container">
      <div class="layout info">
          this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
          this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
          this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
          this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
          this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
          this is where i explain myself... lorem ipsum quatar lorem ipsum quatar lorem ipsum quatar
      </div>
      <div class="layout content">
          
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import timeline from "../components/Timeline"
export default {
  name: 'code-view',
  components: {
    timeline
  },
  data: () => {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  border: solid 1px rgba(201, 201, 201, 0.50);
  margin: 2rem 2rem;
  min-width: 800px;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.layout {
  align-items: flex-end;
  flex-direction: row;
  flex-wrap: nowrap;

  &.info {
    height: 300px;
    width: 30%;
    background-color: rgba(201, 201, 201, 0.50);
    padding: 2rem;
    overflow-y: scroll;
  }
  &.content {
    padding: 50px 0;
    width: 70%;
  }
}
</style>