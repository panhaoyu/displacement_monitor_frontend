<template>
    <div id="app">
        <aside class="sidebar" v-if="user_full_name">
            <router-link class="brand" to="/">位移监测系统</router-link>
            <router-link class="link" to="/"><i class="icon-home"></i>项目概况</router-link>
            <router-link class="link" to="/"><i class="icon-location"></i>测点信息</router-link>
            <router-link class="link" to="/"><i class="icon-stat"></i>实时数据</router-link>
            <router-link class="link" to="/"><i class="icon-table"></i>数据统计</router-link>
            <router-link class="link" to="/"><i class="icon-database"></i>后台管理</router-link>
            <router-link class="link" to="/"><i class="icon-phone"></i>关于我们</router-link>
            <router-link class="link" to="/"><i class="icon-warning"></i>管理员操作</router-link>
        </aside>
        <div class="container">
            <nav class="nav">
                <div class="text">{{title}}</div>
                <div class="spacer">&nbsp;</div>
                <div class="text" v-if="user">{{user_full_name}}</div>
                <router-link class="link" v-if="user" :to="{name: 'logout'}">登出</router-link>
                <router-link class="link" v-else :to="{name: 'login'}">登录</router-link>
            </nav>
            <router-view class="main"/>
            <footer class="footer">2019 &copy; 同济大学赵程课题组</footer>
        </div>
    </div>
</template>
<script lang="ts">
    import {mapState} from "vuex";
    import {VueRouter} from "vue-router/types/router";
    import {Vue} from "vue/types/vue";

    export default {
        name: 'app',
        computed: {
            ...mapState([
                "title",
                "user",
                "user_full_name",
            ])
        },
    }
</script>
<style lang="sass" scoped>
    @import "assets/include"
    @import "assets/icon.css"
    #app
        @include row-stretch-stretch

        > .sidebar
            @include col-stretch-stretch
            background-color: #32323A
            color: $color-white
            flex: 0 0 auto
            width: 200px
            overflow-y: auto

            > .brand, > .link
                @include row-start-center
                @include color-white-black
                background-color: #32323A
                color: $color-white

                &:hover
                    color: rgba(124, 216, 169, 1)
                    background-color: #29282E
                flex: 0 1 auto

                > i
                    margin: 0 16px

            > .link
                font-size: 14px
                padding: 20px

            > .brand
                font-size: 22px
                padding: 24px

        > .container
            @include col-stretch-stretch

            > .nav
                @include row-stretch-center
                @include color-normal
                flex: 0 0 auto

                .text, .link
                    flex: 0 0 auto
                    padding: 20px 30px

                .link
                    @include color-normal

                    &:hover
                        background-color: $color-bg-darken

                    &:active
                        background-color: $color-bg-darken-darken


            > .main
                margin: 20px 14px
                overflow-y: auto

            > .footer
                @include row-start-center
                @include color-normal
                flex: 0 0 auto
                padding: 16px 30px
</style>


<style lang="sass">
    @import "assets/include"
    body
        @include row-stretch-stretch
        @include color-black-white
        margin: 0
        height: 100vh
        width: 100vw
        font-family: 微软雅黑, serif
        overflow-y: auto

    a
        text-decoration: inherit
        color: $color-blue

    div, aside, nav, header, footer, main, section, article
        flex: 1 1 auto
        @include row-stretch-stretch
</style>