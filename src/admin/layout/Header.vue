<template>
    <div id="admin-header">
        <b-navbar toggleable="md" type="dark" variant="faded">

            <b-navbar-toggle class="admin-header-toggle" target="admin-header-nav-collapse"></b-navbar-toggle>

            <b-navbar-brand class="admin-header-logo" href="#">
                <i class="fa fa-cog fa-spin"></i>IKG
                <!--<img src="http://example.com/abc.png" alt="BV">-->
            </b-navbar-brand>

            <b-collapse is-nav id="admin-header-nav-collapse">

                <b-navbar-nav>

                    <b-nav-item-dropdown right>
                        <!-- Using button-content slot -->
                        <template slot="button-content">
                            <em><i class="fa fa-user fa-fw"></i>欢迎 Admin</em>
                        </template>
                        <b-dropdown-item href="#"><i class="fa fa-user-o fa-fw"></i>个人信息</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item href="#"><i class="fa fa-check-square-o fa-fw"></i>我的任务</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item href="#"><i class="fa fa-sign-out fa-fw"></i>退出登陆</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using button-content slot -->
                        <template slot="button-content">
                            <em><i class="fa fa-envelope fa-fw"></i>站内消息&nbsp;</em>
                            <b-badge variant="primary">3</b-badge>
                        </template>
                        <b-dropdown-item href="#"><i class="fa fa-send-o fa-fw"></i>发送消息</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item href="#"><i class="fa fa-envelope-o fa-fw"></i>全部消息</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item href="#" disabled><i class="fa fa-cog fa-spin"></i>系统设置</b-nav-item>
                    <b-nav-item href="#/admin/logout"><i class="fa fa-sign-out fa-fw"></i>退出登陆</b-nav-item>

                </b-navbar-nav>


                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                        <b-button variant="primary" size="sm" class="my-2 my-sm-0" type="submit">
                            <i class="fa fa-search"></i>
                        </b-button>
                    </b-nav-form>

                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<style>
    @import "../../assets/admin/css/header.css";
</style>