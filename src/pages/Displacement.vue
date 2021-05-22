<template xmlns="http://www.w3.org/1999/html">
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card class="box-card">
        <template #header>
          项目概况
        </template>
        <el-form :model="form" label-width="80px">
          <el-form-item label="绘图类型">
            <el-select v-model="form.eigenvalueType" placeholder="请选择数据绘图类型" style="width: 100%">
              <el-option label="年特征值" value="year"></el-option>
              <el-option label="月特征值" value="month"></el-option>
              <el-option label="日特征值" value="day"></el-option>
              <el-option label="小时特征值" value="hour"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="时间范围">
            <el-date-picker
                v-model="form.timeRange"
                type="datetimerange"
                range-separator="至"
                start-placeholder="起始时间"
                end-placeholder="结束时间"
                style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="测点">
            <el-checkbox-group v-model="form.points">
              <el-row v-for="(item, index) in projectData.pointNames">
                <el-checkbox :label="item" name="type"></el-checkbox>
              </el-row>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 120px" @click="onSubmit">绘图</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import projectData from "../utils/projectData";

export default defineComponent({
  name: 'HelloWorld',
  setup: () => {
    const defaultTimeDelta = (new Date(0, 1, 0)).getTime() - (new Date(0, 0, 0)).getTime()
    const form = reactive({
      eigenvalueType: 'day',
      timeRange: [Date.now() - defaultTimeDelta, Date.now()],
      points: [projectData.pointNames.length > 1 ? projectData.pointNames[1] : projectData.pointNames[0]],
    })

    function onSubmit() {
      alert('提交')
    }

    return {form, onSubmit, projectData}
  }
})
</script>
