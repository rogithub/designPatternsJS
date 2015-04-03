#!/usr/bin/env node --harmony
'use strict';

function* getGenerator() {     
    
    var task = yield null;
    console.log(task);
    
    var task1 = yield null;
    console.log(task1);
    
    var task2 = yield null;
    console.log(task2);
    
}

var gen = getGenerator();
gen.next();
gen.next('step 1');
gen.next('step 2');
gen.next('step 3');
//gen.next();
gen.throw(new Error('Error at step 4'));