<template>
    <div id="login-box">

        <div class="login-box-logo">
            <h3><img src="../assets/logo-login.png" alt="Logo"/></h3>
        </div>

        <!--login form-->
        <template v-if="showLoginForm">
            <LoginForm :toRecoverForm="toRecoverForm"></LoginForm>
        </template>

        <!--recover form-->
        <template v-if="showRecoverForm">
            <RecoverForm :toLoginForm="toLoginForm"></RecoverForm>
        </template>

    </div>
</template>

<style>
    @import "../assets/admin/css/login.css";
</style>

<script>
    import LoginForm from "./login/LoginForm";
    import RecoverForm from "./login/RecoverForm";

    export default {
        // 模板
        components: {LoginForm, RecoverForm},
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