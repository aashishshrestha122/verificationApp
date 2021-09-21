const express = require("express");
const router = express.Router();

const verifyController = require('../controllers/verifyController');
/**
 * POST /api/billing/
 */
router.post('/', verifyController.verifyCode);

module.exports = router;