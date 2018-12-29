var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser').json();

// router.use(bodyParser.urlencoded({ extended: true }));

var Project = require('../models/project');

// CREATES A NEW PROJECT
router.post('/add', bodyParser, function (req, res) {
    console.log("Adding Project...");
    console.log(req.body);
    Project.create({
        Title: req.body.projectTitle,
        Status: req.body.projectStatus,
        DueDate: req.body.dueDate,
        CreatedDate: req.body.createdDate
    }, 
    function (err, project) {
        if (err) return res.status(500).send("There was a problem adding the information to the database.");
        res.status(200).send(project);
    });
});

// RETURNS ALL THE PROJECTS IN THE DATABASE
router.get('/', function (req, res) {
    console.log("Getting all projects...");
    Project.find({}).exec(function(err, projects) {
        if (err) return res.status(500).send("There was a problem finding the projects.");
        res.status(200).send(projects);
    });
});

// GETS A SINGLE PROJECT FROM THE DATABASE
router.get('/:id', function (req, res) {
    console.log("Getting project with ID: " + req.params.id);
    Project.findById(req.params.id, function (err, project) {
        if (err) return res.status(500).send("There was a problem finding the project.");
        if (!project) return res.status(404).send("No project found.");
        res.status(200).send(project);
    });
});

// DELETES A PROJECT FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Project.findByIdAndRemove(req.params.id, function (err, project) {
        if (err) return res.status(500).send(false);
        res.status(200).send(true);
    });
});

// UPDATES A SINGLE PROJECT IN THE DATABASE
router.put('/:id', bodyParser, function (req, res) {
    Project.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, project) {
        if (err) return res.status(500).send("There was a problem updating the project.");
        res.status(200).send(project);
    });
});


module.exports = router;