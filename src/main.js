import Vue from "vue";

// app
import App from "./App.vue";

// router
import router from "./routers/router.js";

// bootstrap-vue
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

// bootstrap-vue css
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

// vue config
Vue.config.productionTip = false;

// render
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
