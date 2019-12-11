<template>
    <div class="login">
        <div class="card top">
            <div class="header">登录</div>
            <div class="body">
                <p>您好，这里是赵程课题组。</p>
                <p>欢迎您的访问。</p>
                <p>请您登录。</p>
                <p class="status" v-if="status">{{status}}</p>
            </div>
            <form class="form" @keypress.enter="checkLogin" @input="changeStatus">
                <label for="username">用户名：</label>
                <input id="username" type="text" v-model="username" placeholder="请输入用户名">
                <label for="password">密码：</label>
                <input id="password" type="password" v-model="password" placeholder="请输入密码">
                <button class="submit" @click="checkLogin">提交</button>
            </form>
        </div>
    </div>
</template>

<script>
    import Axios from 'axios'
    import Shortcut from '../shortcut'
    import router from '../router/router'

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
            checkLogin: async function (event) {
                try {
                    let data = await Axios.post('http://dm.panhaoyu.top:88/api/login/', {
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
                    let response = await Shortcut.get('tunnel/');
                    let project_id = response['results'][0]['id'];
                    response = await Shortcut.get('tunnel/' + project_id + '/');
                    let site_title = response.site_title;
                    localStorage.setItem('site_title', site_title);
                    Shortcut.commit('setSiteTitle', site_title);
                    await router.push(this.$route.query.next ? this.$route.query.next : '/');
                } catch (e) {
                    this.status = '登录失败，请重试。';
                    this.username = '';
                    this.password = '';
                }
            },
            changeStatus: function (event) {
                this.status = '';
            }
        },
        beforeRouteEnter: function (to, from, next) {
            next(vm => {
                Shortcut.setTitle('登录页');
            });
        }
    }
</script>

<style scoped lang="sass">
    @import "../assets/include"
    .login
        @include col-center-center
        @include color-black-cyan
        margin: 0 !important

        p
            padding: 3px
            margin: 0

        > .top
            @include self-center-center
            flex: 0 0 auto
            width: 300px
            height: 400px
</style>
