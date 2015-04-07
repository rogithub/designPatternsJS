
function createTask(target, args) {
    return function() {
        target.apply(null, args);
    }
}

var task = createTask(console.log, ["hola mundo"]);

task();