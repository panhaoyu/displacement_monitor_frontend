<template>
    <div class="home">
        <div class="left">
            <div class="top card">
                <div class="header">项目信息</div>
                <table class="table">
                    <tbody>
                    <tr v-for="metaItem in meta" :key="metaItem[0]">
                        <th>{{metaItem[0]}}</th>
                        <td>{{metaItem[1]}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="left-bottom card">
                <div class="header">项目统计</div>
                <table class="table">
                    <tbody>
                    <tr v-for="metaItem in summary" :key="metaItem[0]">
                        <th>{{metaItem[0]}}</th>
                        <td>{{metaItem[1]}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="right card">
            <div class="header">项目图片</div>
            <img :src="url" v-for="url in imageUrlList" class="image" :key="url" alt="项目图片"/>
        </div>
    </div>
</template>

<script>
    import Shortcut from '../shortcut';

    export default {
        name: 'home',
        data() {
            return {
                imageUrlList: '',
                meta: [
                    ['加载中', '请稍后'],
                ],
                summary: [
                    ['加载中', '请稍后'],
                ],
            }
        },
        async beforeMount() {
            Shortcut.setTitle('首页');
            let response = await Shortcut.get('tunnel/1/');
            this.meta = [
                ['项目名称', response.name],
                ['业主信息', response.company],
                ['项目完成状态', response.construction_status],
                ['周边特殊地质', response.environment_status],
                ['项目编号', response.readable_id],
                ['项目概况', response.info],
                ['项目位置', response.land_block],
                ['安全评价（未完成）', response.judgement],
                ['报警开启状态（未完成）', response.is_alarm_opened ? '已开启' : '未开启'],
                ['预警信息（未完成）', response.warning_status],
            ];
            this.summary = [
                ['测点数量', response.points_count],
                ['传感器数量', response.sensors_count],
            ];

            response = await Shortcut.get('tunnel/1/photos/');
            this.imageUrlList = response.map(node => node['file']);
        }
    }
</script>


<style lang="sass" scoped>
    @import "../assets/include"
    .home
        @include row-stretch-stretch

        .left
            @include col-stretch-stretch
            overflow: auto
            min-width: 400px
            max-width: 400px


            th
                white-space: nowrap

        .right
            margin-left: 14px
            min-width: 600px
            overflow-y: auto
            overflow-x: auto

            .image
                min-height: 50vh
                max-height: 50vh


        .top
            margin-bottom: 14px

</style>