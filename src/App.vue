<template>
  <el-container>
    <sidebar></sidebar>
    <el-container>
      <el-header>
        <h2>灾变预警运维平台：{{ projectName }}</h2>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import HelloWorld from './pages/Project.vue'
import Sidebar from "./components/Sidebar.vue"
import projectData from "./utils/projectData";

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Sidebar,
  },
  setup() {
    return {
      projectName: projectData.projectName,
    }
  }
})
</script>

