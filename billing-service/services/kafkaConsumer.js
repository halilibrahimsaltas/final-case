const { Kafka } = require('kafkajs');
const Invoice = require('../models/invoiceModel');
const { generateInvoiceNumber } = require('../utils/invoiceUtils');

const kafka = new Kafka({
    clientId: 'billing-service',
    brokers: [process.env.KAFKA_BROKERS || 'kafka:29092']
});

const consumer = kafka.consumer({ groupId: 'billing-service-group' });

const handlePaymentCompletedEvent = async (paymentData) => {
    try {
        const invoiceNumber = await generateInvoiceNumber();
        
        const invoice = new Invoice({
            paymentId: paymentData.paymentId,
            userId: paymentData.userId,
            amount: paymentData.amount,
            items: paymentData.items,
            billingAddress: paymentData.billingAddress,
            invoiceNumber,
            status: 'CREATED',
            createdAt: new Date()
        });

        await invoice.save();
        console.log('Invoice created successfully:', invoiceNumber);
        
        // Additional invoice processing (e.g., PDF generation, email sending)
        await processInvoice(invoice);
    } catch (error) {
        console.error('Error creating invoice:', error);
    }
};

const processInvoice = async (invoice) => {
    try {
        // Simulate invoice processing
        setTimeout(async () => {
            invoice.status = 'SENT';
            await invoice.save();
            console.log('Invoice processed and sent:', invoice.invoiceNumber);
        }, 2000);
    } catch (error) {
        console.error('Error processing invoice:', error);
    }
};

const runConsumer = async () => {
    try {
        await consumer.connect();
        console.log('Billing service Kafka consumer connected');

        await consumer.subscribe({
            topics: ['payment-events'],
            fromBeginning: true
        });

        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                try {
                    const messageValue = JSON.parse(message.value.toString());
                    console.log('Received message:', messageValue.type);

                    if (messageValue.type === 'PAYMENT_COMPLETED') {
                        await handlePaymentCompletedEvent(messageValue.data);
                    }
                } catch (error) {
                    console.error('Error processing message:', error);
                }
            }
        });
    } catch (error) {
        console.error('Kafka consumer error:', error);
        throw error;
    }
};

module.exports = { runConsumer }; 