// 后台管理
import AdminLayout from "./../../admin/Layout.vue";

// admin 布局
const layout = { path: "/admin", name: "admin", component: AdminLayout };

// admin 主页
const dashboard = {
  path: "/admin/dashboard",
  name: "admin-dashboard",
  component: () =>
    import(
      /* webpackChunkName: "admin-dashboard" */ "./../../admin/dashboard/Index.vue"
    )
};

// admin 子路由
const children = [
  dashboard,
  {
    path: "/admin/table",
    name: "admin-table",
    component: () =>
      import(
        /* webpackChunkName: "admin-table" */ "./../../admin/table/Example.vue"
      )
  },
  {
    path: "/admin/icon",
    name: "admin-icon",
    component: () =>
      import(
        /* webpackChunkName: "admin-icon" */ "./../../admin/icon/Example.vue"
      )
  },
  {
    path: "/admin/timeline",
    name: "admin-timeline",
    component: () =>
      import(
        /* webpackChunkName: "admin-timeline" */ "./../../admin/timeline/Example.vue"
      )
  }
];

// export
export {
  layout as adminLayoutRouter,
  dashboard as adminDashboardRouter,
  children as adminChildrenRouter
};
