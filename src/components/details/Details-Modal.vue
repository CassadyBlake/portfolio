<template>
    <div v-show="visible">
        <transition name="size" mode="in-out">
            <div :class="project.name === 'Prism' ? 'details-card large' : 'details-card small'" v-show="showDetails">
                <div class="modal-toolbar">
                    <button class="circle close flat dark small" @click="close()"><i class="material-icons">close</i></button>
                </div>
                <prism-details
                    v-if="project.name === 'Prism'"
                    class="details-content"
                />
                <div class="details-content">
                    <h2>{{project.name}}</h2>
                    <p class="essay">{{project.essay}}</p>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import prismDetails from "./Prism-Details"
import { mapMutations, mapGetters } from "vuex"

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
        ...mapMutations(['setBlurBackground']),
        close() {
            this.showDetails = false
            setTimeout(() => {
                this.$emit('close')
            },500)
        }
    },
    computed: {
        ...mapGetters([
            'getBlurBackground'
            // ...
        ])
    },
    watch: {
        visible() {
            this.setBlurBackground()
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


    .details-card {
        border-radius: 5px;
        margin-top: 1rem;
        margin-bottom: 1rem;
        transform: scale(1);
        opacity: 1;
        position: fixed;
        z-index: 100;
        box-shadow: 5px 5px 10px $black-olive;
        background: white;
        overflow: hidden;

        &.large {
            top: 0;
            bottom: 0;
        }
    }
    /* Larger than mobile */
    @media (min-width: 400px) {
        .details-card {
            width: 85%;
        }
    }

    /* Larger than phablet (also point when grid becomes active) */
    @media (min-width: 550px) {
        .details-card {
            width: 90%;
        }
    }

    /* Larger than tablet */
    // @media (min-width: 750px) {
    //      .details-card {
    //         width: 90%;
    //     }
    // }

    /* Larger than desktop */
    @media (min-width: 1000px) {
         .details-card {
            width: 75%;
            left: 12.5%;

            &.small {
                width: 60%;
                left: 20%;
            }
        }
    }

    /* Larger than Desktop HD */
    @media (min-width: 1200px) {}


    .modal-toolbar {
        width: 100%;
        padding: .5rem 0;
        background: $opal;
        font-weight: bold;
        font-size: 1rem;
        text-align: right;

        .material-icons {
            font-size: 16px;
        }
    }

    .details-content {
        height: 100%;
        overflow-y: scroll;

        h2 {
            margin-top: 3rem;
        }

        p {
            padding: 0 6rem 6rem 6rem;
        }
    }

    .close {
        border: none;
        position: relative;
        right: 1rem;
    }

    .size-enter-active {
        transition: all .5s ease-in;
        transition-timing-function:cubic-bezier(0.0, 0.0, 0.7, 1.0);
    }
    .size-leave-active {
        transition: all .5s ease-out;
    }
    .size-enter
    /* .slide-leave-active below version 2.1.8 */ {
        transform: scale(0);
        opacity: 0;
    }
    .size-leave-to
    /* .slide-leave-active below version 2.1.8 */ {
        transition-delay: .3s;
        transform: scale(0);
        opacity: 0;
    }
</style>