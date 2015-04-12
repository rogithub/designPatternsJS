var Invoker = require('./invoker').Invoker;
var createSendStatusCmd = require('./createSendStatusCmd').createSendStatusCmd;
var statusUpdateService = require('./statusUpdateService').statusUpdateService;

var invoker = new Invoker();
var command = createSendStatusCmd(statusUpdateService, 'HI!');
invoker.run(command);
invoker.undo();