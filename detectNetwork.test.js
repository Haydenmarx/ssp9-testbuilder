/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) === true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(isTrue !== true) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it("Has a prefix of 51 and a length of 16", function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });

  it("Has a prefix of 52 and a length of 16", function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 
  it("Has a prefix of 53 and a length of 16", function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var num = '567890123456'
  for (var length =16; length<20; length++) {
    (function(length, num) {
      it('has a prefix of 6011 and a length of ' + length, function() {
        detectNetwork('6011' + num).should.equal('Discover');
      });
      it('has a prefix of 644 and a length of ' + length, function() {
        detectNetwork('6440' + num).should.equal('Discover');
      });
      it('has a prefix of 645 and a length of ' + length, function() {
        detectNetwork('6450' + num).should.equal('Discover');
      });
      it('has a prefix of 646 and a length of ' + length, function() {
        detectNetwork('6460' + num).should.equal('Discover');
      });
      it('has a prefix of 647 and a length of ' + length, function() {
        detectNetwork('6470' + num).should.equal('Discover');
      });
      it('has a prefix of 648 and a length of ' + length, function() {
        detectNetwork('6480' + num).should.equal('Discover');
      });
      it('has a prefix of 649 and a length of ' + length, function(){
        detectNetwork('6490' + num).should.equal('Discover');
      });
      it('has a prefix of 65 and a length of ' + length, function(){
        detectNetwork('6500' + num).should.equal('Discover');
      });
    })(length, num)
    num = num.concat('0');
  }  
  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
});

describe('Maestro', function() {
  var num = '56789012';
  for (var length =12; length<20; length++) {
    (function(length, num) {
      it('has a prefix of 5018 and a length of ' + length, function(){
        detectNetwork('5018' + num).should.equal('Maestro');
      });
      it('has a prefix of 5020 and a length of ' + length, function(){
        detectNetwork('5020' + num).should.equal('Maestro');
      });
      it('has a prefix of 5038 and a length of ' + length, function(){
        detectNetwork('5038' + num).should.equal('Maestro');
      });
      it('has a prefix of 6304 and a length of ' + length, function(){
        detectNetwork('6304' + num).should.equal('Maestro');
      });
    })(length, num)
    num = num.concat('0');
  }
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
});

