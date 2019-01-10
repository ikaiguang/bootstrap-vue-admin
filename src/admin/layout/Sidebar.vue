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

            <b-nav-item class="active">
                <i class="fa fa-home"></i><span>Dashboard</span>
            </b-nav-item>

            <b-nav-item>
                <i class="fa fa-table"></i><span>Table</span>
            </b-nav-item>

            <b-nav-text tag="li" class="submenu">

                <a href="#"><i class="fa fa-address-book-o"></i><span>二级菜单</span></a>

                <b-nav vertical>

                    <b-nav-item>
                        <i class="fa fa-warning"></i><span>Warning</span>
                    </b-nav-item>

                    <b-nav-item>
                        <i class="fa fa-adn"></i><span>Adn</span>
                    </b-nav-item>

                    <b-nav-text tag="li" class="submenu">

                        <a href="#"><i class="fa fa-search-plus"></i><span>三级菜单</span></a>

                        <b-nav vertical>

                            <b-nav-item>
                                <i class="fa fa-key"></i><span>Key</span>
                            </b-nav-item>

                            <b-nav-item>
                                <i class="fa fa-keyboard-o"></i><span>Keyboard</span>
                            </b-nav-item>

                        </b-nav>
                    </b-nav-text>

                    <b-nav-text tag="li" class="submenu">

                        <a href="#"><i class="fa fa-amazon"></i><span>另一三级</span></a>

                        <b-nav vertical>

                            <b-nav-item>
                                <i class="fa fa-magic"></i><span>Magic</span>
                            </b-nav-item>

                            <b-nav-item>
                                <i class="fa fa-mail-forward"></i><span>Mail</span>
                            </b-nav-item>

                        </b-nav>
                    </b-nav-text>

                </b-nav>
            </b-nav-text>

            <b-nav-text tag="li" class="submenu">

                <a href="#"><i class="fa fa-align-right"></i><span>另一二级</span></a>

                <b-nav vertical>

                    <b-nav-item>
                        <i class="fa fa-qrcode"></i><span>Qrcode</span>
                    </b-nav-item>

                    <b-nav-item>
                        <i class="fa fa-qq"></i><span>QQ</span>
                    </b-nav-item>

                </b-nav>
            </b-nav-text>

            <b-nav-item>
                <i class="fa fa-wechat"></i><span>Wechat</span>
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