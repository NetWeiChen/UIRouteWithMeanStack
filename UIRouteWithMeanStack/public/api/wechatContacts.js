var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    debugger;
    var currentDate = new Date();

    res.json({
        recentUsers: [
            { id: '1', name: 'Robin', phone:'9052347896', date: currentDate },
            { id: '2', name: 'Tony', phone: '9058796754', date: currentDate },
            { id: '3', name: 'Paul', phone: '9059087896', date: currentDate },
        ]
    });
});

module.exports = router;