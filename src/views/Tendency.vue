<template>
    <div class="tendency">
        <div class="card left">
            <div class="header">元数据</div>
            <div class="form">
                <label for="type">类型</label>
                <select id="type" v-model="typeId">
                    <option v-for="type in typeList" :key="type.id" :value="type.id">{{type.name}}</option>
                </select>
                <label for="tunnel">隧道</label>
                <select id="tunnel" v-model="tunnelId" @change="updatePoints">
                    <option v-for="tunnel in tunnelList" :key="tunnel.id" :value="tunnel.id">{{tunnel.name}}</option>
                </select>
                <label for="point">测点</label>
                <select id="point" v-model="pointId" @change="updateSensors">
                    <option v-for="point in pointList" :key="point.id" :value="point.id">{{point.name}}</option>
                </select>
                <label for="sensor">传感器</label>
                <select id="sensor" v-model="sensorId">
                    <option v-for="sensor in sensorList" :key="sensor.id" :value="sensor.id">{{sensor.name}}</option>
                </select>
                <label v-if="showYear" for="year">年份</label>
                <input v-if="showYear" id="year" type="number" v-model="year" min="2019" :max="yearMax">
                <label v-if="showMonth" for="month">月份</label>
                <input v-if="showMonth" id="month" type="number" v-model="month" min="1" max="12">
                <label v-if="showDay" for="day">日期</label>
                <input v-if="showDay" id="day" type="number" v-model="day" min="1" :max="dayMax">
                <button @click="updateChart">更新图表</button>
            </div>
        </div>
        <div class="card right">
            <div class="header">{{chartTitle}}</div>
            <div class="body">
                <canvas id="chart">
                    您的浏览器不支持CANVAS画布，因此无法使用图表展示功能。
                </canvas>
            </div>
        </div>
    </div>
</template>

