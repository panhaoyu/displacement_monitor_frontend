import {reactive, watchEffect} from "vue";
import image from "../assets/project-1-field.jpg"

const projectData = reactive({
    projectName: '重庆曾家岩大桥隧道工程',
    info: [],
    image: image
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

export default projectData