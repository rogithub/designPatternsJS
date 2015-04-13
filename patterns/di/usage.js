// load dependency container
var diContainer = require('./diContainer')();

//register parameter 'dependency'.
diContainer.register('dependency', console);

//register factory method.
diContainer.factory('myClass', require('./myClass'));

//obtain an instance of MyClass
var myObject = diContainer.get('myClass');

//calling a method on an object for which we never used 'new' directly.
myObject.print('Hello dependency injection container');