<script>
    import Chart from 'chart.js';
    import shortcut from "../shortcut";

    let defaultTunnelList = [{id: 0, name: '加载中'}];
    let defaultPointList = [{id: 0, name: '加载中'}];
    let defaultSensorList = [{id: 0, name: '加载中'}];
    let COLORS = ['#60acfc', '#32d3eb', '#5bc49f', '#feb64d', '#ff7c7c', '#9287e7'];

    export default {
        name: "Tendency",
        data() {
            return {
                typeList: [
                    {id: 1, name: '年特征值'},
                    {id: 2, name: '月特征值'},
                    {id: 3, name: '日特征值'},
                    {id: 4, name: '小时特征值'},
                ],
                tunnelList: defaultTunnelList,
                pointList: defaultPointList,
                sensorList: defaultSensorList,
                typeId: 2,
                tunnelId: 0,
                sensorId: 0,
                pointId: 0,
                year: (new Date()).getFullYear(),
                month: (new Date()).getMonth() + 1,
                day: (new Date()).getDate(),
                yearMax: (new Date()).getFullYear(),
                chartTitle: '趋势图加载中',
                chart: null,
            }
        },
        computed: {
            meta() {
                return [
                    ['年', this.year],
                ].map(item => {
                    return {
                        key: item[0],
                        value: item[1],
                    }
                })
            },
            typeObject() {
                for (let type of this.typeList) {
                    if (type.id === this.typeId) {
                        return type;
                    }
                }
            },
            tunnelObject() {
                for (let tunnel of this.tunnelList) {
                    if (tunnel.id === this.tunnelId) {
                        return tunnel;
                    }
                }
            },
            pointObject() {
                for (let point of this.pointList) {
                    if (point.id === this.pointId) {
                        return point;
                    }
                }
            },
            sensorOboject() {
                for (let sensor of this.sensorList) {
                    if (sensor.id === this.sensorId) {
                        return sensor;
                    }
                }
            },
            dayMax() {
                if (this.month === 2) {
                    return 29;
                } else if ([1, 3, 5, 7, 8, 10, 12].includes(this.month)) {
                    return 31;
                } else {
                    return 30;
                }
            },
            showYear() {
                return [2, 3, 4].includes(this.typeObject.id);
            },
            showMonth() {
                return [3, 4].includes(this.typeObject.id);
            },
            showDay() {
                return [4].includes(this.typeObject.id);
            },
        },
        methods: {
            async updateTunnels() {
                this.tunnelList = defaultTunnelList;
                this.tunnelId = 0;
                let response = await shortcut.get('tunnel/');
                this.tunnelList = response.results;
                this.tunnelId = this.tunnelList[0].id;
            },
            async updatePoints() {
                this.pointList = defaultPointList;
                this.pointId = 0;
                let response = await shortcut.get(`point/`, {tunnelId: this.tunnelId});
                this.pointList = response.results;
                this.pointId = this.pointList[0].id;
            },
            async updateSensors() {
                this.sensorList = defaultSensorList;
                this.sensorId = 0;
                let response = await shortcut.get(`sensor/`, {pointId: this.pointId});
                this.sensorList = response.results;
                this.sensorId = this.sensorList[0].id;
            },
            async updateChart() {
                let xValues = [];
                let yValues = [];
                let data;
                switch (this.typeObject.id) {
                    case 1://年特征值
                        data = await shortcut.get(`eigenvalue/year/`, {sensorId: this.sensorId});
                        data.results.forEach(item => {
                            xValues.push(item.year);
                            yValues.push(item.value);
                        });
                        break;
                    case 2://月特征值
                        data = await shortcut.get(`eigenvalue/month/`, {year: this.year, sensorId: this.sensorId});
                        data.results.forEach(item => {
                            xValues.push(`${item.year}年${item.month}月`);
                            yValues.push(item.value);
                        });
                        data = await shortcut.get(`eigenvalue/month/`, {year: this.year + 1, sensorId: this.sensorId});
                        data.results.forEach(item => {
                            xValues.push(`${item.year}年${item.month}月`);
                            yValues.push(item.value);
                        });
                        break;
                    case 3://日特征值
                        data = await shortcut.get(`eigenvalue/day/`, {
                            year: this.year, month: this.month, sensorId: this.sensorId
                        });
                        data.results.forEach(item => {
                            xValues.push(`${item.month}月${item.day}日`);
                            yValues.push(item.value);
                        });
                        break;
                    case 4://小时特征值
                        let params = {year: this.year, month: this.month, sensorId: this.sensorId};
                        data = await shortcut.get(`eigenvalue/hour/`,
                            {year: this.year, month: this.month, day: this.day, sensorId: this.sensorId}
                        );
                        data.results.forEach(item => {
                            xValues.push(`${item.day}日${item.hour}时`);
                            yValues.push(item.value);
                        });
                        break;
                }
                this.chart && this.chart.destroy();
                let context = document.querySelector('#chart');
                try {
                    //在创建图表的时候，可能会由于数据加载不全等问题而报错，采取直接忽略的办法。
                    this.chart = new Chart(context, {
                        type: 'line',
                        data: {
                            labels: xValues,
                            datasets: [{
                                label: '数据趋势线',
                                data: yValues,
                                borderWidth: 1,
                                fill: false,
                                backgroundColor: COLORS[0],
                                borderColor: COLORS[0],
                            }]
                        }, options: {
                            responsive: true,
                            scales: {
                                xAxes: [{
                                    ticks: {
                                        autoSkip: false,
                                    }
                                }]
                            }
                        }
                    })
                } catch (e) {
                }
            }
        },
        async mounted() {
            shortcut.setTitle('趋势图');
            await this.updateTunnels();
            await this.updatePoints();
            await this.updateSensors();
            await this.updateChart();
        }
    }
</script>

<style scoped lang="sass">
    .tendency
        .left
            margin-right: 10px
            width: 200px
            flex: 0 0 auto
            overflow-y: auto

        .right
            width: 1px

</style>
