function MyClass(dependency) {
    this.dependency = dependency;
}

MyClass.prototype.print = function(text) {
    this.dependency.log(text);
}

module.exports = function (dependency) {
    return new MyClass(dependency);
}