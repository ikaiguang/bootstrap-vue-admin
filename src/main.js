import Vue from "vue";

// app
import App from "./App.vue";

// router
import router from "./routers/router.js";

// bootstrap-vue
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

// bootstrap-vue css
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// vue config
Vue.config.productionTip = false; // 设置为 false 以阻止 vue 在启动时生成生产提示。(默认值：true)
// Vue.config.devtools = false; // 配置是否允许 vue-devtools 检查代码。(默认值：true)
// Vue.config.silent = true;// 取消 Vue 所有的日志与警告。(默认值：false)

// render
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
