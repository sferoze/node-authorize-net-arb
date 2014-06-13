require("should");

var credentials = require("./credentials");
var arb = require("../../lib/arb")(credentials.loginName, credentials.transactionKey);

describe("arb.getSubscriptionStatus", function() {
    it("should get status", function(done) {
        arb.getSubscriptionStatus({ refId: "my-ref", subscriptionId: "21093408" }, function(error, response) {
            if (error) {
                console.log(JSON.stringify(error));
            }

            (typeof error === "undefined").should.be.true;

            console.log(JSON.stringify(response));

            done();
        });
    });
});
