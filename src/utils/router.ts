import Project from "../pages/Project.vue";

import {createRouter, createWebHashHistory} from "vue-router";


enum UrlNames {
    project = 'project',
    points = 'points',
    displacement = 'displacement',
    vibration = 'vibration',
    fire = 'fire',
    leakage = 'leakage',
    aboutUs = 'about-us',
}


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '', component: Project, name: UrlNames.project},
    ],
})

export default router;