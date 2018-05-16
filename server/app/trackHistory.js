const express = require('express');
const TrackHistory = require('../models/TrackHistory');
const User = require('../models/User');

const createRouter = () => {
    const router = express.Router();

    router.get('/', async (req, res) => {
        let token = req.get('Token');

        if(!token) return res.sendStatus(401);

        let user = await User.findOne({token: token});

        if(!user) return res.sendStatus(401);

        TrackHistory.find({user: user._id}).populate({path: 'track', populate: {path: 'album', populate: {path: 'singer'}}})
            .then(result => res.send(result));
    });

    router.post('/', async (req, res) => {
        const token = req.get('Token');
        const user = await User.findOne({token});


        if(!user) {
            res.status(401).send({error: 'Wrong'})
        } else {
            const track = {user: user._id, track: req.body.track, datetime: new Date()};
            const trackHistory = new TrackHistory(track);
            trackHistory.save()
                .then(trackHistory => res.send(trackHistory))
                .catch(error => res.status(400).send(error));
        }
    });

    return router;
};

module.exports = createRouter;