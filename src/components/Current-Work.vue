<template>
  <div id="current-work">
    <div class="thumbnails">
        <a @click="navigateTo('code','#pomodoro')"><img src="../assets/pomodoro_thumb.jpg" width="200px"></a>
        <a @click="navigateTo('code','#console')"><img src="../assets/console_thumb.jpg" width="200px" ></a>
        <a><img src="../assets/pomodoro_thumb.jpg" width="200px"></a>
    </div>
    <div class="info-box"></div>
  </div>
</template>

<script>
export default {
    name: 'current-work',
    data: () => {
        return {

        }
    },
    methods: {
        navigateTo(view, id) {
            this.$emit('navigateTo', view, id);
        }
    }
}
</script>