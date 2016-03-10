import { Router } from 'express';

let data = {
    jobs: [
        {
            job_id: 1,
            company: 'TrackMaven',
            position: 'Software Maven',
            local: 'Washington, DC, USA',
            lookingFor: 'Angular.js, Django, ElasticSearch',
            postedDate: '4 April 2015',
            description: '',
            category: 'Engineering'
        },
        {
            job_id: 2,
            company: 'TrackMaven',
            position: 'Junior Software Maven',
            local: 'Washington, DC, USA',
            lookingFor: 'Javascript, Python',
            postedDate: '4 April 2015',
            description: '',
            category: 'Engineering'
        }
    ]
}

export default function() {
    let router = Router();

    router.get('/jobs', (req, res) => {
        res.json({
            data: data
        });
    });

    router.get('/jobs/:job_id', (req, res) => {
        let job_id = req.params.job_id
        for (var job of jobs) {
            if (job.job_id === parseInt(job_id)) {
                res.json({
                    data: job
                });
            };
        };
        res.json({data: "No job found..."});
    });

    return router;
}
