<template>
    <div id="web-header">
        <b-navbar toggleable="md" type="light">

            <b-navbar-toggle target="web-header-nav-collapse"></b-navbar-toggle>

            <b-navbar-brand class="web-header-logo" to="/">
                <img src="../../assets/web/img/logo-web.png" alt="admin"/>
                <span>&nbsp;IKG</span>
            </b-navbar-brand>

            <b-collapse is-nav id="web-header-nav-collapse">
                <b-navbar-nav>

                    <b-nav-item href="#" disabled>
                        <i class="icon icon-book"></i><span>Blog</span>
                    </b-nav-item>

                    <b-nav-item href="#" disabled>
                        <i class="icon icon-wrench"></i><span>Disabled</span>
                    </b-nav-item>

                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-nav-item-dropdown right>
                        <template slot="button-content">
                            <em>
                                <i class="icon icon-user"></i><span>欢迎 Admin</span>
                            </em>
                        </template>
                        <b-dropdown-item href="#">
                            <i class="icon icon-user"></i><span>个人信息</span>
                        </b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item href="#">
                            <i class="icon icon-check"></i><span>我的任务</span>
                        </b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item href="#">
                            <i class="icon icon-share"></i><span>退出登陆</span>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-text tag="li">
                        <router-link to="/admin">
                            <i class="icon icon-cog"></i><span>系统管理</span>
                        </router-link>
                    </b-nav-text>

                    <b-nav-form>
                        <b-input-group>
                            <b-form-input size="sm" class="mr-sm-0" type="text" placeholder="Search"></b-form-input>
                            <b-button variant="primary" size="sm" class="my-2 my-sm-0" slot="append" type="submit">
                                <i class="icon icon-search"></i>
                            </b-button>
                        </b-input-group>
                    </b-nav-form>

                </b-navbar-nav>
            </b-collapse>

        </b-navbar>
    </div>
</template>