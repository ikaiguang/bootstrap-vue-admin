<template>
  <div id="admin-header">
    <b-navbar toggleable="md" id="admin-header-nav">
      <b-navbar-toggle
        class="admin-header-toggle"
        target="admin-header-nav-collapse"
      ></b-navbar-toggle>

      <!--<b-navbar-brand class="admin-header-logo" href="https://github.com/ikaiguang">-->
      <b-navbar-brand class="admin-header-logo" to="/admin">
        <img src="../../assets/admin/img/user.jpeg" alt="admin" />
        <span>&nbsp;IKG</span>
      </b-navbar-brand>

      <b-collapse is-nav id="admin-header-nav-collapse">
        <b-navbar-nav>
          <b-nav-item-dropdown right>
            <template slot="button-content">
              <em> <i class="icon icon-user"></i><span>欢迎 Admin</span> </em>
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

          <b-nav-item-dropdown right>
            <template slot="button-content">
              <em> <i class="icon icon-bullhorn"></i><span>站内消息</span> </em>
              <b-badge variant="primary">3</b-badge>
            </template>
            <b-dropdown-item href="#">
              <i class="icon icon-plane"></i><span>发送消息</span>
            </b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#">
              <i class="icon icon-envelope"></i><span>全部消息</span>
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-text tag="li">
            <router-link to="/">
              <i class="icon icon-eye-open"></i><span>网站前台</span>
            </router-link>
          </b-nav-text>

          <b-nav-text tag="li">
            <router-link to="/admin/logout">
              <i class="icon icon-share"></i><span>退出登陆</span>
            </router-link>
          </b-nav-text>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-input-group>
              <b-form-input
                size="sm"
                class="mr-sm-0"
                type="text"
                placeholder="Search"
              ></b-form-input>
              <b-button
                variant="primary"
                size="sm"
                class="my-2 my-sm-0"
                slot="append"
                type="submit"
              >
                <i class="icon icon-search"></i>
              </b-button>
            </b-input-group>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
