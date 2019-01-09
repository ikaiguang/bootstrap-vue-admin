<template>
    <div id="admin-layout">
        <!-- admin header -->
        <AdminLayoutHeader/>

        <!-- admin sidebar-->
        <AdminLayoutSidebar/>

        <!-- admin content-->
        <AdminLayoutContent/>

    </div>
</template>


<style>
    @import "../assets/admin/css/layout.css";
    @import "../assets/admin/css/header.css";
    @import "../assets/admin/css/sidebar.css";
    @import "../assets/admin/css/content.css";
    @import "../assets/font-awesome/css/font-awesome.min.css";
</style>

<script>
    // @ is an alias to /src
    import AdminLayoutHeader from "./layout/Header.vue";
    import AdminLayoutSidebar from "./layout/Sidebar.vue";
    import AdminLayoutContent from "./layout/Content.vue";

    export default {
        components: {
            'AdminLayoutHeader': AdminLayoutHeader,
            'AdminLayoutSidebar': AdminLayoutSidebar,
            'AdminLayoutContent': AdminLayoutContent,
        }
    };
</script>