#!/usr/bin/env node --harmony
'use strict';

function* makeGenerator() {
    yield('step 1');
    yield('step 2');
    return 'step 3';
}

var gen = makeGenerator();

var step1 = gen.next();
console.dir(step1);


var step2  = gen.next();
console.dir(step2);

var end = gen.next();
console.dir(end);