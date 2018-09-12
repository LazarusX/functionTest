module.exports = async function (context, message) {
    context.log('Receiving message');
    context.log(context);
    context.log(arguments);
    // var message = msg.getBytes().toString('utf8');
    // if (message) {
    // var outputMsg = new Message(message);
    // outputMsg.properties.add('Function', 'EdgeTriggerJS');
    // client.sendOutputEvent('output1', outputMsg, printResultFor('Sending received message'));
    context.bindings.output = 'hello function';
    context.log('Sending received messages');
    // }
}
