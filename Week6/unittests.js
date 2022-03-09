// Unit testing is the process of writing code to test our application code.

var expect = chai.expect;

describe('MyFunctions', function() {
    describe('#doSomething', function() {
        it('should concatenate the two parameters', function() {
           var x = doSomething('Hello', 5);
           expect(x).to.equal('Hello5');
        })

        it('should throw an error if first parameter is not a string', function(){
            expect(function() {
                doSomething(5, 5);
            }).to.throw(Error);
        })
    })
})

function doSomething(x, y) {
    if (typeof x != 'string') {
        throw new Error('x musy be a string');
    }
    return x + y;
}

// Read up on mocha and chai online.