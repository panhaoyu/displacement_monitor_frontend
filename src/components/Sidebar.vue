<template>
  <el-aside width="200px">
    <el-menu class="el-menu-vertical-demo">
      <el-menu-item>
        <i class="el-icon-info"></i>
        <template #title>工程概况</template>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-location"></i>
        <template #title>测点信息</template>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-notebook-1"></i>
        <template #title>沉降分析</template>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-notebook-1"></i>
        <template #title>振动分析</template>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-notebook-1"></i>
        <template #title>火灾分析</template>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-notebook-1"></i>
        <template #title>渗漏分析</template>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-phone"></i>
        <template #title>关于我们</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Sidebar"
})
</script>

<style scoped>

</style>