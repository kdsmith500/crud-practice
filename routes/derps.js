var express = require('express');
var router = express.Router();
var derpsCtrl = require('../controllers/derps');

router.get('/', derpsCtrl.index);
router.get('/:id', derpsCtrl.show);
router.post('/', derpsCtrl.create);
router.delete('/:id', derpsCtrl.remove);
router.put('/:id', derpsCtrl.update);

module.exports = router;
