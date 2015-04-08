var argsList = require('args-list');

var DiContainer = function() {
    this.dependencies = {};
    this.factories = {};
    this.diContainer = {};        
}

DiContainer.prototype.factory = function(name, factory) {
    this.factories[name] = factory;
};

DiContainer.prototype.register = function(name, dep) {
    this.dependencies[name] = dep;
};

DiContainer.prototype.inject = function(factory) {
    var that = this;
    var args = argsList(factory).map(function(dependency) {
        return that.get(dependency);
    });

    return factory.apply(null, args);
};

DiContainer.prototype.get = function(name) {

    if(!this.dependencies[name]) {

        var factory = this.factories[name];            
        this.dependencies[name] = this.factory && this.inject(factory);

        if(!this.dependencies[name]) {
            throw new Error('Cannot find module: ' + name);
        } 
    }

    return this.dependencies[name];
};

module.exports = function() {
    return new DiContainer();
}