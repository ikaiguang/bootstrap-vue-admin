// vue
import Vue from "vue";
import Router from "vue-router";

// 使用路由
Vue.use(Router);

// 网站前台
import {webLayoutRouter} from './web/layout';

// 登陆退出
import {adminLoginRouter, adminLogoutRouter, requireAdminAuth} from './admin/login';
// 管理后台
import {adminLayoutRouter, adminDashboardRouter, adminChildrenRouter} from "./admin/layout";

const router = new Router({
    // mode: 'history', // 开启 history 模式，记得配置 http 服务改写规则
    // base: __dirname,
    routes: [
        adminLoginRouter, // 管理员登陆
        adminLogoutRouter,// 管理员注销
        {
            // 网站前台
            path: webLayoutRouter.path,
            name: webLayoutRouter.name,
            component: webLayoutRouter.component,
        },
        {
            // 管理后台
            path: adminLayoutRouter.path,
            name: adminLayoutRouter.name,
            component: adminLayoutRouter.component,
            redirect: adminDashboardRouter,
            beforeEnter: requireAdminAuth,
            children: adminChildrenRouter,
        }
    ]
});

// 输出路由
export default router
