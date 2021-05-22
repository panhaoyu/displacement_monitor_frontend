<template>
  <el-aside width="200px">
    <el-menu class="el-menu-vertical-demo" router="router">
      <el-menu-item :route="{name: UrlNames.project}" index="1">
        <i class="el-icon-info"></i>
        <template #title>工程概况</template>
      </el-menu-item>
      <el-menu-item :route="{name: UrlNames.points}" index="2">
        <i class="el-icon-location"></i>
        <template #title>测点信息</template>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-notebook-1"></i>
        <template #title>沉降分析</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-notebook-1"></i>
        <template #title>振动分析</template>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-notebook-1"></i>
        <template #title>火灾分析</template>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-notebook-1"></i>
        <template #title>渗漏分析</template>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-phone"></i>
        <template #title>关于我们</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
import {defineComponent} from "vue";
import router, {UrlNames} from "../utils/router";

export default defineComponent({
  name: "Sidebar",
  setup() {
    return {
      router,
      UrlNames,
    }
  }
})
</script>

<style scoped>

</style>