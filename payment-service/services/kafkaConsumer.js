const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'payment-service-consumer',
  brokers: [process.env.KAFKA_BROKER || 'localhost:9092']
});

const consumer = kafka.consumer({ groupId: 'payment-service-group' });

const runConsumer = async () => {
  await consumer.connect();
  console.log('Kafka consumer connected');

  // İzlenecek topic'lere abone olma
  await consumer.subscribe({ 
    topics: ['payment-events', 'order-events'], 
    fromBeginning: true 
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        const messageValue = JSON.parse(message.value.toString());
        
        switch (topic) {
          case 'payment-events':
            await handlePaymentEvent(messageValue);
            break;
          case 'order-events':
            await handleOrderEvent(messageValue);
            break;
          default:
            console.log(`Bilinmeyen topic: ${topic}`);
        }
      } catch (error) {
        console.error('Mesaj işleme hatası:', error);
      }
    }
  });
};

const handlePaymentEvent = async (messageValue) => {
  console.log('Ödeme olayı alındı:', messageValue);
  // Ödeme olayı işleme mantığı buraya gelecek
};

const handleOrderEvent = async (messageValue) => {
  console.log('Sipariş olayı alındı:', messageValue);
  // Sipariş olayı işleme mantığı buraya gelecek
};

module.exports = { runConsumer };