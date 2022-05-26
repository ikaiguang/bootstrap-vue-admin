// 小屏菜单
const mobilePhoneClassName = "mobile-phone";
// 小屏菜单
const miniMenuClassName = "mini-menu";
// 菜单栏id
const sidebarIDName = "admin-sidebar";
// 菜单
const menuIDName = "admin-sidebar-menu";
// 子菜单class
const submenuClassName = "submenu";
// 菜单列表tag
const menuListTagName = "li";
// 内容节点
const contentIDName = "admin-content";

// 显示菜单
const showMenuClassName = "open";
// 选中菜单
const chooseMenuClassName = "active";
// 正常菜单
const normalMenuClassName = "normal-menu";

// 隐藏同级子菜单
function removeMenuOpen(liDom) {
  // li兄弟
  let liBrotherDom = liDom.parentNode.children;
  // 隐藏子菜单
  for (let i = 0; i < liBrotherDom.length; i++) {
    // 跳过当前点击节点
    if (liBrotherDom[i] === liDom) {
      continue;
    }
    // 隐藏子菜单
    liBrotherDom[i].classList.remove(showMenuClassName);
  }
}

// 移除菜单选中效果
function removeMenuChoose(menuDom, originLiDom) {
  // 菜单li节点
  let menuLiDom = menuDom.getElementsByTagName(menuListTagName);
  // 移除选中效果
  for (let i = 0; i < menuLiDom.length; i++) {
    // 跳过当前点击节点
    if (menuLiDom[i] === originLiDom) {
      continue;
    }
    // 移除选中效果
    menuLiDom[i].classList.remove(chooseMenuClassName);
  }
}

// 添加父菜单选中效果
function addMenuParentChoose(liDom) {
  // 如果点击的是子菜单，获取父节点菜单的 a 标签的html(用处：小屏幕按键显示)
  let parentADomHTML = [];
  // 父节点
  let parentDom = liDom.parentNode;
  // 一级一级的到菜单节点
  while (parentDom.id !== menuIDName) {
    // 父节点是li
    if (parentDom.matches(menuListTagName)) {
      // 菜单选中效果
      parentDom.classList.add(chooseMenuClassName);
      // 如未展开菜单
      if (!parentDom.classList.contains(showMenuClassName)) {
        // 展开菜单
        parentDom.classList.add(showMenuClassName);
      }
      // 获取父节点菜单的 a 标签的html
      parentADomHTML.push(parentDom.getElementsByTagName("a")[0].innerHTML);
    }
    parentDom = parentDom.parentNode;
  }
  return parentADomHTML;
}

// 刷新页面后，菜单选中
function refreshMenu(domCollection) {
  let activeLiDom;
  // 菜单li节点
  let menuLiDom = domCollection.menu.getElementsByTagName(menuListTagName);
  // 移除选中效果
  for (let i = 0; i < menuLiDom.length; i++) {
    if (menuLiDom[i].classList.contains(chooseMenuClassName)) {
      activeLiDom = menuLiDom[i];
      break;
    }
  }
  // 添加父菜单选中效果
  addMenuParentChoose(activeLiDom);
}

// 窗口宽度
function getWindowWidth() {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
}

// 菜单功能
//////////////////////////////////////////////////////////////////////////////////////////

// 响应式 小屏幕点击
function mobilePhone(domCollection) {
  // 点击事件
  domCollection.mobilePhoneA.onclick = function(e) {
    // 阻止跳转
    e.preventDefault();
    // 显示菜单 || 关闭菜单
    if (domCollection.sidebar.classList.contains(showMenuClassName)) {
      domCollection.sidebar.classList.remove(showMenuClassName);
    } else {
      domCollection.sidebar.classList.add(showMenuClassName);
    }
  };
}

// 迷你菜单
function miniMenu(domCollection) {
  // 点击事件
  domCollection.miniMenuA.onclick = function(e) {
    // 阻止跳转
    e.preventDefault();
    // 正常菜单 || 迷你菜单
    if (domCollection.sidebar.classList.contains(normalMenuClassName)) {
      // 小菜单
      domCollection.sidebar.classList.remove(normalMenuClassName);
      // 修正内容边距
      document
        .getElementById(contentIDName)
        .classList.remove(normalMenuClassName);
    } else {
      // 完整菜单
      domCollection.sidebar.classList.add(normalMenuClassName);
      // 修正内容边距
      document.getElementById(contentIDName).classList.add(normalMenuClassName);
    }
  };
}

