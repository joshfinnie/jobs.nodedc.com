var React = require('react');
var Job = require('./Job.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            data: [
                {
                    company: 'TrackMaven',
                    position: 'Software Maven',
                    local: 'Washington, DC, USA',
                    lookingFor: 'Angular.js, Django, ElasticSearch',
                    postedDate: '4 April 2015',
                    description: '',
                    category: 'Engineering'
                },
                {
                    company: 'TrackMaven',
                    position: 'Junior Software Maven',
                    local: 'Washington, DC, USA',
                    lookingFor: 'Javascript, Python',
                    postedDate: '4 April 2015',
                    description: '',
                    category: 'Engineering'
                }
            ]
        };
    },
    render: function(){
        return (
            <div className="list-group">
                {this.state.data.map(function(job){
                    return (
                        <Job
                            company={job.company}
                            position={job.position}
                            local={job.local}
                            lookingFor={job.lookingFor}
                            postedDate={job.postedDate}
                            description={job.description}
                            category={job.category}
                        />
                    )
                })}
            </div>
        )
    }
});
