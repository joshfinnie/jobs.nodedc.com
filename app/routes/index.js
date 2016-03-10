import { Router } from 'express';

export default function() {
    let router = Router();

    router.get('/jobs', (req, res) => {
        res.render('index', { title: 'jobs.nodedc.com' });
    });

    return router;
}
