const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Ödeme başlatma
router.post('/initiate', auth, async (req, res) => {
  try {
    const { amount, billingDetails } = req.body;

    // Deneysel ödeme simülasyonu
    const payment = {
      id: Date.now().toString(),
      userId: req.user.id,
      amount,
      status: 'COMPLETED',
      billingDetails,
      createdAt: new Date()
    };

    res.json({
      success: true,
      message: 'Payment processed successfully',
      payment
    });
  } catch (error) {
    console.error('Payment error:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing payment'
    });
  }
});

// Ödeme durumu kontrolü
router.get('/status/:paymentId', auth, async (req, res) => {
  try {
    // Deneysel durum kontrolü
    res.json({
      success: true,
      status: 'COMPLETED'
    });
  } catch (error) {
    console.error('Payment status check error:', error);
    res.status(500).json({
      success: false,
      message: 'Error checking payment status'
    });
  }
});

module.exports = router; 