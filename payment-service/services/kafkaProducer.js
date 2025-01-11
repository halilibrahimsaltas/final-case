const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'payment-service',
    brokers: [process.env.KAFKA_BROKERS || 'kafka:29092']
});

const producer = kafka.producer();

const sendPaymentCompletedEvent = async (paymentData) => {
    try {
        await producer.connect();
        await producer.send({
            topic: 'payment-events',
            messages: [{
                value: JSON.stringify({
                    type: 'PAYMENT_COMPLETED',
                    data: {
                        paymentId: paymentData._id,
                        userId: paymentData.userId,
                        amount: paymentData.amount,
                        items: paymentData.items,
                        billingAddress: paymentData.billingAddress,
                        timestamp: new Date().toISOString()
                    }
                })
            }]
        });
        console.log('Payment completed event sent successfully');
    } catch (error) {
        console.error('Error sending payment completed event:', error);
        throw error;
    } finally {
        await producer.disconnect();
    }
};

module.exports = { sendPaymentCompletedEvent }; 