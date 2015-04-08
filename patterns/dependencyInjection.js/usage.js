var diContainer = require('./diContainer')();

diContainer.register('dependency', console);
diContainer.factory('myClass', require('./myClass'));

var myObject = diContainer.get('myClass');

myObject.print('Hello dependency injection container');