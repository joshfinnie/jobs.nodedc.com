var React = require('react');
var request = require('request');

var Job = require('./Job.jsx');

module.exports = React.createClass({
    componentDidMount: function() {
        request('http://localhost:3000/api/jobs/', function(error, response, body) {
            var result = JSON.parse(body);
            if (this.isMounted()) {
                this.setState(result);
            }
        }.bind(this));
    },

    render: function(){
        if (this.state == null) {
            jobs = [];
        } else {
            jobs = this.state.data.jobs
        }
        return (
            <div className="list-group">
                {jobs.map(function(job){
                    return (
                        <Job
                            key={job.job_id}
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
        );
    }
});
