<template>
  <el-aside width="200px">
    <el-menu class="el-menu-vertical-demo" router="router">

      <el-menu-item-group title="总体情况">
        <el-menu-item :route="{name: UrlNames.project}" index="1">
          <i class="el-icon-info"></i>
          <template #title>工程总览</template>
        </el-menu-item>
        <el-menu-item :route="{name: UrlNames.points}" index="2">
          <i class="el-icon-location"></i>
          <template #title>测点信息</template>
        </el-menu-item>
      </el-menu-item-group>


      <el-menu-item-group title="数据展示">
        <el-menu-item index="2-1" :route="{name: UrlNames.displacement}">
          <i class="el-icon-notebook-1"></i>
          <template #title>沉降数据</template>
        </el-menu-item>
        <el-menu-item index="2-2">
          <i class="el-icon-notebook-1"></i>
          <template #title>振动数据</template>
        </el-menu-item>
        <el-menu-item index="2-3">
          <i class="el-icon-notebook-1"></i>
          <template #title>渗漏数据</template>
        </el-menu-item>
      </el-menu-item-group>


      <el-menu-item-group title="数据分析">
        <el-menu-item index="4">
          <i class="el-icon-notebook-1"></i>
          <template #title>结构损伤分析</template>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-notebook-1"></i>
          <template #title>结构变形分析</template>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-notebook-1"></i>
          <template #title>水害分析</template>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-notebook-1"></i>
          <template #title>材料劣化分析</template>
        </el-menu-item>
      </el-menu-item-group>

      <el-menu-item-group title="平台相关">
        <el-menu-item index="7">
          <i class="el-icon-phone"></i>
          <template #title>关于我们</template>
        </el-menu-item>
      </el-menu-item-group>
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