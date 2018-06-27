const Kafka = require('no-kafka');

var valueSum = 0;

// Create an instance of the Kafka consumer
const consumer = new Kafka.SimpleConsumer({"connectionString":"127.0.0.1:29092"})
var data = function (messageSet, topic, partition) {
    
    messageSet.forEach(function (m) {
        var json = JSON.parse(m.message.value.toString('utf8'))
        valueSum = valueSum + json.values;
        console.log(valueSum);
    });
};

// Subscribe to the Kafka topic
return consumer.init().then(function () {
    return consumer.subscribe('kafka-python-topic', data);
});