// routes/paymentRoutes.js
const express = require('express');
const { initiatePayment, updatePaymentStatus } = require('../controllers/paymentController');
const router = express.Router();

// Ödeme başlatma
router.post('/initiate', initiatePayment);

// Ödeme durumu güncelleme
router.put('/update-status', updatePaymentStatus);

module.exports = router;
