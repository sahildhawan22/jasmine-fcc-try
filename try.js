/* const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const jQuery = require( "jquery" )( window ); */

// Code under test
var MyApp = function () {
    var testAsync = function () {
        console.log("In testAsync fn, meaning that actual implementation of testAsync happened! No spies were used.");
        // Do something that takes a long time...
        
        //Writing my custom code:
        let deferred = jQuery.Deferred();
        setTimeout(() => {
            console.log("In test async function");
            deferred.resolve();
        }, 1000);

        return deferred.promise();
    };

    var callSomethingThatUsesAsync = function () {
        console.log("In callSomethingThatUsesAsync function");
        // Get a jQuery deferred
        var deferred = jQuery.Deferred();

        // Make an async call and do something when it's completed based on success/failure
        this.testAsync()
        .done(function () {
            // Resolve the deferred
            deferred.resolve("The async call succeeded");
        })
        .fail(function () {
            // Reject the deferred
            deferred.reject("The async call failed");
        });

        return deferred.promise();
    };

    return {
        testAsync: testAsync,
        callSomethingThatUsesAsync: callSomethingThatUsesAsync
    };
};

// Test helpers
var JasmineHelpers = function () {

    var deferredSuccess = function (args) {
        console.log("In Spied deferredSuccess function");
        var d = jQuery.Deferred();
        d.resolve(args);
        return d.promise();
    };

    var deferredFailure = function (args) {
        console.log("In Spied deferredSuccess function");
        var d = jQuery.Deferred();
        d.reject(args);
        return d.promise();
    };

    return {
        deferredSuccess: deferredSuccess,
        deferredFailure: deferredFailure
    };
};

// Specs
describe("Testing spies", function () {
    var jasmineHelpers = new JasmineHelpers();

    it("Should spy on async calls and use helpers to mock success/failure", function () {
        // Arrange
        var myApp = new MyApp();
        spyOn(myApp, "testAsync").and.callFake(function () {
            return jasmineHelpers.deferredSuccess();
        });

        // Act
        myApp.callSomethingThatUsesAsync()
        .always(function (result) {
            // Assert
            expect(result).toEqual("The async call succeeded");
        });
    });

});