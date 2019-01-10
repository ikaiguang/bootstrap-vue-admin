<template>
    <div id="admin-sidebar">

        <div class="mobile-phone">
            <a href="#">
                <i class="fa fa-hand-o-right"></i>&nbsp;<span>当前菜单</span>
            </a>
            <div class="mobile-message">
                <b-badge variant="primary"><i class="fa fa-envelope-o"></i>&nbsp;5</b-badge>
            </div>
        </div>

        <b-nav vertical>

            <b-nav-item>
                <i class="fa fa-home"></i><span>Dashboard</span>
            </b-nav-item>

            <b-nav-item>
                <i class="fa fa-table"></i><span>Table</span>
            </b-nav-item>

            <b-nav-text tag="li" class="submenu">

                <a href="#"><i class="fa fa-address-book-o"></i><span>二级菜单</span></a>

                <b-nav vertical>

                    <b-nav-item>
                        <i class="fa fa-table"></i><span>二级菜单1</span>
                    </b-nav-item>

                    <b-nav-item>
                        <i class="fa fa-table"></i><span>二级菜单2</span>
                    </b-nav-item>

                    <b-nav-text tag="li" class="submenu">

                        <a href="#"><i class="fa fa-adjust"></i><span>菜单三级</span></a>

                        <b-nav vertical>

                            <b-nav-item>
                                <i class="fa fa-table"></i><span>三级菜单1</span>
                            </b-nav-item>

                            <b-nav-item>
                                <i class="fa fa-table"></i><span>三级菜单2</span>
                            </b-nav-item>

                        </b-nav>
                    </b-nav-text>

                    <b-nav-text tag="li" class="submenu">

                        <a href="#"><i class="fa fa-adjust"></i><span>菜单三级</span></a>

                        <b-nav vertical>

                            <b-nav-item>
                                <i class="fa fa-table"></i><span>三级菜单1</span>
                            </b-nav-item>

                            <b-nav-item>
                                <i class="fa fa-table"></i><span>三级菜单2</span>
                            </b-nav-item>

                        </b-nav>
                    </b-nav-text>

                </b-nav>
            </b-nav-text>

            <b-nav-text tag="li" class="submenu">

                <a href="#"><i class="fa fa-address-book-o"></i><span>二级菜单</span></a>

                <b-nav vertical>

                    <b-nav-item>
                        <i class="fa fa-table"></i><span>二级菜单1</span>
                    </b-nav-item>

                    <b-nav-item>
                        <i class="fa fa-table"></i><span>二级菜单2</span>
                    </b-nav-item>

                </b-nav>
            </b-nav-text>

            <b-nav-item>
                <i class="fa fa-table"></i><span>Widgets</span>
            </b-nav-item>

        </b-nav>
    </div>
</template>

<style>
    @import "../../assets/admin/css/sidebar.css";
</style>

<script>
    import sidebar from '../../assets/admin/js/sidebar'

    export default {
        data() {
            return {}
        },
        mounted() {
            sidebar.menuFeatures()
        },
        methods: {}
    }
</script>