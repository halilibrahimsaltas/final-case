const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    paymentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Payment'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    items: [{
        productId: String,
        name: String,
        quantity: Number,
        price: Number
    }],
    billingAddress: {
        type: String,
        required: true
    },
    invoiceNumber: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ['CREATED', 'SENT', 'PAID'],
        default: 'CREATED'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Invoice', invoiceSchema); 