'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const printStacks=()=> {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece=(startStack, endStack)=> {
  // Your code here

  // use the push and pop method to remove the last number in a given array and move it to the last position in a different array
  return stacks[endStack].push(stacks[startStack].pop());



}

const isLegal = (startStack, endStack) => {
  // Your code here
  //determin if the number your moving is being placed on a number of greater value.  If it is, return the boolean true value.  if not, return fales.
  if (stackLetterIsLegal(startStack, endStack)) {
  const valueOfFirstNumber = stacks[startStack][stacks[startStack].length-1]

  const valueOfSecondNumber = stacks[endStack][stacks[endStack].length-1]

  
    if (valueOfFirstNumber < valueOfSecondNumber || stacks[endStack].length === 0) {
      return true;
   } else {
    return false;
   }
  } 
}
// check if the move is to a valid array.  
const stackLetterIsLegal = (startStack, endStack) => {
  if(startStack === 'a' && endStack === 'b' || endStack === 'c') {
    return true;
  } else if (startStack === 'b' && endStack === 'a' || endStack === 'c') {
    return true;
  } else if (startStack === 'c' && endStack === 'a' || endStack === 'b') {
    return true;
  } else {
    return false;
  }
}

const checkForWin = () => {
  // Your code here
//if the value of the last array is 4 numerals long, then its a win.  if so, return true.  if not return false.
  if (stacks.c.length === 4) {
    return true;
  } else {
    return false;
  }
}

const towersOfHanoi = (startStack, endStack) => {
  // Your code here

  //put all of the above variables in order, nested within towersOfHanoi.
  if (isLegal(startStack, endStack)) {
  movePiece(startStack, endStack);
  } else {
    console.log("Not Legal Move");
  }
  if (checkForWin() ==true){
    console.log("YOU WIN!!!")
    stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };
  }
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    // added test #1
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [],
        c: [1]
      };
      assert.equal(isLegal('a', 'c'), false);
    });

    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3],
        b: [2],
        c: [1]
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
