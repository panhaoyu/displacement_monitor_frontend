<template>
    <div class="home">
        <div class="left">左侧</div>
        <div class="right">右侧</div>
    </div>
</template>

<script lang="ts">
    import HelloWorld from '@/components/HelloWorld.vue';
    import Axios from 'axios';

    export default {
        name: 'home',
        components: {
            HelloWorld
        },
        async beforeMount() {
            this.$store.commit('setTitle', '首页');
        }
    }
</script>


<style lang="sass" scoped>
    @import "../assets/include"
    .home
        @include row-stretch-stretch

        .left
            @include row-center-center
            @include color-blue-white

        .right
            @include row-center-center
</style>