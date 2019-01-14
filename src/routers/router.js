// vue
import Vue from "vue";
import Router from "vue-router";

// 使用路由
Vue.use(Router);

// 登陆退出
import {adminLoginRouter, adminLogoutRouter, requireAdminAuth} from './admin/login'
// 管理后台
import {adminLayout, adminDashboardRouter, adminChildrenRouter} from "./admin/index";
// 网站前台 暂无前台。先用后台顶替
const webLayout = adminLayout;
const webDashboardRouter = adminDashboardRouter;

const router = new Router({
    // mode: 'history', // 开启 history 模式，记得配置 http 服务改写规则
    // base: __dirname,
    routes: [
        adminLoginRouter, // 管理员登陆
        adminLogoutRouter,// 管理员注销
        {
            // 网站前台
            path: "/", // web
            name: "home",
            component: webLayout.component,
            redirect: webDashboardRouter,
            beforeEnter: requireAdminAuth
        },
        {
            // 管理后台
            path: adminLayout.path,
            name: adminLayout.name,
            component: adminLayout.component,
            redirect: adminDashboardRouter,
            beforeEnter: requireAdminAuth,
            children: adminChildrenRouter,
        }
    ]
});

// 输出路由
export default router
