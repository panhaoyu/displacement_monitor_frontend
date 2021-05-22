import Project from "../pages/Project.vue";

import {createRouter, createWebHashHistory} from "vue-router";
import Points from "../pages/Points.vue";
import Displacement from "../pages/Displacement.vue";


export enum UrlNames {
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
        {path: '/points', component: Points, name: UrlNames.points},
        {path: '/displacement', component: Displacement, name: UrlNames.displacement},
    ],
})

export default router;