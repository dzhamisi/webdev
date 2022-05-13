describe("raises x to power n", function() {
    it("5 in power 1 would be 5", function() {
        assert.equal(pow(5, 1), 5);
    });

    // Mocha will lunch this part
    it.only("5 in power 2 would be 25", function() {
        assert.equal(pow(5, 2), 25);
    });

    it("5 in power 3 would be 125", function() {
        assert.equal(pow(5, 3), 125);
    });
});
