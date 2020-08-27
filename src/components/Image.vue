<template>
    <vue-load-image class="vue-loader">
        <img slot="image" :class="className" :src="require(`../assets/images/${imageSrc}`)" />
        <div slot="preloader" class="pre-load" />
        <div slot="error">no image</div>
    </vue-load-image>
</template>

<script>
import VueLoadImage from 'vue-load-image'

export default {
    name: "image",
    props: ["imageSrc", "className"],
    components: {
        'vue-load-image': VueLoadImage
    }
}
</script>
<style lang="scss" scoped>
.vue-loader {
    min-height: 560px;
}

.pre-load {
    max-width: 400px;
    height:inherit;
    background: radial-gradient(black,white);
    animation: pulse 2s infinite;
}

.main-image {
    margin-top: 15rem;
    max-width: 400px;
    width: 100%;

    &.landscape {
        max-width: 600px;
    }
}

@keyframes pulse {
    from {
        opacity: 1;
    }

    to {
        opacity: .1;
    }
}

</style>
