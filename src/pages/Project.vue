<template xmlns="http://www.w3.org/1999/html">
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card class="box-card">
        <template #header>
          项目概况
        </template>
        <el-table :data="tableData" style="width: 100%" :show-header="false">
          <el-table-column prop="name" width="140px" align="right"></el-table-column>
          <el-table-column prop="value"></el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <el-col :span="16">
      <el-card class="box-card">
        <template #header>现场照片</template>
        <el-image :src="imageUrl" fit="cover" style="height: 70vh"></el-image>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import projectData from "../utils/projectData";

export default defineComponent({
  name: 'HelloWorld',
  setup: () => {
    const tableData = computed(() => projectData.info.map(item => {
      return {name: item[0], value: item[1]}
    }))
    return {tableData, imageUrl: projectData.image}
  }
})
</script>
