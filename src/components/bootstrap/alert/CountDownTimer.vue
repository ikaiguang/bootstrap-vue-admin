<template>
    <b-alert :show="dismissCountDown"
             dismissible
             :variant="alertVariant"
             @dismissed="dismissCountDown=0"
             @dismiss-count-down="countDownChanged">
        <p>{{message}}</p>
        <b-progress :variant="progressVariant"
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="2px">
        </b-progress>
    </b-alert>
</template>

<script>
    export default {
        name: "CountDownTimer",
        props: {
            alertVariant: String,
            progressVariant: String,
            message: String,
            dismissSecs: Number,
            dismissCountDown: Number,
        },
        methods: {
            // 自动关闭alert
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            }
        }
    }
</script>

<style scoped>

</style>