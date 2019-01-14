// 登陆
import AdminLogin from "./../../admin/Login.vue";
import auth from "../../admin/login/auth";

// 登陆
const loginRouter = {
    path: "/admin/login",
    name: "admin-login",
    component: AdminLogin,
};

// 注销
const logoutRouter = {
    path: "/admin/logout",
    name: "admin-logout",
    beforeEnter(to, from, next) {
        auth.logout();
        next(loginRouter.path)
    }
};

// 登陆验证
function requireAdminAuth(to, from, next) {
    // 是否登陆
    if (!auth.loggedIn()) {
        // 未登陆
        next({
            path: loginRouter.path,
            query: {redirect: to.fullPath}
        })
    } else {
        // 已登陆
        next()
    }
}

// export
export {
    loginRouter as adminLoginRouter,
    logoutRouter as adminLogoutRouter,
    requireAdminAuth,
}