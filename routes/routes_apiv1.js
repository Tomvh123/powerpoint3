/**
 * Created by tom-n on 9-6-2017.
 */

// API - versie 1
var express = require('express');
var router = express.Router();
var path = require('path');

// Fall back, display soome info
router.get('*', function (req, res) {
    res.status(200);
    res.json({
        "description": "Project X API version1. Please use API version 2"
    })
});


module.exports = router;


