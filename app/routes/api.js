var express = require('express');
var router = express.Router();

var data = {
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

router.get('/jobs', function(req, res) {
    res.json({data: data});
});

router.get('/jobs/:job_id', function(req, res) {
    var job_id = req.params.job_id;
    for (i = 0, len = data.jobs.length; i < len; i++) {
        if (data.jobs[i].job_id === parseInt(job_id)) {
            res.json({data: job});
        }
    }
    res.json({data: "No job found..."});
});

module.exports = router;
