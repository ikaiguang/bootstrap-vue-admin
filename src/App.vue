<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/admin">Admin</router-link>
            |
            <router-link to="/admin/login">Admin-Login</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <hr>
        <router-view></router-view>
    </div>
</template>
