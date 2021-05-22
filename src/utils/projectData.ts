import {reactive, watchEffect} from "vue";
import image from "../assets/project-1-field.jpg"

const projectData = reactive({
    projectName: '重庆曾家岩大桥隧道工程',
    info: [['项目信息字段名称', '项目信息字段值']],
    image: image,
    pointColumns: ['测点名称', '测点位置', '测点类型', '运行状态', '报警数量', '最近采集时间', '最近测量值'],
    points: [['']],
    pointNames: [''],
    pointEigenvalueNames: ['CD3', 'CD4', 'CD5', 'CD6'],
})

watchEffect(() => {
    projectData.info = [
        ['项目名称', projectData.projectName],
        ['主线全长', '5.51km'],
        ['隧道总长', '4.69km'],
        ['测点数量', '4'],
        ['沉降预警情况', '无预警'],
        ['振动预警情况', '无预警'],
        ['火灾预警情况', '无预警'],
        ['渗漏预警情况', '无预警'],
    ]
})

watchEffect(() => {
    projectData.points = [
        ['一号示范测点', '近入口侧1号测点', '沉降倾角综合测点', '正常运行', '0', '2021-05-22 17:21:00', '0.00'],
        ['二号示范测点', '近入口侧2号测点', '沉降倾角综合测点', '正常运行', '0', '2021-05-22 17:21:00', '13.21'],
        ['三号示范测点', '近入口侧3号测点', '沉降倾角综合测点', '正常运行', '0', '2021-05-22 17:21:00', '11.72'],
        ['四号示范测点', '近入口侧4号测点', '沉降倾角综合测点', '正常运行', '0', '2021-05-22 17:21:00', '17.31'],
    ]
})

watchEffect(() => {
    projectData.pointNames = projectData.points.map(item => item[0])
})

export default projectData