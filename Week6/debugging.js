/*
You can use the debugger in the dev tools to troubleshoot your code.
To activate it, click on the row next to your line of code on the "source" tab and press the "play/pause" button to step over, in or out of your code.

Here are some ways we can use debugging to resolve errors in our code:

console.log(hasStringAtEnd('hello', 'llo'));  //true
console.log(hasStringAtEnd('llo', 'hello'));  //true
console.log(hasStringAtEnd('llod', 'hello')); //false
console.log(hasStringAtEnd('ll', 'hello'));   //false
console.log(hasStringAtEnd('llo', 'hellod')); //false

function hasStringAtEnd(a, b) {
    let shortest = '';
    let longest = '';
    if (a.length < b.length) {
        shortest = a;
        longest = b;
    } else {
        shortest = b;
        longest = a;
    }

    const indexStart = longest.length - shortest.length;
    const endOfLongest = longest.substring(indexStart + 1);
    return shortest === endOfLongest;
}

*/

console.log(hasStringAtEnd('hello', 'llo'));  //true
console.log(hasStringAtEnd('llo', 'hello'));  //true
console.log(hasStringAtEnd('llod', 'hello')); //false
console.log(hasStringAtEnd('ll', 'hello'));   //false
console.log(hasStringAtEnd('llo', 'hellod')); //false

function hasStringAtEnd(a, b) {
    let shortest = '';
    let longest = '';
    if (a.length < b.length) {
        shortest = a;
        longest = b;
    } else {
        shortest = b;
        longest = a;
    }

    const indexStart = longest.length - shortest.length;
    const endOfLongest = longest.substring(indexStart);
    return shortest === endOfLongest;
}