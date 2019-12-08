import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: '无标题',
        user: null,
        user_full_name: null,
        token: null,
    },
    mutations: {
        setTitle(state, title: string) {
            state.title = title;
        },
        setUser(state, payload) {
            state.user = payload.user;
            state.token = payload.token;
            state.user_full_name = payload.user_full_name;
        },
    },
    actions: {},
    modules: {}
})
