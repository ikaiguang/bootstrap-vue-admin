<template>
  <b-form id="recover-form" @submit="onSubmitRecover">
    <b-form-group>
      <p class="normal_text">
        输入您的电子邮件地址，我们将向您发送如何恢复登陆密码。
      </p>
    </b-form-group>

    <b-form-group
      id="recover-input-group-email"
      inline
      :label-cols="4"
      label="Email:"
      label-for="recover-input-email"
    >
      <b-form-input
        id="recover-input-email"
        type="email"
        required
        v-model="recoverFormData.email"
        placeholder="电子邮箱"
      >
      </b-form-input>
    </b-form-group>

    <!-- 错误提示 -->
    <b-alert
      :show="recoverFormErrorAlert.dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="recoverFormErrorAlert.dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      <p>{{ recoverFormErrorAlert.errorMessage }}</p>
      <b-progress
        variant="warning"
        :max="recoverFormErrorAlert.dismissSecs"
        :value="recoverFormErrorAlert.dismissCountDown"
        height="2px"
      >
      </b-progress>
    </b-alert>

    <b-form-group class="form-actions">
      <span class="pull-left">
        <b-button @click="toLoginForm" type="button" variant="info"
          >&laquo; 返回登陆</b-button
        >
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
  name: "AdminRecoverForm",
  props: {
    toLoginForm: Function
  },
  data() {
    return {
      // 恢复表单
      recoverFormData: {
        email: ""
      },
      // 错误提示
      recoverFormErrorAlert: {
        dismissSecs: 3,
        dismissCountDown: 0,
        errorMessage: ""
      }
    };
  },
  methods: {
    // 提交恢复密码
    onSubmitRecover(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.recoverFormData));
    },
    // 自动关闭alert
    countDownChanged(dismissCountDown) {
      this.recoverFormErrorAlert.dismissCountDown = dismissCountDown;
    }
  }
};
</script>
