const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');

router.use(animalRoutes);
router.use(require('../apiRoutes/zookeeperRoutes'));

module.exports = router;