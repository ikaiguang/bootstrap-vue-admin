<template>
    <div id="admin-header">
        <b-navbar toggleable="md" type="dark" variant="faded">

            <b-navbar-toggle class="admin-header-toggle" target="admin-header-nav-collapse"></b-navbar-toggle>

            <b-navbar-brand class="admin-header-logo" href="#">
                <img src="../../assets/admin/img/user.jpeg" alt="admin" />
                <span>&nbsp;IKG</span>
            </b-navbar-brand>

            <b-collapse is-nav id="admin-header-nav-collapse">

                <b-navbar-nav>

                    <b-nav-item-dropdown right>
                        <!-- Using button-content slot -->
                        <template slot="button-content">
                            <em><i class="icon icon-user"></i>欢迎 Admin</em>
                        </template>
                        <b-dropdown-item href="#"><i class="icon icon-user"></i>个人信息</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item href="#"><i class="icon icon-check"></i>我的任务</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item href="#"><i class="icon icon-share"></i>退出登陆</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using button-content slot -->
                        <template slot="button-content">
                            <em><i class="icon icon-envelope"></i>站内消息&nbsp;</em>
                            <b-badge variant="primary">3</b-badge>
                        </template>
                        <b-dropdown-item href="#"><i class="icon icon-plane"></i>发送消息</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item href="#"><i class="icon icon-envelope"></i>全部消息</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item href="#" disabled><i class="icon icon-cog icon-spin"></i>系统设置</b-nav-item>

                    <b-nav-text tag="li">
                        <router-link to="/admin/logout">
                            <i class="icon icon-share"></i>退出登陆
                        </router-link>
                    </b-nav-text>

                </b-navbar-nav>


                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                        <b-button variant="primary" size="sm" class="my-2 my-sm-0" type="submit">
                            <i class="icon icon-search"></i>
                        </b-button>
                    </b-nav-form>

                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>