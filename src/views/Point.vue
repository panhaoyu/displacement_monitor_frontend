<template>
    <div class="points card">
        <div class="header">测点信息表</div>
        <table class="table">
            <thead>
            <tr>
                <th>测点编号</th>
                <th>测点名称</th>
                <th>测点信息</th>
                <th>地图横坐标</th>
                <th>地图纵坐标</th>
                <th>传感器数量</th>
                <th>报警开启状态</th>
            </tr>
            </thead>
            <tbody v-if="points.length > 0">
            <tr v-for="point in points" :key="point.id">
                <td>{{point.id}}</td>
                <td>{{point.name}}</td>
                <td>{{point.info}}</td>
                <td>{{Math.round(point.map_x * 100) / 100}}</td>
                <td>{{Math.round(point.map_y * 100) / 100}}</td>
                <td>{{point.sensors_count}}</td>
                <td>{{point.is_alarm_opened ? "已开启" : "未开启"}}</td>
            </tr>
            </tbody>
            <tbody v-else>
            <tr>
                <td>加载中</td>
                <td>加载中</td>
                <td>加载中</td>
                <td>加载中</td>
                <td>加载中</td>
                <td>加载中</td>
                <td>加载中</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import shortcut from "../shortcut";

    export default {
        name: "Points",
        data() {
            return {
                points: [],
            }
        },
        mounted: async function () {
            shortcut.setTitle('测点信息');
            let data = await shortcut.get('project/');
            data = await shortcut.get(`project/${data['results'][0]['id']}/point/`);
            data = data['results'];
            this.points = data;
        }
    }
</script>

<style scoped lang="sass">
    .points

</style>
