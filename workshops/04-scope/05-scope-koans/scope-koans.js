
/*
### Scope Koans

All of the tests for scope-koans.js are failing. Following the restrictions for
each function in scope-koans.js, fix the code so every test passes.

For all functions, you may not:
  1. Edit the line initially declaring each test message (e.g., testOneMessage)
  2. Edit any code on the same line as the return keyword.

It may be helpful to look at the values passed into these functions in
scope-koans.spec.js!

*/
// Test One Restrictions: Do not declare any new variable with the let keyword
let testOneMessage = 'test failing';

function testOne() {

  testOneMessage='test succeeding'
  return testOneMessage;
}


// Test Two Restrictions: Do not change any code in the body of testTwo
// (you can edit helperFunc though)
let testTwoMessage = 'test failing';

function testTwo() {
  helperFunc();//undefinded

  return testTwoMessage;
}

function helperFunc(a) {
  testTwoMessage = 'test succeeding';
  return a;
}


// Test Three Restrictions: Type only a single character in either testThree or getMessage
let testThreeMessage = 'test failing';

function testThree(testThreeMessage) {
  if (testThreeMessage) {
    testThreeMessage = 'test succeeding';
  }

  let msg = getMessage(testThreeMessage);
  return msg;

  function getMessage(value) {
    if (value) {
      return testThreeMessage;
    }

    return 'test failing';
  }
}


// Test Four Restrictions: Delete only a single character from any function.
let testFourMessage = 'test succeeding';

function testFour(msg) {
debugger
  function innerFunc(msg) {
    msg = msg

    function doubleInner(sg) {
      testFourMessage = msg;
      return testFourMessage;
    }

    testFourMessage = doubleInner('test failing')
  }

  innerFunc(testFourMessage);

  msg = testFourMessage;
  return testFourMessage;
}
