<template>

    <div v-show="visible">
        <div class="overlay-blur"></div>
        <transition name="size" mode="in-out">
            <div class="details-card" v-show="showDetails">
                <div class="modal-toolbar">
                    <button class="circle close flat" @click="close()"><i class="material-icons">close</i></button>
                </div>
                <prism-details />
            </div>
        </transition>
    </div>
</template>
<script>
import prismDetails from "./Prism-Details"

export default {
    name: "details-modal",
    components: {
        prismDetails
    },
    props: ["visible", "project"],
    data: () => {
        return {
            showDetails: false
        }
    },
    methods: {
        close() {
            this.showDetails = false
            setTimeout(() => {
                this.$emit('close')
            },500)
        }
    },
    watch: {
        visible() {
            if(this.visible) {
                this.showDetails = true
            } else {
                this.showDetails = false
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/colors.scss';
    .overlay-blur {
        position: absolute;
        width: 100%;
        height: 100%;
        left:0;
        backdrop-filter: blur(2px);
        background-color: rgba(255, 255, 255, 0.438);
        z-index: 99;
    }
    .details-card {
        transform: scale(1);
        opacity: 1;
        position: absolute;
        justify-self: center;
        left: 5rem;
        right: 5rem;
        z-index: 100;
        box-shadow: 5px 5px 10px black;
        background: white;
        backdrop-filter: blur(2px);
    }
    .modal-toolbar {
        width: 100%;
        padding: .2rem 0;
        background: $opal;
        font-weight: bold;
        font-size: 2rem;
        text-align: right;
    }
    .close {
        position: relative;
        right: 1rem;
    }

    .size-enter-active {
        transition: all .5s ease-in;
        transition-timing-function:cubic-bezier(0.0, 0.0, 0.7, 1.0);
    }
    .size-leave-active {
        transition: all .3s ease-out;
    }
    .size-enter
    /* .slide-leave-active below version 2.1.8 */ {
        transform: scale(0);
        opacity: 0;
    }
    .size-leave-to
    /* .slide-leave-active below version 2.1.8 */ {
        transform: scale(0);
        opacity: 0;
    }
</style>