describe('China UnionPay', function() {
//   // '622126' + '789012'
//   // '622925' + '789012' + '1234567'
//622925789012
//622126789012
//6229257890120000000
//6229257890121234567
  var arr = [];
  for (var x =622126; x<622926; x++) {
    for (var y=6; y<=10000; y*=10) {
      (function(x, y) {
        it(`${x + '789012345' + y} has a prefix of ${x} and a length of ${(x + '789012345' + y).length}`, function(){
          detectNetwork(x + '789012345' + y).should.equal('China UnionPay');
        });
      })(x, y)
    }
  }
  for (var z=6; z<=1000; z*=10) {
    /*
    624 4567890123456
    625 4567890123456
    626 4567890123456
    */
    for (var a=624; a<627; a++) {
      it(`${a + '456789012345' + z} has a prefix of ${a} and a length of ${(a + '456789012345' + z).length}`, function(){
        detectNetwork(a + '456789012345' + z).should.equal('China UnionPay');
      }); 
    }

    /*
    6282 567890123456
    6283 567890123456
    6284 567890123456
    6285 567890123456
    6286 567890123456
    6287 567890123456
    */
    for (var b=6282; b<6288; b++) {
      it(`${b + '56789012345' + z} has a prefix of ${b} and a length of ${(b + '56789012345' + z).length}`, function(){
        detectNetwork(b + '56789012345' + z).should.equal('China UnionPay');
      }); 
    }
  }

  it(`${'6244567890123456'} has a prefix of ${'624'} and a length of ${'6244567890123456'.length}`, function(){
    detectNetwork('6244567890123456').should.equal('China UnionPay');
  }); 
  it(`${'62445678901234567'} has a prefix of ${'624'} and a length of ${'62445678901234567'.length}`, function(){
    detectNetwork('62445678901234567').should.equal('China UnionPay');
  }); 
  it(`${'624456789012345678'} has a prefix of ${'624'} and a length of ${'624456789012345678'.length}`, function(){
    detectNetwork('624456789012345678').should.equal('China UnionPay');
  }); 
  it(`${'624456789012345679'} has a prefix of ${'624'} and a length of ${'6244567890123456789'.length}`, function(){
    detectNetwork('6244567890123456789').should.equal('China UnionPay');
  }); 

  it(`${'6254567890123456'} has a prefix of ${'625'} and a length of ${'6254567890123456'.length}`, function(){
    detectNetwork('6254567890123456').should.equal('China UnionPay');
  }); 
  it(`${'62545678901234567'} has a prefix of ${'625'} and a length of ${'62545678901234567'.length}`, function(){
    detectNetwork('62545678901234567').should.equal('China UnionPay');
  }); 
  it(`${'625456789012345678'} has a prefix of ${'625'} and a length of ${'625456789012345678'.length}`, function(){
    detectNetwork('625456789012345678').should.equal('China UnionPay');
  }); 
  it(`${'625456789012345679'} has a prefix of ${'625'} and a length of ${'6254567890123456789'.length}`, function(){
    detectNetwork('6254567890123456789').should.equal('China UnionPay');
  }); 

  it(`${'6264567890123456'} has a prefix of ${'626'} and a length of ${'6264567890123456'.length}`, function(){
    detectNetwork('6264567890123456').should.equal('China UnionPay');
  }); 
  it(`${'62645678901234567'} has a prefix of ${'626'} and a length of ${'62645678901234567'.length}`, function(){
    detectNetwork('62645678901234567').should.equal('China UnionPay');
  }); 
  it(`${'626456789012345678'} has a prefix of ${'626'} and a length of ${'626456789012345678'.length}`, function(){
    detectNetwork('626456789012345678').should.equal('China UnionPay');
  }); 
  it(`${'626456789012345679'} has a prefix of ${'626'} and a length of ${'6264567890123456789'.length}`, function(){
    detectNetwork('6264567890123456789').should.equal('China UnionPay');
  }); 


  it(`${'6282567890123456'} has a prefix of ${'626'} and a length of ${'6282567890123456'.length}`, function(){
    detectNetwork('6282567890123456').should.equal('China UnionPay');
  }); 
  it(`${'62825678901234567'} has a prefix of ${'626'} and a length of ${'62825678901234567'.length}`, function(){
    detectNetwork('62825678901234567').should.equal('China UnionPay');
  }); 
  it(`${'628256789012345678'} has a prefix of ${'626'} and a length of ${'628256789012345678'.length}`, function(){
    detectNetwork('628256789012345678').should.equal('China UnionPay');
  }); 
  it(`${'628256789012345679'} has a prefix of ${'626'} and a length of ${'6282567890123456789'.length}`, function(){
    detectNetwork('6282567890123456789').should.equal('China UnionPay');
  }); 

  it(`${'6283567890123456'} has a prefix of ${'626'} and a length of ${'6283567890123456'.length}`, function(){
    detectNetwork('6283567890123456').should.equal('China UnionPay');
  }); 
  it(`${'62835678901234567'} has a prefix of ${'626'} and a length of ${'62835678901234567'.length}`, function(){
    detectNetwork('62835678901234567').should.equal('China UnionPay');
  }); 
  it(`${'628356789012345678'} has a prefix of ${'626'} and a length of ${'628356789012345678'.length}`, function(){
    detectNetwork('628356789012345678').should.equal('China UnionPay');
  }); 
  it(`${'628356789012345679'} has a prefix of ${'626'} and a length of ${'6283567890123456789'.length}`, function(){
    detectNetwork('6283567890123456789').should.equal('China UnionPay');
  }); 

  it(`${'6284567890123456'} has a prefix of ${'626'} and a length of ${'6284567890123456'.length}`, function(){
    detectNetwork('6284567890123456').should.equal('China UnionPay');
  }); 
  it(`${'62845678901234567'} has a prefix of ${'626'} and a length of ${'62845678901234567'.length}`, function(){
    detectNetwork('62845678901234567').should.equal('China UnionPay');
  }); 
  it(`${'628456789012345678'} has a prefix of ${'626'} and a length of ${'628456789012345678'.length}`, function(){
    detectNetwork('628456789012345678').should.equal('China UnionPay');
  }); 
  it(`${'628456789012345679'} has a prefix of ${'626'} and a length of ${'6284567890123456789'.length}`, function(){
    detectNetwork('6284567890123456789').should.equal('China UnionPay');
  }); 

  it(`${'6285567890123456'} has a prefix of ${'626'} and a length of ${'6285567890123456'.length}`, function(){
    detectNetwork('6285567890123456').should.equal('China UnionPay');
  }); 
  it(`${'62855678901234567'} has a prefix of ${'626'} and a length of ${'62855678901234567'.length}`, function(){
    detectNetwork('62855678901234567').should.equal('China UnionPay');
  }); 
  it(`${'628556789012345678'} has a prefix of ${'626'} and a length of ${'628556789012345678'.length}`, function(){
    detectNetwork('628556789012345678').should.equal('China UnionPay');
  }); 
  it(`${'628556789012345679'} has a prefix of ${'626'} and a length of ${'6285567890123456789'.length}`, function(){
    detectNetwork('6285567890123456789').should.equal('China UnionPay');
  }); 

  it(`${'6286567890123456'} has a prefix of ${'626'} and a length of ${'6286567890123456'.length}`, function(){
    detectNetwork('6286567890123456').should.equal('China UnionPay');
  }); 
  it(`${'62865678901234567'} has a prefix of ${'626'} and a length of ${'62865678901234567'.length}`, function(){
    detectNetwork('62865678901234567').should.equal('China UnionPay');
  }); 
  it(`${'628656789012345678'} has a prefix of ${'626'} and a length of ${'628656789012345678'.length}`, function(){
    detectNetwork('628656789012345678').should.equal('China UnionPay');
  }); 
  it(`${'628656789012345679'} has a prefix of ${'626'} and a length of ${'6286567890123456789'.length}`, function(){
    detectNetwork('6286567890123456789').should.equal('China UnionPay');
  }); 

  it(`${'6287567890123456'} has a prefix of ${'626'} and a length of ${'6287567890123456'.length}`, function(){
    detectNetwork('6287567890123456').should.equal('China UnionPay');
  }); 
  it(`${'62875678901234567'} has a prefix of ${'626'} and a length of ${'62875678901234567'.length}`, function(){
    detectNetwork('62875678901234567').should.equal('China UnionPay');
  }); 
  it(`${'628756789012345678'} has a prefix of ${'626'} and a length of ${'628756789012345678'.length}`, function(){
    detectNetwork('628756789012345678').should.equal('China UnionPay');
  }); 
  it(`${'628756789012345679'} has a prefix of ${'626'} and a length of ${'6287567890123456789'.length}`, function(){
    detectNetwork('6287567890123456789').should.equal('China UnionPay');
  }); 

  it(`${'6288567890123456'} has a prefix of ${'626'} and a length of ${'6288567890123456'.length}`, function(){
    detectNetwork('6288567890123456').should.equal('China UnionPay');
  }); 
  it(`${'62885678901234567'} has a prefix of ${'626'} and a length of ${'62885678901234567'.length}`, function(){
    detectNetwork('62885678901234567').should.equal('China UnionPay');
  }); 
  it(`${'628856789012345678'} has a prefix of ${'626'} and a length of ${'628856789012345678'.length}`, function(){
    detectNetwork('628856789012345678').should.equal('China UnionPay');
  }); 
  it(`${'628856789012345679'} has a prefix of ${'626'} and a length of ${'6288567890123456789'.length}`, function(){
    detectNetwork('6288567890123456789').should.equal('China UnionPay');
  }); 
})
// China UnionPay : 622126-622925, 
//                  624-626, 
//                  6282-6288 
//                  and a length of 16-19.


