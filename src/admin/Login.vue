<template>
    <div id="login-box">

        <!--login form-->
        <template v-if="showLoginForm">
            <b-form id="login-form" class="form-vertical" @submit="onSubmitLogin">

                <b-form-group class="normal_text">
                    <h3><img src="../assets/logo-login.png" alt="Logo"/></h3>
                </b-form-group>

                <b-form-group id="login-input-group-username"
                              horizontal
                              :label-cols="4"
                              label="Username:"
                              label-for="login-input-username">
                    <b-form-input id="login-input-username"
                                  type="text"
                                  required
                                  v-model="loginForm.username"
                                  placeholder="手机号码 / 电子邮箱 / 用户名">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="login-input-group-password"
                              horizontal
                              :label-cols="4"
                              label="Password:"
                              label-for="login-input-password">
                    <b-form-input id="login-input-password"
                                  type="password"
                                  required
                                  v-model="loginForm.password"
                                  placeholder="登陆密码">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="login-input-group-code"
                              horizontal
                              :label-cols="4"
                              label="Code:"
                              label-for="login-input-code">
                    <b-form-input id="login-input-code"
                                  type="text"
                                  v-model="loginForm.code"
                                  placeholder="验证码">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="login-input-group-remember"
                              horizontal
                              :label-cols="4"
                              label="Remember:"
                              label-for="login-input-remember">
                    <b-form-checkbox-group v-model="loginForm.remember" id="login-input-remember">
                        <b-form-checkbox value="true">记住登陆</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>

                <b-form-group class="form-actions">
                    <span class="pull-left">
                        <b-button @click="toRecoverForm" type="button" variant="info">忘记密码？</b-button>
                    </span>
                    <span class="pull-right">
                        <b-button type="submit" variant="primary">登陆</b-button>
                    </span>
                </b-form-group>
            </b-form>
        </template>

        <!--recover form-->
        <template v-if="showRecoverForm">
            <b-form id="recover-form" class="form-vertical" @submit="onSubmitRecover">

                <b-form-group class="normal_text">
                    <h3><img src="../assets/logo-login.png" alt="Logo"/></h3>
                </b-form-group>

                <b-form-group>
                    <p class="normal_text">在下面输入您的电子邮件地址，我们将向您发送如何恢复登陆密码。</p>
                </b-form-group>

                <b-form-group id="recover-input-group-email"
                              horizontal
                              :label-cols="4"
                              label="Email:"
                              label-for="recover-input-email">
                    <b-form-input id="recover-input-email"
                                  type="email"
                                  required
                                  v-model="recoverForm.email"
                                  placeholder="电子邮箱">
                    </b-form-input>
                </b-form-group>

                <b-form-group class="form-actions">
                    <span class="pull-left">
                        <b-button @click="toLoginForm" type="button" variant="info">&laquo; 返回登陆</b-button>
                    </span>
                    <span class="pull-right">
                        <b-button type="submit" variant="primary">恢复</b-button>
                    </span>
                </b-form-group>
            </b-form>
        </template>

    </div>
</template>

<style>
    @import '~bootstrap/dist/css/bootstrap.css';
    @import '~bootstrap-vue/dist/bootstrap-vue.css';
    @import "../assets/admin/css/login.css";
</style>

<script>
    export default {
        data() {
            return {
                // 登陆表单
                loginForm: {
                    username: '',
                    password: '',
                    code: '',
                    remember: [],
                },
                // 恢复表单
                recoverForm: {
                    email: '',
                },
                // 显示登陆表单
                showLoginForm: true,
                // 显示恢复表单
                showRecoverForm: false
            }
        },
        methods: {
            // 提交登陆
            onSubmitLogin(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.loginForm));
            },
            // 提交恢复密码
            onSubmitRecover(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.recoverForm));
            },
            // 显示恢复表单
            toRecoverForm() {
                this.showLoginForm = false;
                this.showRecoverForm = true
            },
            // 显示登陆表单
            toLoginForm() {
                this.showLoginForm = true;
                this.showRecoverForm = false
            }
        }
    }
</script>