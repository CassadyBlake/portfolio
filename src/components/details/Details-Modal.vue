<template>
    <div :class="project.name === 'Prism' ? 'modal large' : 'modal small'">
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
</template>
<script>
import prismDetails from "./Prism-Details"

export default {
    name: "details-modal",
    components: {
        prismDetails
    },
    props: ["project"],
    data: () => {
        return {
            
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    },
    computed: {
    },
    watch: {
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/colors.scss';


    .modal {
        border-radius: 5px;
        margin-top: 6rem;
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
        .modal {
            width: 85%;
        }
    }

    /* Larger than phablet (also point when grid becomes active) */
    @media (min-width: 550px) {
        .modal {
            width: 90%;
        }
    }

    /* Larger than tablet */
    // @media (min-width: 750px) {
    //      .modal {
    //         width: 90%;
    //     }
    // }

    /* Larger than desktop */
    @media (min-width: 1000px) {
         .modal {
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
</style>