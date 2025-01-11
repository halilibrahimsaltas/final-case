const express = require('express');
const router = express.Router();
const Invoice = require('../models/invoiceModel');
const auth = require('../middleware/auth');

// Kullanıcının faturalarını getir
router.get('/invoices', auth, async (req, res) => {
    try {
        const invoices = await Invoice.find({ userId: req.user.id })
            .sort({ createdAt: -1 });
        res.json(invoices);
    } catch (error) {
        res.status(500).json({ message: 'Faturalar getirilirken hata oluştu' });
    }
});

// Fatura detaylarını getir
router.get('/invoices/:id', auth, async (req, res) => {
    try {
        const invoice = await Invoice.findOne({
            _id: req.params.id,
            userId: req.user.id
        });
        
        if (!invoice) {
            return res.status(404).json({ message: 'Fatura bulunamadı' });
        }
        
        res.json(invoice);
    } catch (error) {
        res.status(500).json({ message: 'Fatura detayları getirilirken hata oluştu' });
    }
});

module.exports = router; 