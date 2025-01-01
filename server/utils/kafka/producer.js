const { Kafka, Partitioners } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'], // Update with your Kafka broker address
});

const producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner, // Use this if you want the legacy partitioning behavior
});

const sendMessage = async (topic, message) => {
  try {
    // Ensure producer is connected
    if (!producer.isConnected()) {
      await producer.connect();
    }

    // Send message to the specified topic
    await producer.send({
      topic,
      messages: [
        { value: JSON.stringify(message) },
      ],
    });

    console.log('Message sent successfully');
  } catch (error) {
    console.error('Kafka producer error:', error);
  }
};

// Cleanly disconnect the producer when shutting down the app
const disconnectProducer = async () => {
  try {
    await producer.disconnect();
    console.log('Producer disconnected');
  } catch (error) {
    console.error('Error disconnecting producer:', error);
  }
};

module.exports = {
  sendMessage,
  disconnectProducer,
};
