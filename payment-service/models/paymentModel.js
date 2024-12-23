// models/paymentModel.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  cardId: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentStatus: { type: String, default: 'Pending' },
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
