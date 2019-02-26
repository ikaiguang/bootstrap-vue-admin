<template>
    <b-form id="login-form" @submit="onSubmitLogin">

        <b-form-group id="login-input-group-account"
                      horizontal
                      :label-cols="4"
                      label='Account:'
                      label-for="login-input-account">
            <b-form-input id="login-input-account"
                          type="text"
                          required
                          v-model="loginFormData.account"
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
                          v-model="loginFormData.password"
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
                          v-model="loginFormData.code"
                          placeholder="验证码">
            </b-form-input>
        </b-form-group>

        <b-form-group id="login-input-group-remember"
                      horizontal
                      :label-cols="4"
                      label="Remember:"
                      label-for="login-input-remember">
            <b-form-checkbox-group v-model="loginFormData.remember" id="login-input-remember">
                <b-form-checkbox value="true">记住登陆</b-form-checkbox>
            </b-form-checkbox-group>
        </b-form-group>

        <!-- 错误提示 -->
        <b-alert :show="loginFormErrorAlert.dismissCountDown"
                 dismissible
                 variant="warning"
                 @dismissed="loginFormErrorAlert.dismissCountDown=0"
                 @dismiss-count-down="countDownChanged">
            <p>{{ loginFormErrorAlert.errorMessage }}</p>
            <b-progress variant="warning"
                        :max="loginFormErrorAlert.dismissSecs"
                        :value="loginFormErrorAlert.dismissCountDown"
                        height="2px">
            </b-progress>
        </b-alert>

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

<script>
    import auth from './auth';

    export default {
        // 模板名
        name: "AdminLoginForm",
        props: {
            // 显示恢复表单
            toRecoverForm: Function
        },
        data() {
            return {
                // 登陆表单
                loginFormData: {
                    account: 'ikaiguang@github.com',
                    password: 'password',
                    code: '',
                    remember: [''],
                },
                // 错误提示
                loginFormErrorAlert: {
                    dismissSecs: 3,
                    dismissCountDown: 0,
                    errorMessage: "",
                },
            }
        },
        methods: {
            // 提交登陆
            onSubmitLogin(evt) {
                evt.preventDefault();
                // alert(JSON.stringify(this.loginFormData));
                auth.login(this.loginFormData.account, this.loginFormData.password, loggedIn => {
                    if (!loggedIn) {
                        this.loginFormErrorAlert.dismissCountDown = 3;
                        this.loginFormErrorAlert.errorMessage = "登陆失败"
                    } else {
                        this.$router.replace(this.$route.query.redirect || '/admin')
                    }
                })
            },
            // 自动关闭alert
            countDownChanged(dismissCountDown) {
                this.loginFormErrorAlert.dismissCountDown = dismissCountDown
            }
        }
    }
</script>