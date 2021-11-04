const express = require('express');

let router = express.Router();

router.get('/', (res, req) => { 
    res.send('chirps');
})

module.exports = router;