<template>
    <div id="admin-sidebar">

        <a href="#" class="mobile-phone">
            <i class="fa fa-hand-o-right"></i>&nbsp;<span>菜单</span>
        </a>

        <transition name="slide-fade">
            <b-nav vertical id="admin-sidebar-menu">

                <b-nav-item>
                    <a href="#"><i class="fa fa-home"></i> <span>Dashboard</span></a>
                </b-nav-item>

                <b-nav-item class="active">
                    <a href="#"><i class="fa fa-table"></i> <span>Table</span></a>
                </b-nav-item>

                <b-nav-item class="submenu">
                    <a href="#"><i class="fa fa-android"></i> <span>Form</span></a>
                    <b-nav vertical>

                        <b-nav-item class="active">
                            <a href="#"><i class="fa fa-table"></i> <span>Basic Form</span></a>
                        </b-nav-item>

                        <b-nav-item>
                            <a href="#"><i class="fa fa-table"></i> <span>Form with Validation</span></a>
                        </b-nav-item>

                        <b-nav-item>
                            <a href="#"><i class="fa fa-table"></i> <span>Form with Wizard</span></a>
                        </b-nav-item>

                    </b-nav>
                </b-nav-item>

                <b-nav-item>
                    <a href="#"><i class="fa fa-table"></i> <span>Widgets</span></a>
                </b-nav-item>

            </b-nav>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        created() {
        },
        mounted() {
        },
        methods: {
        }
    }
</script>