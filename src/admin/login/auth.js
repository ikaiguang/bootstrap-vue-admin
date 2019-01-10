/* globals localStorage */

export default {
    // 登陆
    // @param email 邮箱
    // @param password 密码
    // @param cb 回调函数
    login(email, password, cb) {
        // 使用 arguments 获取
        // 作用 确保 if (cb) = true
        // 不传回调参数控制台报错 ： 无法进行登陆
        cb = arguments[arguments.length - 1];

        // 已登陆
        if (localStorage.token) {
            // 如果有回调函数，执行回调函数
            if (cb) cb(true);
            // 登陆成功后需要改变某些状态
            this.onChange(true);
            // 登陆完毕
            return
        }

        // 未登陆 模拟登陆
        // @param (res) => {} 登陆回调函数
        // @result res 登陆操作后，向回调函数传递的参数
        pretendRequest(email, password, (res) => {
            // 登陆成功
            if (res.authenticated) {
                // 设置 token
                localStorage.token = res.token;
                // 如果有回调函数，执行回调函数
                if (cb) cb(true);
                // 登陆成功后需要改变某些状态
                this.onChange(true)
            } else {
                // 如果有回调函数，执行回调函数
                if (cb) cb(false);
                // 登陆失败后需要改变某些状态
                this.onChange(false)
            }
        })
    },

    // 获取登陆 token
    getToken() {
        return localStorage.token
    },

    // 退出登陆
    logout(cb) {
        // 删除 token
        delete localStorage.token;
        // 如果有回调函数，执行回调函数
        if (cb) cb();
        // 退出登陆后需要改变某些状态
        this.onChange(false)
    },

    // 是否登陆
    loggedIn() {
        return !!localStorage.token
    },

    // 定义方法，在 vue created 改变 onChange 方法体
    // 例如 ： auth.onChange = loggedIn => {this.loggedIn = loggedIn}
    // 作用 ： 登陆成功调用此函数，达到修改模板中某些值
    onChange() {
    }
}

// 模拟登陆
// @param cb 回调函数
function pretendRequest(email, pass, cb) {
    setTimeout(() => {
        if (email === 'ikaiguang@github.com' && pass === 'password') {
            cb({
                authenticated: true,
                token: Math.random().toString(36).substring(7)
            })
        } else {
            cb({authenticated: false})
        }
    }, 0)
}
