var $ = jQuery = require('../../libraries/jquery/dist/jquery');
var bootstrap = require('../../libraries/bootstrap-sass-official/assets/javascripts/bootstrap');
var React = require('react');
var Job = require('./Job.jsx');

React.render(
    <Job />,
    document.getElementById('jobs')
);
