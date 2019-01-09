import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import AdminIndex from "../admin/Index.vue";
import AdminLogin from "../admin/Login.vue";

Vue.use(Router);

export default new Router({
    // mode: 'history',
    // base: __dirname,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/admin",
            name: "admin",
            component: AdminIndex
        },
        {
            path: "/admin/login",
            name: "admin-login",
            component: AdminLogin
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ "../views/About.vue")
        }
    ]
});
