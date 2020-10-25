const router = require('express').Router();
let Classes = require('../models/Class.model');

router.route('/').get((req, res) => {
    Classes.find()
        .then(classes => res.json(classes))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const class_ = req.body;

    const newClass = new Classes(class_);
    newClass.save()
        .then(() => res.json("New class added"))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Classes.findById(req.params.id)
        .then(class_ => res.json(class_))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/name/:name').get((req, res) => {
    Classes.findOne({ name: req.params.name })
        .then(class_ => res.json(class_))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Classes.findByIdAndDelete(req.params.id)
        .then(() => res.json("Class deleted"))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/name/:name').delete((req, res) => {
    Classes.findOneAndDelete({ name: req.params.name })
        .then(() => res.json("Class deleted"))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').patch((req, res) => {
    Classes.findById(req.params.id)
        .then((class_) => {
            Object.assign(class_, req.body);
            class_.save()
                .then(() => res.json("Class Updated"))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/name/:name').patch((req, res) => {
    Classes.findOne({ name: req.params.name })
        .then((class_) => {
            Object.assign(class_, req.body);
            class_.save()
                .then(() => res.json("Class Updated"))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
