<template>
    <b-form id="recover-form" @submit="onSubmitRecover">

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
                          v-model="recoverFormData.email"
                          placeholder="电子邮箱">
            </b-form-input>
        </b-form-group>

        <!-- 错误提示 -->
        <b-alert variant="warning" :show="errorMessage.length > 0" dismissible>
            <i class="fa fa-warning"></i>&nbsp;{{ errorMessage }}
        </b-alert>

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

<script>
    export default {
        // 模板名
        name: "RecoverForm",
        props: {
            toLoginForm: Function,
        },
        data() {
            return {
                // 恢复表单
                recoverFormData: {
                    email: '',
                },
                // 错误提示
                errorMessage: "",
            }
        },
        methods: {
            // 提交恢复密码
            onSubmitRecover(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.recoverFormData));
            }
        }
    }
</script>