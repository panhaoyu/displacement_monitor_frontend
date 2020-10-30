<template>
  <div class="home">

    <div class="card info">
      <div class="header">项目信息</div>
      <table class="table">
        <tbody>
        <tr v-for="metaItem in meta" :key="metaItem[0]">
          <th>{{ metaItem[0] }}</th>
          <td>{{ metaItem[1] }}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class=" card status">
      <div class="header">项目统计</div>
      <table class="table">
        <tbody>
        <tr v-for="metaItem in summary" :key="metaItem[0]">
          <th>{{ metaItem[0] }}</th>
          <td>{{ metaItem[1] }}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="card description">
      <div class="header">项目简介</div>
      <div class="body">
        <p>
          广环路西段综合管廊工程位于云南省马关县，全长 1180.35m（K0+022～K1+202.35）。东侧起点处设有十字分支口，便于后期与逢春道东侧管廊衔接，在桩号 K0+460 处设有 T
          型分支口，便于后期与盛平街管廊衔接。
        </p>
        综合管廊位于人行道下，为水电单舱布置，管廊设计中心线与道路中心线间距30米，管廊净尺寸为BxH=3.1×3.0m。目前综合管廊已全部完成施工内容，含基坑工程、主体结构、附属工程，项目已完成初验，现只有污水入廊，其他管线暂未入廊，计划于2020年11月完成竣工验收。
      </div>
    </div>

    <div class="card cross">
      <div class="header">管廊截面</div>
      <img src="./image2.png" class="image">
    </div>

    <div class="card position">
      <div class="header">项目位置</div>
      <img src="./image.png" class="image" :key="url" alt="项目图片"/>
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
      ['项目名称', '管廊结构纵向变形自动化监测现场应用'],
      ['业主信息', response.company],
      ['项目完成状态', response.construction_status],
      ['周边特殊地质', response.environment_status],
      ['项目编号', 'Demonstrate utility tunnel'],
      ['项目概况', '云南省文山州马关县广环西路综合管廊工程'],
      ['项目位置', response.land_block],
    ];
    this.summary = [
      ['测点数量', 5],
      ['传感器数量', 5],
    ];

    response = await Shortcut.get('tunnel/1/photos/');
    this.imageUrlList = response.map(node => node['file']);
  }
}
</script>


<style lang="sass" scoped>
@import "../assets/include"
.home
  display: grid
  $line1: 'a d b b b b' 1fr
  $line2: 'a d b b b b' 1fr
  $line3: 'a d b b b b' 1fr
  $line4: 'c c e e e e' 1fr
  $line5: 'c c e e e e' 1fr
  $line6: 'c c e e e e' 1fr
  grid-template: $line1 $line2 $line3 $line4 $line5 $line6 / 1fr 1fr 1fr 1fr 1fr 1fr
  grid-gap: 14px
  margin: 0
  padding: 0
  overflow: hidden

  max-height: 900px
  width: initial

  .info
    grid-area: a

    th
      word-break: keep-all

  .status
    grid-area: d

  .description
    grid-area: b

  .cross
    grid-area: c
    overflow: hidden
    .image
      height: 400px
      object-fit: cover

  .position
    grid-area: e
    overflow: hidden
    .image
      object-fit: cover

</style>