import Vue from "vue";
import Router from "vue-router";

// admin
import auth from '../admin/login/auth'
import AdminIndex from "../admin/Index.vue";
import AdminLogin from "../admin/Login.vue";

Vue.use(Router);

// 管理员登陆路径
const adminLoginPath = "/admin/login";
const adminLogoutPath = "/admin/logout";

// 登陆验证
function requireAdminAuth(to, from, next) {
    if (!auth.loggedIn()) {
        next({
            path: adminLoginPath,
            query: {redirect: to.fullPath}
        })
    } else {
        next()
    }
}

const router = new Router({
    // mode: 'history', // 开启 history 模式，记得配置 http 服务改写规则
    // base: __dirname,
    routes: [
        {
            path: adminLoginPath,
            name: "admin-login",
            component: AdminLogin
        },
        {
            path: adminLogoutPath,
            name: "admin-logout",
            beforeEnter(to, from, next) {
                auth.logout();
                next(adminLoginPath)
            }
        },
        {
            path: "/",
            name: "home",
            component: AdminIndex,
            beforeEnter: requireAdminAuth
        },
        {
            path: "/admin",
            name: "admin",
            component: AdminIndex,
            beforeEnter: requireAdminAuth
        }
    ]
});

// 输出路由
export default router