// describe('should support Switch')
//Switch : 4903, 4905, 4911, 4936, 
//         564182, 
//         633110, 6333, 6759 
//         and a length of 16, 18, or 19.
describe('China UnionPay', function() {

  it(`${'4903567890123456'} has a prefix of ${'4903'} and a length of ${'4903567890123456'.length}`, function(){
    detectNetwork('4903567890123456').should.equal('Switch');
  }); 
  it(`${'490356789012345678'} has a prefix of ${'4903'} and a length of ${'490356789012345678'.length}`, function(){
    detectNetwork('490356789012345678').should.equal('Switch');
  }); 
  it(`${'4903567890123456789'} has a prefix of ${'4903'} and a length of ${'4903567890123456789'.length}`, function(){
    detectNetwork('4903567890123456789').should.equal('Switch');
  }); 

  it(`${'4905567890123456'} has a prefix of ${'4905'} and a length of ${'4905567890123456'.length}`, function(){
    detectNetwork('4905567890123456').should.equal('Switch');
  }); 
  it(`${'490556789012345678'} has a prefix of ${'4905'} and a length of ${'490556789012345678'.length}`, function(){
    detectNetwork('490556789012345678').should.equal('Switch');
  }); 
  it(`${'4905567890123456789'} has a prefix of ${'4905'} and a length of ${'4905567890123456789'.length}`, function(){
    detectNetwork('4905567890123456789').should.equal('Switch');
  }); 

  it(`${'4911567890123456'} has a prefix of ${'4911'} and a length of ${'4911567890123456'.length}`, function(){
    detectNetwork('4911567890123456').should.equal('Switch');
  }); 
  it(`${'491156789012345678'} has a prefix of ${'4911'} and a length of ${'491156789012345678'.length}`, function(){
    detectNetwork('491156789012345678').should.equal('Switch');
  }); 
  it(`${'4911567890123456789'} has a prefix of ${'4911'} and a length of ${'4911567890123456789'.length}`, function(){
    detectNetwork('4911567890123456789').should.equal('Switch');
  }); 

  it(`${'4936567890123456'} has a prefix of ${'4936'} and a length of ${'4936567890123456'.length}`, function(){
    detectNetwork('4936567890123456').should.equal('Switch');
  }); 
  it(`${'493656789012345678'} has a prefix of ${'4936'} and a length of ${'493656789012345678'.length}`, function(){
    detectNetwork('493656789012345678').should.equal('Switch');
  }); 
  it(`${'4936567890123456789'} has a prefix of ${'4936'} and a length of ${'4936567890123456789'.length}`, function(){
    detectNetwork('4936567890123456789').should.equal('Switch');
  }); 

  
  it(`${'5641827890123456'} has a prefix of ${'564182'} and a length of ${'5641827890123456'.length}`, function(){
    detectNetwork('5641827890123456').should.equal('Switch');
  }); 
  it(`${'564182789012345678'} has a prefix of ${'564182'} and a length of ${'564182789012345678'.length}`, function(){
    detectNetwork('564182789012345678').should.equal('Switch');
  }); 
  it(`${'5641827890123456789'} has a prefix of ${'564182'} and a length of ${'5641827890123456789'.length}`, function(){
    detectNetwork('5641827890123456789').should.equal('Switch');
  }); 



  it(`${'6331107890123456'} has a prefix of ${'633110'} and a length of ${'6331107890123456'.length}`, function(){
    detectNetwork('6331107890123456').should.equal('Switch');
  }); 
  it(`${'633110789012345678'} has a prefix of ${'633110'} and a length of ${'633110789012345678'.length}`, function(){
    detectNetwork('633110789012345678').should.equal('Switch');
  }); 
  it(`${'6331107890123456789'} has a prefix of ${'633110'} and a length of ${'6331107890123456789'.length}`, function(){
    detectNetwork('6331107890123456789').should.equal('Switch');
  }); 

  
  
  it(`${'6333567890123456'} has a prefix of ${'6333'} and a length of ${'6333567890123456'.length}`, function(){
    detectNetwork('6333567890123456').should.equal('Switch');
  }); 
  it(`${'633356789012345678'} has a prefix of ${'6333'} and a length of ${'633356789012345678'.length}`, function(){
    detectNetwork('633356789012345678').should.equal('Switch');
  }); 
  it(`${'6333567890123456789'} has a prefix of ${'6333'} and a length of ${'6333567890123456789'.length}`, function(){
    detectNetwork('6333567890123456789').should.equal('Switch');
  }); 

  
  
  it(`${'6759567890123456'} has a prefix of ${'6759'} and a length of ${'6759567890123456'.length}`, function(){
    detectNetwork('6759567890123456').should.equal('Switch');
  }); 
  it(`${'675956789012345678'} has a prefix of ${'6759'} and a length of ${'675956789012345678'.length}`, function(){
    detectNetwork('675956789012345678').should.equal('Switch');
  }); 
  it(`${'6759567890123456789'} has a prefix of ${'6759'} and a length of ${'6759567890123456789'.length}`, function(){
    detectNetwork('6759567890123456789').should.equal('Switch');
  }); 

})