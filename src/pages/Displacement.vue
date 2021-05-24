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
        </el-form>
      </el-card>
    </el-col>

    <el-col :span="16">
      <el-card>
        <template #header>数据表</template>
        <canvas ref="chartElement" id="chart" height="240"></canvas>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import {computed, defineComponent, markRaw, reactive, Ref, ref, watch, watchEffect} from 'vue'
import projectData, {projectName} from "../utils/projectData";
import {Chart, registerables} from "chart.js";
import EigenvaluesFetcher, {FetcherResponse} from "../utils/eigenvaluesFetcher";

Chart.register(...registerables);

export default defineComponent({
  name: 'HelloWorld',
  setup: () => {
    const defaultTimeDelta = (new Date(0, 1, 0)).getTime() - (new Date(0, 0, 0)).getTime()
    const form = reactive({
      eigenvalueType: 'day',
      timeRange: [Date.now() - defaultTimeDelta, Date.now()],
      points: [projectData.pointNames[0]],
    })

    watch(projectName, () => {
      form.points = [projectData.pointNames[0]]
    })


    const fetcher = new EigenvaluesFetcher()
    const data: Ref<FetcherResponse | null> = ref(null)
    //如果正在进行数据更新，避免嵌套执行函数
    let isDataUpdating = false
    watchEffect(() => {
      if (!isDataUpdating) {
        isDataUpdating = true

        const startTime = new Date(form.timeRange[0])
        const endTime = new Date(form.timeRange[1])
        const pointIndex = form.points.map(item => projectData.pointNames.indexOf(item))
        const sensors = pointIndex.map(item => projectData.pointEigenvalueNames[item])


        let result
        switch (form.eigenvalueType) {
          case 'year':
            result = fetcher.year(sensors, startTime, endTime)
            break
          case 'month':
            result = fetcher.month(sensors, startTime, endTime)
            break
          case 'day':
            result = fetcher.day(sensors, startTime, endTime)
            break
          case 'hour':
            result = fetcher.hour(sensors, startTime, endTime)
            break
          default:
            result = fetcher.hour(sensors, startTime, endTime)
        }
        data.value = result

        if (result.times.length > 0) {
          form.timeRange = [result.times[0].getTime(), result.times[result.times.length - 1].getTime()]
        }

        isDataUpdating = false
      }
    })


    const options = computed(() => {
      const pointIndex = form.points.map(item => projectData.pointNames.indexOf(item))
      const sensors = pointIndex.map(item => projectData.pointEigenvalueNames[item])
      const colors = ['#66B1FF', '#FF6384', '#68CBCB', '#FFCD56']
      if (data.value === null) {
        return markRaw({type: 'line'})
      } else {
        return markRaw({
          type: 'line',
          data: {
            labels: data.value.labels,
            datasets: data.value.data.map((line, lineIndex) => {
              const color = colors[projectData.pointEigenvalueNames.indexOf(sensors[lineIndex])]
              return {
                label: form.points[lineIndex],
                data: line,
                // borderWidth: 0,
                // fill: false,
                backgroundColor: color,
                borderColor: color,
              }
            })
          },
          options: {
            lineTension: 0.5,
            elements: {
              point: {radius: 0},
            },
            responsive: true, scales: {
              y: {min: -50, max: 50, title: {text: '沉降（mm）', display: true}},
              x: {title: {text: '观测时间', display: true}},
            }
          }
        })
      }
    })


    let chart: Chart

    const isChartAvailable = ref(false)
    const chartElementRef: Ref<HTMLCanvasElement | null> = ref(null)
    watch(chartElementRef, () => {
      if (chartElementRef.value !== null) {
        isChartAvailable.value = true
      }
    })

    watch(isChartAvailable, () => {
      if (isChartAvailable.value) {
        const element: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('chart')
        const context = <CanvasRenderingContext2D>element.getContext('2d')
        //@ts-ignore
        chart = new Chart(context, options.value)

        watch(options, () => {
          chart.destroy()
          //@ts-ignore
          chart = new Chart(context, options.value)
        })
      }
    })


    return {form, projectData, chartElement: chartElementRef}
  }
})
</script>
