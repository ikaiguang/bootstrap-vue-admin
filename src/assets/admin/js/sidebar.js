import $ from 'jquery'

const sidebar = {
    toggleFunc: function () {

        const menuLi = $("#admin-sidebar-menu > li");
        // const submenu = $("#admin-sidebar-menu li");
        // window.console.log(menuLi)

        menuLi.click(function () {
            menuLi.removeClass('active');
            $(this).addClass('active');
        })
    }
}

export default sidebar