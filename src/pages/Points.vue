<template xmlns="http://www.w3.org/1999/html">
  <el-row :gutter="20">
    <el-col>
      <el-card class="box-card">
        <template #header>
          项目概况
        </template>
        <el-table :data="tableData" style="width: 100%" >
          <el-table-column v-for="column in columnNames"
                           :prop="column.propertyName"
                           :label="column.label"></el-table-column>
        </el-table>
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
    const propertyNames = computed(() => projectData.pointColumns.map((_, index) => `property${index}`))
    const columnNames = computed(() => projectData.pointColumns.map((label, index) => {
      return {propertyName: propertyNames.value[index], label}
    }))
    const tableData = computed(() =>
        projectData.points.map(item =>
            Object.fromEntries(projectData.pointColumns.map((label, index) =>
                [propertyNames.value[index], item[index]]))))
    return {tableData, imageUrl: projectData.image, columnNames}
  }
})
</script>
