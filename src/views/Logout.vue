<template>
    <div class="logout card">
        <div class="header">登出</div>
        <div class="body">
            您已登出。
        </div>
    </div>
</template>

<script lang="ts">
    import Shortcut from '../shortcut'
    import {Route} from "vue-router";
    import Vue from 'vue'

    export default {
        name: "Logout",
        beforeRouteEnter: function (to: Route, from: Route, next: Function) {
            next(async (vm: Vue) => {
                Shortcut.setTitle('登出页');
                localStorage.removeItem('user');
                Shortcut.commit('logout');
                await Shortcut.timeout(3);
                await Shortcut.push('login');
            })
        }
    }
</script>

<style scoped lang="sass">
    .logout

</style>
