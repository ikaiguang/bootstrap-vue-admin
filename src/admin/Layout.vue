<template>
    <div id="admin-layout">
        <!-- admin header -->
        <AdminLayoutHeader/>

        <!-- admin sidebar-->
        <AdminLayoutSidebar/>

        <!-- admin content-->
        <AdminLayoutContent/>

        <!-- admin footer-->
        <AdminLayoutFooter/>

    </div>
</template>


<style>
    @import "../assets/font-awesome/css/font-awesome.min.css";
    @import "../assets/admin/css/layout.css";
</style>

<script>
    // @ is an alias to /src
    import AdminLayoutHeader from "./layout/Header.vue";
    import AdminLayoutSidebar from "./layout/Sidebar.vue";
    import AdminLayoutContent from "./layout/Content.vue";
    import AdminLayoutFooter from "./layout/Footer.vue";

    export default {
        components: {
            'AdminLayoutHeader': AdminLayoutHeader,
            'AdminLayoutSidebar': AdminLayoutSidebar,
            'AdminLayoutContent': AdminLayoutContent,
            'AdminLayoutFooter': AdminLayoutFooter,
        }
    };
</script>