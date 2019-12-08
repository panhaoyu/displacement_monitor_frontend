<template>
    <div class="login">
        <div class="card left">
            <img class="image" src="http://dm.panhaoyu.top:88/media/photos/297450419717499770.png" alt="图片">
        </div>
        <div class="card right">
            <div class="header">登录</div>
            <div class="body">
                <p>您好，欢迎访问位移监测系统。</p>
                <p>请登录。</p>
                <p class="status">{{status}}</p>
            </div>
            <div class="form" @keypress.enter="checkLogin" @input="changeStatus">
                <label for="username">用户名：</label>
                <input id="username" type="text" v-model="username" placeholder="请输入用户名">
                <label for="password">密码：</label>
                <input id="password" type="password" v-model="password" placeholder="请输入密码">
                <button class="submit" @click="checkLogin">提交</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {VueRouter} from "vue-router/types/router";
    import {Vue} from "vue/types/vue";
    import Axios from 'axios'

    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: '',
                status: '',
            }
        },
        methods: {
            checkLogin: async function (event: Event) {
                try {
                    let data = await Axios.post('http://localhost:8001/api/login/', {
                        'username': this.username,
                        'password': this.password,
                    });
                    data = data.data;
                    this.status = '登录成功，正在跳转，请等待。';
                    let payload = {
                        user: data.username,
                        user_full_name: data.user_full_name,
                        token: data.token,
                    };
                    this.$store.commit('setUser', payload);
                    localStorage.setItem('user', JSON.stringify(payload));
                    this.$router.push(this.$route.query.next);
                } catch (e) {
                    console.log(e);
                    this.status = '登录失败，请重试。';
                    this.username = '';
                    this.password = '';
                }
            },
            changeStatus: function (event: Event) {
                this.status = '';
            }
        },
        beforeRouteEnter: function (to: VueRouter, from: VueRouter, next: Function) {
            next((vm: Vue) => {
                vm.$store.commit('setTitle', '登录页');
            });
        }
    }
</script>

<style scoped lang="sass">
    @import "../assets/include"
    .login
        @include row-stretch-stretch

        > .right
            flex: 0 0 auto
            width: 300px
            margin-left: 20px
</style>
