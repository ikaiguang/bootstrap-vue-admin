<template>
    <div id="login-box">

        <div class="login-box-logo">
            <h3><img src="../assets/admin/img/logo-login.png" alt="Logo"/></h3>
        </div>

        <!--login form-->
        <template v-if="showLoginForm">
            <AdminLoginForm :toRecoverForm="toRecoverForm"></AdminLoginForm>
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
    import AdminRecoverForm from "./login/RecoverForm.vue";

    export default {
        name: "AdminLogin",
        // 模板
        components: {AdminLoginForm, AdminRecoverForm},
        // 数据
        data() {
            return {
                // 显示登陆表单
                showLoginForm: true,
                // 显示恢复表单
                showRecoverForm: false,
            }
        },
        methods: {
            // 显示恢复表单
            toRecoverForm() {
                this.showLoginForm = !this.showLoginForm;
                this.showRecoverForm = !this.showRecoverForm;
            },
            // 显示登陆表单
            toLoginForm() {
                this.showLoginForm = !this.showLoginForm;
                this.showRecoverForm = !this.showRecoverForm;
            }
        }
    }
</script>