/* A Suite is a set of specs or test cases used to test JS code encapsulated by an object/class or a function. */
//Commands used:
//$ mkdir jasmine-project $ cd jasmine-project
//npm install -g jasmine
//npx jasmine init --- used to initialize jasmine proj to create our jasmine.json file.
//npm init --- to create package.json file.

const utils = require("../index");

describe("MyJSUtilities", function() {
    describe("String Utils", function() {
        it("should be able to lower case a string", function() {
            expect(utils.toLowerCase).toBeDefined();
            expect(utils.toLowerCase("HELLO WORLD")).toEqual("hello world");
        });
        it("should be able to upper case a string", function() {
            expect(utils.toUpperCase).toBeDefined();
            expect(utils.toUpperCase("hello world")).toEqual("HELLO WORLD");
        });  
        it("should be able to confirm if a string contains a substring", function() {
            expect(utils.contains).toBeDefined();
            expect(utils.contains("hello world", "hello", 0)).toBeTruthy();
        });  
        it("should be able repeat a string multiple times", function() {
            expect(utils.repeat).toBeDefined();
            expect(utils.repeat("hello", 3)).toEqual("hellohellohello");
        });
    });
    describe("Math Utils", function() {
        describe("Basic Math Utils", function() {
            it("It should tell if the the number is even", function() {});
        }); 
        describe("Advanced Math Utils", function() {
            it("It should tell if the number is prime", function() {});
            it("It should print fibonacci series", function(){});
        });
    });
});

describe("/Async Op", function() {
  var asyncOpCompleted = false;
  beforeEach(function(done) {
    utils.simulateAsyncOp(function() { 
      asyncOpCompleted = true; 
      done();
    });
  });
  it("Should be able to tell if async call got completed", function() {
    expect(asyncOpCompleted).toEqual(true);
  })
});

describe("Async/await op", function() {
  it("Should work with async/await", async function() {
    let completed = false;
    completed = await utils.simulateAsyncAwait();
    expect(completed).toEqual(true);
  })
})

/* A spec declares a test case that belongs to a test suite. This is done by calling the Jasmine global function it()
A spec may contain one or more expectations. Each expectation is simply an assertion that can return either true or false.
*/

/* 
You can temporarily disable a suite using the xdescribe() function. Similarly xit().
Suites contain Specs. Specs contain expectation/assertions.
*/

/* 
Expectations:
1. Expectations creatied using expect().
2. It compose the spec.
3. Used with matcher functions. Matacher fn chained to expect().
4. A matcher function compares between an actual value (passed to the expect() function it's chained with) and an expected value (directly passed as a parameter to the matcher) and returns either true or false which either passes or fails the spec.
5. To negate/invert the boolean result of any matcher, you can use the not keyword before calling the matcher.
*/

/* Some Built-in Matchers:
toBe() for testing for identity,
toBeNull() for testing for null,
toBeUndefined()/toBeDefined() for testing for undefined/not undefined,
toBeNaN() for testing for NaN (Not A Number)
toEqual() for testing for equality,
toBeFalsy()/toBeTruthy() for testing for falseness/truthfulness etc.
 */

describe("/Basic Math Utils", function () {
  beforeEach(function () {
    jasmine.addMatchers({
      hasEvenMethod: function (matchersUtil, customEqualityTesters) {
        return {
          compare: function (actual, expected) {
            //matchersUtil.
            var result = { pass: utils.isEven !== undefined };
            if (result.pass) {
              result.message = "Expected isEven() to be not defined.";
            } else {
              result.message = "Expected isEven() to be defined.";
            }
            return result;
          },
        };
      },
    });
  }); 
});