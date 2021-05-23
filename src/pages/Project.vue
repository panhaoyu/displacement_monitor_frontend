<template xmlns="http://www.w3.org/1999/html">
  <el-row :gutter="20">
    <el-col :span="12">
      <el-card class="box-card" style="margin-bottom: 20px">
        <template #header>
          项目概况
        </template>
        <el-table :data="tableData" style="width: 100%" :show-header="false">
          <el-table-column prop="name" width="300px" align="right"></el-table-column>
          <el-table-column prop="value"></el-table-column>
        </el-table>
      </el-card>

      <el-card class="box-card">
        <template #header>项目位置</template>
        <el-image :src="positionUrl" fit="cover" style="height: 300px"></el-image>
      </el-card>
    </el-col>

    <el-col :span="12">
      <el-card class="box-card">
        <template #header>现场照片</template>
        <el-image :src="imageUrl1" fit="cover" style="height: 400px"></el-image>
        <el-image :src="imageUrl2" fit="cover" style="height: 400px"></el-image>
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
    const imageUrl1 = computed(() => projectData.coverImage1)
    const imageUrl2 = computed(() => projectData.coverImage2)
    const positionUrl = computed(() => projectData.positionImage)
    return {tableData, imageUrl1, imageUrl2, positionUrl}
  }
})
</script>
