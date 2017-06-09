/**
 * Created by tom-n on 9-6-2017.
 */

// API - versie 2
var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../sql');

router.get('/help', function (req, res) {
    res.status(200);
    res.json({
        "description": "Help function not available yet"
    });
});

router.get('/actors', function (req, res) {
    res.contentType('application/json');

    db.query('SELECT * FROM actor', function (error, rows, fields) {
        if(error){
            res.status(400).json(error);
        }else{
            res.status(200).json(rows);
        };
    });
});

router.get('/actors/:id', function (req, res) {
    var actorId = req.params.id;

    res.contentType('application/json');

    db.query('SELECT * FROM actor WHERE actor_id=?', [actorId],
    function (error, rows, fields) {
        if(error){
            res.status(400).json(error);
        }else{
            res.status(200).json(rows);
        };
    });
});

router.get('/status', function (req, res) {
    var results = [];

    results.push({
        created: "ooit",
        updated: "nooit",
        description: "Dit is een beschrijving",
        location: "Breda, the Netherlands",
        fequency: 50.0,
        unit: "hz"
    },
        {
            created: "ooit",
            updated: "nooit",
            description: "Dit is een andere beschrijving",
            location: "Eindhoven, the Netherlands",
            fequency: 51.9,
            unit: "hz"

    });
    res.json(results);
});

// Fall back, display soome info
router.get('*', function (req, res) {
    res.status(200);
    res.json({
        "description": "Thank you for using API version 2"
    })
});


module.exports = router;