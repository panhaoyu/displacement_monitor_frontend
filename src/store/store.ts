import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        site_title: localStorage.getItem('site_title'),
        title: '无标题',
        user: null,
        user_full_name: null,
        token: null,
    },
    mutations: {
        setSiteTitle(state, title) {
            state.site_title = title;
        },
        setTitle(state, title) {
            state.title = title;
            // @ts-ignore
            document.querySelector('title').innerText = title;
        },
        setUser(state, payload) {
            state.user = payload.user;
            state.token = payload.token;
            state.user_full_name = payload.user_full_name;
        },
        logout(state) {
            state.user_full_name = null;
            state.user = null;
            state.token = null;
        }
    },
    actions: {},
    modules: {}
})
