<template>
  <el-container>
    <sidebar></sidebar>
    <el-container>
      <el-header>
        <h2>
          <span>灾变预警运维平台</span>
          <span style="font-size: smaller; margin-left: 40px">
            <el-select v-model="projectName" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </span>
        </h2>
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
import projectData, {allProjects, projectName} from "./utils/projectData";

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Sidebar,
  },
  setup() {
    return {
      projectName: projectData.projectName,
      projectName: projectName,
      options: allProjects.value.map(project => {
        return {
          value: project.name,
          label: project.info.readableName,
        }
      })
    }
  }
})
</script>

