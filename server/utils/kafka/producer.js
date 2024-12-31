const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'] // Kafka broker adresinizi buraya yazın
});

const producer = kafka.producer();

const sendMessage = async (topic, message) => {
  try {
    await producer.connect();
    await producer.send({
      topic,
      messages: [
        { value: JSON.stringify(message) },
      ],
    });
  } catch (error) {
    console.error('Kafka producer error:', error);
  }
};

module.exports = {
  sendMessage,
  producer
};