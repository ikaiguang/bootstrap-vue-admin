import $ from 'jquery'

// 菜单节点
// 菜单栏
const sidebarNode = "#admin-sidebar";
// 小屏菜单
const mobilePhoneANode = sidebarNode + " .mobile-phone > a";
// 菜单节点
const menuNode = sidebarNode + " > ul";
// 菜单点击
const menuANode = menuNode + " li > a";
// 及联菜单类名
const submenuClassName = "submenu";
const submenuNodeName = "." + submenuClassName;
// 及联菜单 节点
const submenuNode = menuNode + " li" + submenuNodeName;
// 及联菜单 点击
const submenuANode = submenuNode + " > a";

// 菜单选中效果
// 显示菜单
const showMenuClassName = "open";
// 选中菜单
const chooseMenuClassName = "active";

// 菜单功能
const sidebarMenuFeatures = {
    menuFeatures: function () {
        // 响应式 小屏幕点击
        this.mobilePhone();
        // 及联菜单
        this.associatedMenu();
        // 选中菜单
        this.chooseMenu();
    },
    // 选中菜单
    chooseMenu: function () {
        $(menuANode).click(function () {
            // 当前菜单
            let liDom = $(this).closest('li');
            // 多级菜单
            if (liDom.hasClass(submenuClassName)) {
                return
            }
            // 关闭同级的及联菜单
            liDom.siblings("li").removeClass(showMenuClassName);
            // 移除其他的选中
            $(menuNode).find("li").removeClass(chooseMenuClassName);
            // 选中当前菜单
            liDom.addClass(chooseMenuClassName);
            // 选中当前父菜单
            let fatherSubmenuDom = liDom.closest(submenuNodeName);
            while (fatherSubmenuDom.length > 0) {
                fatherSubmenuDom.addClass(chooseMenuClassName);
                fatherSubmenuDom = fatherSubmenuDom.closest('ul').closest(submenuNodeName)
            }
        })
    },
    // 及联菜单
    associatedMenu: function () {
        // 及联菜单选择效果
        $(submenuANode).click(function (e) {
            e.preventDefault();
            // 当前及联菜单
            let submenuLiDom = $(this).closest('li');
            // 其他同级菜单
            let otherSubmenuLiDom = submenuLiDom.siblings(submenuNodeName);
            // 关闭其他同级菜单
            otherSubmenuLiDom.removeClass(showMenuClassName);
            // 显示 || 关闭 子菜单
            if (submenuLiDom.hasClass(showMenuClassName)) {
                submenuLiDom.removeClass(showMenuClassName);
            } else {
                submenuLiDom.addClass(showMenuClassName);
            }
        });
    },
    // 响应式 小屏幕点击
    mobilePhone: function () {
        $(mobilePhoneANode).click(function (e) {
            // 阻止跳转
            e.preventDefault();
            // 菜单节点
            let sidebarDom = $(sidebarNode);
            // 显示 || 关闭 菜单
            if (sidebarDom.hasClass(showMenuClassName)) {
                sidebarDom.removeClass(showMenuClassName);
            } else {
                sidebarDom.addClass(showMenuClassName);
            }
        });
    }
};

// 输出菜单功能
export default sidebarMenuFeatures