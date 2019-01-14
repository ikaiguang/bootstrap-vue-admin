// 后台管理
import AdminLayout from "./../../admin/Layout.vue";
import AdminDashboard from "./../../admin/dashboard/Index.vue";
import AdminTableExample from "./../../admin/table/Example";

// admin 布局
const layout = {path: "/admin", name: "admin", component: AdminLayout};

// admin 主页
const dashboard = {path: "/admin/dashboard", name: "admin-dashboard", component: AdminDashboard};

// admin 子路由
const children = [
    dashboard,
    {path: "/admin/table", name: "admin-table", component: AdminTableExample},
];

//
export {
    layout as adminLayout,
    dashboard as adminDashboardRouter,
    children as adminChildrenRouter,
}