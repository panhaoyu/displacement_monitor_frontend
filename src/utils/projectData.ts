import {computed, reactive, Ref, ref} from "vue";
import image1 from "../assets/project-1-field.jpg"
import image2 from "../assets/project-2-field.jpg"
import eigenvalues from '../assets/eigenvalues.json'

declare interface Project {
    name: string
    info: {
        position: string
        readableName: string
        totalLength: string
        tunnelLength: string
        coverImage: string
    },
    points: {
        name: string
        readableName: string
        position: string
    }[]
}

const allProjects: Ref<Project[]> = ref([{
    name: 'project1',
    info: {
        position: '重庆曾家岩',
        readableName: '重庆曾家岩大桥隧道工程',
        totalLength: '5.51KM',
        tunnelLength: '4.69KM',
        coverImage: image1
    },
    points: [
        {name: 'CD10', readableName: '曾家岩大桥隧道工程一号示范测点', position: '近入口处第一测点'},
        {name: 'CD11', readableName: '曾家岩大桥隧道工程二号示范测点', position: '近入口处第二测点'},
        {name: 'CD12', readableName: '曾家岩大桥隧道工程三号示范测点', position: '近入口处第三测点'},
        {name: 'CD13', readableName: '曾家岩大桥隧道工程四号示范测点', position: '近入口处第四测点'}],
}, {
    name: 'project2',
    info: {
        position: '厦门湾西海域',
        readableName: '厦门第二西通道（海沧隧道）工程',
        totalLength: '7.1KM',
        tunnelLength: '6.306KM',
        coverImage: image2
    },
    points: [
        {name: 'CD3', readableName: '厦门第二西通道工程一号示范测点', position: '近入口处第一测点'},
        {name: 'CD4', readableName: '厦门第二西通道工程二号示范测点', position: '近入口处第二测点'},
        {name: 'CD5', readableName: '厦门第二西通道工程三号示范测点', position: '近入口处第三测点'},
        {name: 'CD6', readableName: '厦门第二西通道工程四号示范测点', position: '近入口处第四测点'}],
}])

const projectName: Ref<string> = ref('project1')
const project = computed(() => allProjects.value.filter(item => item.name === projectName.value)[0])
const projectData = reactive({
    projectName: project.value.info.readableName,
    info: [['项目名称', project.value.info.readableName],
        ['主线全长', project.value.info.totalLength],
        ['隧道总长', project.value.info.tunnelLength],
        ['测点数量', `${project.value.points.length}`],
        ['沉降预警情况', '无预警'],
        ['振动预警情况', '无预警'],
        ['火灾预警情况', '无预警'],
        ['渗漏预警情况', '无预警'],],
    image: project.value.info.coverImage,
    pointColumns: ['测点名称', '测点位置', '测点类型', '运行状态', '报警数量', '最近采集时间', '最近测量值'],
    points: project.value.points.map(item => [
        item.readableName,
        item.position,
        '沉降倾角综合测点',
        '正常运行',
        '0',
        ...eigenvalues.hour.filter(datum => datum[0] === item.name).sort((datum1, datum2) => {
            const t1 = (new Date(<number>datum1[1], <number>datum1[2], <number>datum1[3], <number>datum1[4], <number>datum1[5])).getTime()
            const t2 = (new Date(<number>datum2[1], <number>datum2[2], <number>datum2[3], <number>datum2[4], <number>datum2[5])).getTime()
            return t1 < t2 ? 1 : -1
        }).map(item => {
            return item
        }).slice(0, 1).map(datum => {
            return [`${datum[1]}-${datum[2]}-${datum[3]} ${datum[4]}:00:00`, Math.round(<number>datum[5] * 1000) / 1000 + 'mm']
        })[0],
        '',
    ]),
    pointNames: project.value.points.map(item => item.readableName),
    pointEigenvalueNames: project.value.points.map(item => item.name),
})


export default projectData