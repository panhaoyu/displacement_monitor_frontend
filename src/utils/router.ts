import HelloWorld from "../components/Home.vue";

import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '', component: HelloWorld},
    ]
})

export default router;