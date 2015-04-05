var React = require('react');
// var Job = require('./Job.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            jobs: [
                {
                    company: 'TrackMaven',
                    position: 'Software Maven',
                    local: 'Washington, DC, USA',
                    lookingFor: 'Angular.js, Django, ElasticSearch',
                    postedDate: '4 April 2015',
                    description: '',
                    category: 'Engineer'
                },
                {
                    company: 'TrackMaven',
                    position: 'Junior Software Maven',
                    local: 'Washington, DC, USA',
                    lookingFor: 'Javascript, Python',
                    postedDate: '4 April 2015',
                    description: '',
                    category: 'Engineer'
                }
            ]
        };
    },
    render: function(){
        return (
            <div>
                { this.state.jobs }
            </div>
        );
    }
});
