<template>
    <div class="prism-details">
        <div class="column-3 info">
            <h2>Prism</h2>
            An inward facing data storage and employee management app developed for a land/site surveying company. The UI was built using Vue.js and Vuetify, connected to the backend with Apollo and GraphQL and state was managed through Vuex. I was in charge of creating and updating the UI, working closely with the senior developer who was creating the backend to coordinate GraphQL code and a UX designer for layout and flow. My work included creating a calendar component for users to log vacation requests, clock in/out and store payroll, a dashboard view displaying multiple components based on the users position, a system for warning dialogs, as well as many forms, lists, modals and general work flows. I enjoyed working from the ground up to create an effective UI with consistent and clean code and workflow behind it. I liked the usability of the Vuetify UI framework and was able to easily manipulate it to customize certain elements using CSS, specifically SCSS.
        </div>
        <div class="column-9 images">
            <img src="../../assets/images/prism_img_1.png" />
            <img src="../../assets/images/prism_img_2.png" />
            <img src="../../assets/images/prism_img_3.png" />
            <img src="../../assets/images/prism_img_4.png" />
        </div>
    </div>
</template>

<script>
export default {
    name: "prism-details",
    data: () => {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/style/colors.scss';
    .info {
        padding: 1rem;
        text-align: left;

        h2 {
            text-align: center;
        }
    }
    .prism-details {
        display:flex;
        flex-direction: row;

        img {
            max-width: 800px;
            border: solid 1px $black-olive;
            margin: .5rem;
        }
    }
    
</style>