<template>
  <div id="web-content">
    <!--<b-container fluid>-->
    <!--<router-view></router-view>-->
    <!--</b-container>-->

    <b-container fluid>
      <b-row>
        <b-col>
          <b-jumbotron class="jumbotron-bg-none">
            <template slot="header">
              Bootstrap Vue
            </template>
            <template slot="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </template>
            <hr class="my-4" />
            <p>
              It uses utility classes for typography and spacing to space
              content out within the larger container.
            </p>
            <b-btn variant="primary" href="#">Do Something</b-btn>
            <b-btn variant="success" href="#">Do Something Else</b-btn>
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
