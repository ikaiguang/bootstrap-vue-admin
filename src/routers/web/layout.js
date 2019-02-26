// 前台管理
import WebLayout from "./../../web/Layout.vue";

// web 布局
const layout = {path: "/", name: "web", component: WebLayout};

// web 主页
const dashboard = layout;

// export
export {
    layout as webLayoutRouter,
    dashboard as webDashboardRouter,
}