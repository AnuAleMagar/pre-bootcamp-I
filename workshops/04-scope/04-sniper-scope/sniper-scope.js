/*
### Sniper Scope

Each of the functions in sniper-scope.js asks you to make a prediction: will
AgentinScope be equal to true or false? The tests for this problem will pass if
your prediction is correct. Note that the tests each of these functions in the
same order in which they're defined in sniper-scope.js.

It's best to get each test to pass before moving onto the next function. If you
get a prediction wrong, try to understand the observed behavior before moving
on.

*/
let bond = '007';

function oddJob() {
  debugger;
  let AgentinScope = (bond === '007');
  let prediction =true; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}

function goldFinger(bond) {
  let AgentinScope = (bond === '007')
  let prediction = false; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}


function scaramanga(target) {
  target = bond;

  let AgentinScope = (bond === '007')
  let prediction = true; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}


function drNo() {
  let bond = 'Body Double';

  let AgentinScope = (bond === '007');
  let prediction = false; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}


function jaws(agent) {
  agent = bond;
  bond = 'Body Double';
  let AgentinScope = (agent === '007');
  let prediction = true; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}


function elChiffre() {
  let agent = bond;
  bond = 'Body Double';
  
  let AgentinScope = (agent === '007');
  let prediction = false; // YOUR BOOLEAN PREDICTION HERE

  return AgentinScope === prediction;
}
