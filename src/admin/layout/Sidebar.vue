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

            <b-nav-text tag="li" :class="{active:this.$route.path==='/admin/dashboard'}">
                <router-link to="/admin/dashboard">
                    <i class="fa fa-home"></i><span>Dashboard</span>
                </router-link>
            </b-nav-text>

            <b-nav-text tag="li" :class="{active:this.$route.path==='/admin/table'}">
                <router-link to="/admin/table">
                    <i class="fa fa-table"></i><span>Table</span>
                </router-link>
            </b-nav-text>

            <b-nav-text tag="li" class="submenu">

                <a href="#"><i class="fa fa-address-book-o"></i><span>二级菜单</span></a>

                <b-nav vertical>

                    <b-nav-item>
                        <i class="fa fa-wechat"></i><span>微信</span>
                    </b-nav-item>

                    <b-nav-item>
                        <i class="fa fa-weibo"></i><span>微博</span>
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