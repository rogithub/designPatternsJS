
/**
 * Dummy class that receives an object cappable of writing to the console.
 * @param {Object} dependency Dependency for this class (console object).
 */
function MyClass(dependency) {
    this.dependency = dependency;
}

/**
 * Prints out a given text to the console.
 * @param {String} text Any text.
 */
MyClass.prototype.print = function(text) {
    this.dependency.log(text);
}

/**
 * Factory function.
 * @param   {Object} dependency Dependency for this class (console objec)
 * @returns {Object} An instance of MyClass
 */
module.exports = function (dependency) {
    return new MyClass(dependency);
}