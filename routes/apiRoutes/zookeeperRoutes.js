const router = require('express').Router();

const {    
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper
} = require('../../lib/zookeepers.js');

const { zookeepers } = require('../../data/zookeepers');

////////////////GET requests/////////////
router.get('/zookeepers', (req, res) => {
    let results = zookeepers;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.get('/zookeepers/:id', (req, res) => {
    const result = findById(req.params.id, zookeepers);

    if (result == true) {
        res.json(result);
    } else {
        res.send(404);
    }

});

///////////////////post reqests/////////////////////
router.post('/zookeepers', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = zookeepers.length.toString();
    
    if (validateZookeeper(req.body) == false) {
        res.status(400).send('The zookeeper is not properly formatted.');
    } else {
        const zookeeper = createNewZookeeper(req.body, zookeepers);
        res.json(zookeeper);
    }
});


module.exports  = router;