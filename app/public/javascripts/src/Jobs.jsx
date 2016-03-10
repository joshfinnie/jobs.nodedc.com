import React, { Component } from 'react';
import request from 'request';

import Job from './Job';

export default class Jobs extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            jobs: []
        }
    }

    componentWillMount() {
        request('http://localdocker:3000/api/jobs/', function(error, response, body) {
            var result = JSON.parse(body);
            if (this.isMounted()) {
                this.setState(result.data);
            }
        }.bind(this));
    }

    render() {
        return (
            <div className="list-group">
                {this.state.jobs.map(function(job){
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
}
