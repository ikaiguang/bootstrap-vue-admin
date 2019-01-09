<template>
    <div id="admin-content">
        <b-container fluid>
            <b-row>
                <b-col>
                    <div class="widget-box">
                        <div class="widget-title">
                            <span class="icon"><i class="fa fa-arrows"></i></span>
                            <h5>This a Title</h5>
                        </div>
                        <div class="widget-content">
                            padding.
                        </div>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <div class="widget-box">
                        <div class="widget-title">
                            <span class="icon"><i class="fa fa-amazon"></i></span>
                            <h5>This a Title</h5>
                            <span class="label">
                                <b-badge variant="success">4</b-badge>
                                <b-badge pill variant="primary">Primary</b-badge>
                            </span>
                        </div>
                        <div class="widget-content">
                            padding.
                        </div>
                    </div>
                </b-col>
                <b-col>
                    <div class="widget-box">
                        <div class="widget-title">
                            <span class="icon"><i class="fa fa-keyboard-o"></i></span>
                            <h5>This a Title</h5>
                            <span class="label">
                                <b-link href="#"><b-badge variant="primary">Link1</b-badge></b-link>
                                |
                                <b-link href="#"><b-badge variant="success">Link2</b-badge></b-link>
                            </span>
                        </div>
                        <div class="widget-content no-padding">
                            no-padding.
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
    @import "../../assets/admin/css/content.css";
</style>