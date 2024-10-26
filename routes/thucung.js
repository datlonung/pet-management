var express = require('express');
var router = express.Router();
const thucungController = require('../controllers/thucung')
// Handle thu cung router

/* VIEW. */
router.get('/', thucungController.viewListthucung);
router.get('/add-thucung', thucungController.viewAddthucung);
router.get('/update-thucung/:id', thucungController.viewUpdatethucung);

/* API */
router.get('/api/list', thucungController.apiListthucung);
router.post('/api/add', thucungController.apiAddthucung);
router.post('/api/update/:id', thucungController.apiUpdatethucung);
router.delete('/api/delete', thucungController.apiDeletethucung);

module.exports = router;
