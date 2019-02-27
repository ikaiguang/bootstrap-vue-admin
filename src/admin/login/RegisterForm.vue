<template>
    <b-form id="register-form" @submit="onSubmitRegister">

        <!--<b-form-group id="register-input-group-PhoneNumber"-->
                      <!--inline-->
                      <!--:label-cols="4"-->
                      <!--label='PhoneNumber:'-->
                      <!--label-for="register-input-PhoneNumber">-->
            <!--<b-form-input id="register-input-PhoneNumber"-->
                          <!--type="text"-->
                          <!--required-->
                          <!--v-model="registerFormData.PhoneNumber"-->
                          <!--placeholder="手机号码">-->
            <!--</b-form-input>-->
        <!--</b-form-group>-->

        <b-form-group id="register-input-group-Email"
                      inline
                      :label-cols="4"
                      label='Email:'
                      label-for="register-input-Email">
            <b-form-input id="register-input-Email"
                          type="email"
                          required
                          v-model="registerFormData.Email"
                          placeholder="电子邮箱">
            </b-form-input>
        </b-form-group>

        <!--<b-form-group id="register-input-group-Username"-->
                      <!--inline-->
                      <!--:label-cols="4"-->
                      <!--label='Username:'-->
                      <!--label-for="register-input-Username">-->
            <!--<b-form-input id="register-input-Username"-->
                          <!--type="text"-->
                          <!--required-->
                          <!--v-model="registerFormData.Username"-->
                          <!--placeholder="用户名">-->
            <!--</b-form-input>-->
        <!--</b-form-group>-->

        <b-form-group id="register-input-group-Password"
                      inline
                      :label-cols="4"
                      label="Password:"
                      label-for="register-input-Password">
            <b-form-input id="register-input-Password"
                          type="password"
                          required
                          v-model="registerFormData.Password"
                          placeholder="登陆密码">
            </b-form-input>
        </b-form-group>

        <b-form-group id="register-input-group-PasswordConfirmation"
                      inline
                      :label-cols="4"
                      label="PasswordAgain:"
                      label-for="register-input-PasswordConfirmation">
            <b-form-input id="register-input-PasswordConfirmation"
                          type="password"
                          required
                          v-model="registerFormData.PasswordConfirmation"
                          placeholder="再次输入密码">
            </b-form-input>
        </b-form-group>

        <b-form-group id="register-input-group-Code"
                      inline
                      :label-cols="4"
                      label="Code:"
                      label-for="register-input-Code">
            <b-form-input id="register-input-Code"
                          type="text"
                          v-model="registerFormData.Code"
                          placeholder="验证码">
            </b-form-input>
        </b-form-group>

        <!-- 错误提示 -->
        <b-alert :show="registerFormErrorAlert.dismissCountDown"
                 dismissible
                 variant="warning"
                 @dismissed="registerFormErrorAlert.dismissCountDown=0"
                 @dismiss-count-down="countDownChanged">
            <p>{{ registerFormErrorAlert.errorMessage }}</p>
            <b-progress variant="warning"
                        :max="registerFormErrorAlert.dismissSecs"
                        :value="registerFormErrorAlert.dismissCountDown"
                        height="2px">
            </b-progress>
        </b-alert>

        <b-form-group class="form-actions">
            <span class="pull-left">
                <b-button @click="toLoginForm" type="button" variant="info">&laquo; 返回登陆</b-button>
            </span>
            <span class="pull-right">
                <b-button type="submit" variant="primary">注册</b-button>
            </span>
        </b-form-group>

    </b-form>
</template>

<script>

    export default {
        // 模板名
        name: "AdminRegisterForm",
        props: {
            // 显示恢复表单
            toLoginForm: Function
        },
        data() {
            return {
                // 登陆表单
                registerFormData: {
                    PhoneNumber: '',
                    Email: 'ikaiguang@github.com',
                    Username: '',
                    Password: '',
                    PasswordConfirmation: '',
                    RegisterType: "web",
                    Code: "",
                },
                // 错误提示
                registerFormErrorAlert: {
                    dismissSecs: 3,
                    dismissCountDown: 0,
                    errorMessage: "",
                },
            }
        },
        methods: {
            // 提交登陆
            onSubmitRegister(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.registerFormData));
            },
            // 自动关闭alert
            countDownChanged(dismissCountDown) {
                this.registerFormErrorAlert.dismissCountDown = dismissCountDown
            }
        }
    }
</script>