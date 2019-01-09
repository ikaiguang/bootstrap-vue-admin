import $ from 'jquery'

// 菜单栏
const sidebarNode = "#admin-sidebar";
// 小屏菜单
const mobilePhoneANode = sidebarNode + " .mobile-phone > a";
// 菜单节点
const menuNode = sidebarNode + " > ul";
// 及联菜单 节点
const submenuDom = menuNode + " li.submenu";
// 及联菜单 点击
const submenuADom = submenuDom + " > a";

const sidebarMenuFeatures = {
    menuFeatures: function () {
        // 响应式 小屏幕点击
        this.mobilePhone();
        // 一级菜单
        // this.firstMenu();
        // 及联菜单
        this.associatedMenu();
    },
    // 及联菜单
    associatedMenu: function () {
        $(submenuADom).click(function (e) {
            e.preventDefault();
            let submenuLi = $(this).parent('li');
            // let submenuLi = $(this).closest('li');
            window.console.log(submenuLi.html())
            if (submenuLi.hasClass('open')) {
                submenuLi.removeClass('open');
            } else {
                $(submenuDom).removeClass('open');
                submenuLi.addClass('open');
            }
        });
    },
    // 一级菜单
    firstMenu: function () {
        // 在 sidebar 对象外定义 menuLi 无效 ： vue mounted 节点加载完成后执行
        const masterMenuLi = $("#admin-sidebar-menu > li");
        masterMenuLi.click(function () {
            masterMenuLi.removeClass('active');
            $(this).addClass('active');
        })
    },
    // 响应式 小屏幕点击
    mobilePhone: function () {
        $(mobilePhoneANode).click(function (e) {
            // 阻止跳转
            e.preventDefault();

            let sidebarDom = $(sidebarNode);

            if (sidebarDom.hasClass('open')) {
                sidebarDom.removeClass('open');
            } else {
                sidebarDom.addClass('open');
            }
        });
    }
};

export default sidebarMenuFeatures