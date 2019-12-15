<template>
    <div class="about card">
        <div class="body">
            <p>您好，这里是赵程课题组。</p>
            <p>很高兴您能访问我们的网站。</p>
            <p>我们致力于发挥科学技术对生产力的推动作用，将论文写在祖国大地，用实际行动为国家生产建设做出项献。</p>
            <p>欢迎访问我们的主页：<a href="https://geotec.tongji.edu.cn/selfpage/zhaocheng/zhaocheng.htm">赵程老师</a></p>
        </div>
    </div>
</template>

<script>
    import shortcut from "../shortcut";

    export default {
        name: "About",
        mounted() {
            shortcut.setTitle('关于我们');
        }
    }
</script>

<style scoped lang="sass">
    .about

</style>
