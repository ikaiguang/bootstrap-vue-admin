<template>
    <div id="web-layout">
        <!-- web header -->
        <WebLayoutHeader/>

        <!-- web content -->
        <WebLayoutContent/>

        <!-- web footer -->
        <WebLayoutFooter/>

    </div>
</template>

<style>
    @import "./../assets/web/css/layout.css";
    @import "./../assets/web/css/header.css";
    @import "./../assets/web/css/content.css";
    @import "./../assets/web/css/footer.css";
    @import "./../assets/widget/css/widget.css";
    @import "./../assets/icon/css/icon.css";
</style>

<script>
    import WebLayoutHeader from './layout/Header.vue';
    import WebLayoutContent from './layout/Content.vue';
    import WebLayoutFooter from './layout/Footer.vue';

    export default {
        name: "WebLayout",
        components: {
            'WebLayoutHeader': WebLayoutHeader,
            'WebLayoutContent': WebLayoutContent,
            'WebLayoutFooter': WebLayoutFooter,
        }
    }
</script>