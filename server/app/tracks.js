const express = require('express');
const Track = require('../models/Track');

const createRouter = () => {
    const router = express.Router();

    router.post('/', (req, res) => {
        console.log(req.body);
        const tracks = new Track(req.body);

        tracks.save()
            .then(category => res.send(category))
            .catch(error => res.status(400).send(error));
    });

    router.get('/', (req, res) => {
        if (req.query.album) {
            Track.find({album: req.query.album})
                .then(tracks => res.send(tracks))
                .catch(() => res.sendStatus(500));
        }

    });

    return router;
};

module.exports = createRouter;
