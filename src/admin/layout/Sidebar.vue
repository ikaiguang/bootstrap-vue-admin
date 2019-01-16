<template>
    <div id="admin-sidebar">

        <div class="mobile-phone">
            <a href="#">
                <i class="icon icon-th"></i>&nbsp;<span>{{this.$route.path}}</span>
            </a>
            <div class="mobile-message">
                <b-badge variant="primary"><i class="icon icon-envelope"></i>&nbsp;5</b-badge>
            </div>
        </div>

        <div class="mini-menu">
            <a href="#">&nbsp;</a>
        </div>

        <b-nav vertical>

            <b-nav-text tag="li" :class="{active:this.$route.path==='/admin/dashboard'}">
                <router-link to="/admin/dashboard">
                    <i class="icon icon-home"></i><span>Dashboard</span>
                </router-link>
            </b-nav-text>

            <b-nav-text tag="li" :class="{active:this.$route.path==='/admin/icon'}">
                <router-link to="/admin/icon">
                    <i class="icon icon-tint"></i><span>Icon</span>
                </router-link>
            </b-nav-text>

            <b-nav-text tag="li" :class="{active:this.$route.path==='/admin/table'}">
                <router-link to="/admin/table">
                    <i class="icon icon-th-list"></i><span>Table</span>
                </router-link>
            </b-nav-text>

            <b-nav-text tag="li" class="submenu">

                <a href="#"><i class="icon icon-inbox"></i><span>二级菜单</span></a>

                <b-nav vertical>

                    <b-nav-item>
                        <i class="icon icon-road"></i><span>微信</span>
                    </b-nav-item>

                    <b-nav-item>
                        <i class="icon icon-book"></i><span>微博</span>
                    </b-nav-item>

                    <b-nav-text tag="li" class="submenu">

                        <a href="#"><i class="icon icon-tint"></i><span>三级菜单</span></a>

                        <b-nav vertical>

                            <b-nav-item>
                                <i class="icon icon-bell"></i><span>Key</span>
                            </b-nav-item>

                            <b-nav-item>
                                <i class="icon icon-file"></i><span>Keyboard</span>
                            </b-nav-item>

                        </b-nav>
                    </b-nav-text>

                    <b-nav-text tag="li" class="submenu">

                        <a href="#"><i class="icon icon-align-justify"></i><span>另一三级</span></a>

                        <b-nav vertical>

                            <b-nav-item>
                                <i class="icon icon-retweet"></i><span>Magic</span>
                            </b-nav-item>

                            <b-nav-item>
                                <i class="icon icon-forward"></i><span>Mail</span>
                            </b-nav-item>

                        </b-nav>
                    </b-nav-text>

                </b-nav>
            </b-nav-text>

            <b-nav-text tag="li" class="submenu">

                <a href="#"><i class="icon icon-tags"></i><span>另一二级</span></a>

                <b-nav vertical>

                    <b-nav-item>
                        <i class="icon icon-qrcode"></i><span>Qrcode</span>
                    </b-nav-item>

                    <b-nav-item>
                        <i class="icon icon-font"></i><span>QQ</span>
                    </b-nav-item>

                </b-nav>
            </b-nav-text>

            <b-nav-item>
                <i class="icon icon-cog"></i><span>系统设置</span>
            </b-nav-item>

        </b-nav>
    </div>
</template>

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