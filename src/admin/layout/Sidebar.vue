<template>
    <div id="admin-sidebar">

        <a href="#" @click="toggleAdminSidebarMenu" class="mobile-phone">
            <i class="fa fa-hand-o-right"></i>&nbsp;<span>菜单</span>
        </a>

        <b-nav vertical id="admin-sidebar-menu">

            <b-nav-item>
                <i class="fa fa-home"></i> <span>Dashboard</span>
            </b-nav-item>

            <b-nav-item class="active">
                <i class="fa fa-table"></i> <span>Table</span>
            </b-nav-item>

            <b-nav-item class="submenu open">
                <i class="fa fa-android"></i> <span>Form</span>
                <b-nav vertical>

                    <b-nav-item class="active">
                        <i class="fa fa-table"></i> <span>Basic Form</span>
                    </b-nav-item>

                    <b-nav-item>
                        <i class="fa fa-table"></i> <span>Form with Validation</span>
                    </b-nav-item>

                    <b-nav-item>
                        <i class="fa fa-table"></i> <span>Form with Wizard</span>
                    </b-nav-item>

                </b-nav>
            </b-nav-item>

            <b-nav-item>
                <i class="fa fa-table"></i> <span>Widgets</span>
            </b-nav-item>

        </b-nav>
    </div>
</template>

<script>
    import sidebar from '../../assets/admin/js/sidebar.js'

    export default {
        data() {
            return {}
        },
        mounted() {
            sidebar.toggleFunc()
        },
        methods: {
            toggleAdminSidebarMenu: function (event) {
                if (event) {
                    window.console.log(event.target.tagName)
                }
            }
        }
    }
</script>