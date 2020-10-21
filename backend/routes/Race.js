const router = require('express').Router();

let Races = require('../models/Race.model');

router.route('/').get((req, res) => {
    Races.find()
        .then(races => res.json(races))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const race = req.body;

    console.log(race);
    const newRace = new Races(race);
    newRace.save()
        .then(() => res.json("New race added"))
        .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router;
