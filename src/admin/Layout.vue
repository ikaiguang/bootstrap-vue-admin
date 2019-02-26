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
    @import "./../assets/admin/css/layout.css";
    @import "./../assets/admin/css/header.css";
    @import "./../assets/admin/css/sidebar.css";
    @import "./../assets/admin/css/content.css";
    @import "./../assets/admin/css/footer.css";
    @import "./../assets/widget/css/widget.css";
    @import "./../assets/icon/css/icon.css";
</style>

<script>
    // @ is an alias to /src
    import AdminLayoutHeader from "./layout/Header.vue";
    import AdminLayoutSidebar from "./layout/Sidebar.vue";
    import AdminLayoutContent from "./layout/Content.vue";
    import AdminLayoutFooter from "./layout/Footer.vue";

    export default {
        name: "AdminLayout",
        components: {
            'AdminLayoutHeader': AdminLayoutHeader,
            'AdminLayoutSidebar': AdminLayoutSidebar,
            'AdminLayoutContent': AdminLayoutContent,
            'AdminLayoutFooter': AdminLayoutFooter,
        }
    };
</script>