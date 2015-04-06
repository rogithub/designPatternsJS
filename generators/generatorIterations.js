#!/usr/bin/env node --harmony
'use strict';

function* getIterator(arr) {
    for(var i = 0; i < arr.length; i++) {
        yield arr[i];
    };
}

var iterator = getIterator(['te', 'tra', 'hi', 'dro', 'can', 'na', 'bi', 'nol']);
var current = iterator.next();

while(!current.done) {
    console.log(current.value);
    current = iterator.next();
}