<template>
  <div id="login-box">
    <div class="login-box-logo">
      <h3><img src="../assets/admin/img/logo-login.png" alt="Logo" /></h3>
    </div>

    <!--login form-->
    <template v-if="showLoginForm">
      <AdminLoginForm
        :toRecoverForm="toRecoverForm"
        :toRegisterForm="toRegisterForm"
      ></AdminLoginForm>
    </template>

    <!--register form-->
    <template v-if="showRegisterForm">
      <AdminRegisterForm :toLoginForm="toLoginForm"></AdminRegisterForm>
    </template>

    <!--recover form-->
    <template v-if="showRecoverForm">
      <AdminRecoverForm :toLoginForm="toLoginForm"></AdminRecoverForm>
    </template>
  </div>
</template>

<style>
@import "../assets/admin/css/login.css";
</style>

<script>
import AdminLoginForm from "./login/LoginForm.vue";
import AdminRegisterForm from "./login/RegisterForm.vue";
import AdminRecoverForm from "./login/RecoverForm.vue";

export default {
  name: "AdminLogin",
  // 模板
  components: { AdminLoginForm, AdminRegisterForm, AdminRecoverForm },
  // 数据
  data() {
    return {
      // 显示登陆表单
      showLoginForm: true,
      // 显示注册表单
      showRegisterForm: false,
      // 显示恢复表单
      showRecoverForm: false
    };
  },
  methods: {
    // 显示登陆表单
    toLoginForm() {
      this.showLoginForm = true;
      this.showRegisterForm = false;
      this.showRecoverForm = false;
    },
    // 显示注册表单
    toRegisterForm() {
      this.showRegisterForm = true;
      this.showLoginForm = false;
      this.showRecoverForm = false;
    },
    // 显示恢复表单
    toRecoverForm() {
      this.showRecoverForm = true;
      this.showLoginForm = false;
      this.showRegisterForm = false;
    }
  }
};
</script>
