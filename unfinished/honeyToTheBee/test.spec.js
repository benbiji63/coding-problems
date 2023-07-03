describe("Sample tests", function() {
  it("Tests", function() {
    let hive = new Hive();
    let bee = new Bee(11, hive);
    
    assert.equal(bee.capacity, 11, "the bee does not have the expected capacity");
    assert.equal(hive.pollen, 100, "hive.pollen does not have a valid value");
    
    bee.unloadPollen();
    
    assert.equal(hive.pollen, 111, "hive.pollen amount does not have a valid value");
  });
});