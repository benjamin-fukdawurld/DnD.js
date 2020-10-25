const router = require('express').Router();
let Races = require('../models/Race.model');

router.route('/').get((req, res) => {
    Races.find()
        .then(races => res.json(races))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const race = req.body;

    const newRace = new Races(race);
    newRace.save()
        .then(() => res.json("New race added"))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Races.findById(req.params.id)
        .then(race => res.json(race))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/name/:name').get((req, res) => {
    Races.findOne({ name: req.params.name })
        .then(race => res.json(race))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Races.findByIdAndDelete(req.params.id)
        .then(() => res.json("Race deleted"))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/name/:name').delete((req, res) => {
    Races.findOneAndDelete({ name: req.params.name })
        .then(() => res.json("Race deleted"))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').patch((req, res) => {
    Races.findById(req.params.id)
        .then((race) => {
            Object.assign(race, req.body);
            race.save()
                .then(() => res.json("Race Updated"))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/name/:name').patch((req, res) => {
    Races.findOne({ name: req.params.name })
        .then((race) => {
            Object.assign(race, req.body);
            race.save()
                .then(() => res.json("Race Updated"))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
