const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

const { catchErrors } = require('../handlers/errorHandlers');

router.get('/items', catchErrors(itemController.getItems));
router.get('/items/:id', catchErrors(itemController.getByItemId));

module.exports = router;