// 选中菜单
function chooseMenu(domCollection) {
  // 菜单下所有的A标签
  let menuA = domCollection.menu.getElementsByTagName("a");
  // 遍历添加点击事件
  for (let i = 0; i < menuA.length; i++) {
    // a标签点击事件
    menuA[i].onclick = function(e) {
      // a标签的父li节点
      let aLiDom = menuA[i].parentNode;
      // 如果点击的是子菜单，获取上级菜单的 a 标签的html(用处：小屏幕按键显示)
      let parentADomHTML = [];
      // 有子菜单
      let hasChildrenMenu = aLiDom.classList.contains(submenuClassName);
      // 隐藏其他同级子菜单
      removeMenuOpen(aLiDom);
      // 有子菜单 阻止跳转 && 显示子菜单/隐藏子菜单
      if (hasChildrenMenu) {
        // 阻止跳转
        e.preventDefault();
        // 显示子菜单 || 隐藏子菜单
        if (aLiDom.classList.contains(showMenuClassName)) {
          // 隐藏子菜单
          aLiDom.classList.remove(showMenuClassName);
        } else {
          // 显示子菜单
          aLiDom.classList.add(showMenuClassName);
        }
      } else {
        // 添加选中效果
        aLiDom.classList.add(chooseMenuClassName);
        // 移除选中效果
        removeMenuChoose(domCollection.menu, aLiDom);
        // 添加选中效果
        if (!aLiDom.classList.contains(chooseMenuClassName)) {
          aLiDom.classList.add(chooseMenuClassName);
        }
        // 添加父菜单选中效果
        parentADomHTML = addMenuParentChoose(aLiDom);
      }
      // 有子菜单：结束
      if (hasChildrenMenu) {
        return;
      }
      // 小菜单
      if (domCollection.sidebar.classList.contains(normalMenuClassName)) {
        // 显示小菜单
        domCollection.sidebar.classList.remove(normalMenuClassName);
        // 修正内容边距
        document
          .getElementById(contentIDName)
          .classList.remove(normalMenuClassName);
      }
      // 小屏幕按键显示

      // 修改小屏幕按键显示
      let mobilePhoneInnerHtml = this.innerHTML;
      if (parentADomHTML.length > 0) {
        mobilePhoneInnerHtml =
          parentADomHTML.reverse().join("/") + "/" + mobilePhoneInnerHtml;
      }
      domCollection.mobilePhoneA.innerHTML = mobilePhoneInnerHtml;
      // 小屏幕选中后关闭菜单
      let width = getWindowWidth();
      if (width <= 480) {
        domCollection.sidebar.classList.remove(showMenuClassName);
      }
    };
  }
}

// 菜单功能
function menuFeatures() {
  // 初始化节点
  // 菜单节点
  const sidebarDom = document.getElementById(sidebarIDName);
  // 小屏菜单
  const mobilePhoneADom = sidebarDom
    .getElementsByClassName(mobilePhoneClassName)[0]
    .getElementsByTagName("a")[0];
  // 小屏菜单
  const miniMenuADom = sidebarDom
    .getElementsByClassName(miniMenuClassName)[0]
    .getElementsByTagName("a")[0];
  // 菜单节点
  const menuDom = document.getElementById(menuIDName);
  // 节点集合
  const domCollection = {
    sidebar: sidebarDom,
    mobilePhoneA: mobilePhoneADom,
    miniMenuA: miniMenuADom,
    menu: menuDom
  };

  // 响应式 小屏幕点击
  mobilePhone(domCollection);
  // 迷你菜单
  miniMenu(domCollection);
  // 选中菜单
  chooseMenu(domCollection);
  // 刷新页面后，菜单选中
  refreshMenu(domCollection);
}

// 输出菜单功能
export { menuFeatures as sidebarMenuFeatures };
