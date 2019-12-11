<template>
    <div id="app">
        <aside class="sidebar" v-if="user_full_name">
            <router-link class="brand" :to="{name: 'home'}">{{site_title}}</router-link>
            <router-link
                    :class="link.classObject"
                    :to="link.to"
                    v-for="link in computedLinks" :key="link.title"
            >
                <i :class="link.icon"></i>
                {{link.title}}
            </router-link>
        </aside>
        <div class="container">
            <nav class="nav" v-if="user">
                <div class="text">{{title}}</div>
                <div class="spacer">&nbsp;</div>
                <div class="text" v-if="user">{{user_full_name}}</div>
                <router-link class="link" v-if="user" :to="{name: 'logout'}">登出</router-link>
                <router-link class="link" v-else :to="{name: 'login'}">登录</router-link>
            </nav>
            <router-view class="main"/>
            <footer v-if="user" class="footer">2019 &copy; 同济大学赵程课题组</footer>
        </div>
    </div>
</template>
<script>
    import {mapState} from "vuex";


    export default {
        name: 'app',
        data() {
            return {
                links: [
                    {icon: 'home', title: '项目概况', name: 'home'},
                    {icon: 'location', title: '测点信息', name: 'point'},
                    {icon: 'stat', title: '实时数据', name: 'home'},
                    {icon: 'table', title: '数据统计', name: 'home'},
                    {icon: 'database', title: '后台管理', name: 'home'},
                    {icon: 'phone', title: '关于我们', name: 'login'},
                    {icon: 'warning', title: '管理员操作', name: 'login'},
                ]
            }
        },
        computed: {
            ...mapState([
                "title",
                "user",
                "user_full_name",
                "site_title",
            ]),
            computedLinks: function () {
                return this.links.map(item => {
                    return {
                        icon: 'icon-' + item.icon,
                        title: item.title,
                        to: {
                            name: item.name,
                        },
                        classObject: {
                            'link': true,
                            'active': this.$route.name === item.name,
                        }
                    }
                })
            }
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
                @include color-normal
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

            .active
                background-color: #29282E

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
        min-width: 1000px
        font-family: 微软雅黑, serif
        overflow: auto hidden

    a
        text-decoration: inherit
        color: $color-blue

    div, aside, nav, header, footer, main, section, article
        flex: 1 1 auto
        @include row-stretch-stretch
</style>