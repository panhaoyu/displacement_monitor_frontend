import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/store'

Vue.use(VueRouter);

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/login', name: 'login', component: () => import('../views/Login.vue'), meta: {escapeAuth: true}},
];

const router = new VueRouter({
    routes
});

router.beforeEach(((to, from, next) => {
    // 检测是否已登录
    if (to.meta.escapeAuth) {
        next();
    } else {
        if (store.state.token) {
            next();
        } else {
            if ('user' in localStorage) {
                // TODO 此处应检验Token是否可用
                store.commit('setUser', JSON.parse(localStorage.user));
                next();
            } else {
                next({
                    name: 'login', query: {
                        next: to.path,
                    }
                });
            }
        }
    }
}));

export default router
